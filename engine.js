import { House } from "/the_house.js"

// Declare the UI class
class UI {
    constructor() {
        this.log = document.getElementById("log")
        this.buttons = document.getElementById("buttons")
    }

    write(text) {
        const entry = document.createElement("div");
        entry.className = "log-entry";
        entry.textContent = text;
        this.log.appendChild(entry);
        this.log.scrollTop = this.log.scrollHeight;

        // Check if too many entries
        if (this.log.children.length > 5) {
            const oldEntry = this.log.children[0];
            oldEntry.classList.add("fade-out");

            // Remove it after fade animation
            setTimeout(() => {
                if (this.log.contains(oldEntry)) {
                    this.log.removeChild(oldEntry);
                }
            }, 1000); // match fade duration
        }
    }

    clearLog() {
        this.log.textContent = ""
    }

    setButtons(buttonList) {
        this.buttons.innerHTML = "" // This will clear previous buttons
        buttonList.forEach(btn => {
            const button = document.createElement("button")
            button.textContent = btn.label
            button.className = "btn"
            button.onclick = btn.onClick
            this.buttons.appendChild(button)
        })
    }
}

class GameEngine {
    constructor(ui) {
        this.ui = ui // Instantiate the UI class
        this.house = new House(ui) // Call house logic
        this.time = {day: 1, hours: 6, minute: 0}
    }

    tick() {

       //console.log(`minutes: ${minutes} and bool check ${minutes >= 60} and hours = ${hours} `)
       //console.log(`Tick was called, check this.house: ${this.house.noiseLevel}`)
        this.time.minute += 1
            if (this.time.minute >= 60) {
                this.time.minute = 0;
                this.time.hours += 1
            }

            if (this.time.hours >= 24) {
                this.time.hours = 0
                this.time.day += 1
            }

            if (this.house.noiseLevel > 0) {
                this.zombieAttackCheck()
            }
            console.log(this.house.noiseLevel)
            //console.log(`${this.time.minute} and ${this.time.hours} and ${this.time.day}`)
    }

    isNightTime() {
        return this.time.hours >= 20 || this.time.hours < 6;
    }

    zombieAttack() {
        const damage = Math.floor(Math.random() * 10) + 5; // Damage 5–15
        this.house.doorDurability -= damage;

        this.ui.write(`A zombie beats its fist against door, the door and barricade won't take much of this.`);
        this.ui.write(`Door Durability: ${this.doorDurability}`);

        if (this.doorDurability <= 0) {
            this.ui.write("The barricade breaks! Zombies burst in!");
            // Decide on what happens here later.
        }
    }

    zombieAttackCheck() {
        const baseChance = this.house.noiseLevel * 0.05 // Base chance of 5%
        const isNight = this.isNightTime()
        const nightMultiplier = this.isNightTime() ? 2.0 : 0.5
        const finalChance = baseChance * nightMultiplier 

        console.log(`Zombie attack check was called. Final Chance = ${finalChance}, and timecheck is: ${isNight}`)

        if (Math.random() < finalChance) {
            this.zombieAttack()
        }
    }

    startGame() {
        // Start the game heart beat
        this.tickLoop = setInterval(() => {
            this.tick() // This is in milliseconds, 1000 = 1 second so 60 seconds will be 1 in game hour
     
            //console.log(this.zombieAttachCheck.)
        }, 1000)


        this.ui.clearLog()
        this.ui.write("You found a house to take shelter in from whatever is happening outside.")
        this.ui.write("Your heart is still racing, and you hear the growls from those THINGS from other side of the door.")
        this.ui.write("While the door is closed tight, the house is lit dimly and you still need to make sure they can't get in.")

        this.house.showIntroOptions()
    }
    


}

const ui = new UI()
const game = new GameEngine(ui)
game.startGame()