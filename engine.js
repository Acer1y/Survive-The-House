import { House } from "/the_house.js"

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

const ui = new UI() // Initialize the UI
const house = new House(ui)

function startGame() {
    ui.clearLog()
    ui.write("You found a house to take shelter in from whatever is happening outside.")
    ui.write("Your heart is still racing, and you hear the growls from those THINGS from other side of the door.")
    ui.write("While the door is closed tight, the house is lit dimly and you still need to make sure they can't get in.")

    house.showIntroOptions()
}

function exploreRoom() {
    console.log("exploreRoom triggered")
    ui.write("\nYou glance around the room, in the area you see book cases, chairs, a table, and some electronics like a radio and TV.")
    ui.write("\nYou could probably use the chair or book cases to try and block the door.")

    house.showBarricadeOptions() 

}


startGame() // Start the game