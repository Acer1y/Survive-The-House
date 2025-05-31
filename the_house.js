export class House {
    constructor(ui) {
        this.ui = ui
        this.doorDurability = 0;
        this.isDoorLocked = false;
        this.barricades = []
        this.noiseLevel=0
        this.noiseDecayTimer = null
    }

    lockDoor() {
        if (!this.isDoorLocked) {
            this.isDoorLocked = true;
            this.doorDurability += 5;
            this.ui.write("You locked the door. It won't hold forever, but it's something.")
            this.increaseNoise(2, 5000)
        } else {
            this.ui.write("the door is already locked.")
        }

        this.showBarricadeOptions()
    }

    showIntroOptions() {
        this.ui.setButtons([
            { label: "Explore the room", onClick: () => this.exploreRoom() },
            { label: "Lock the Door", onClick: () => this.lockDoor() }
        ]);
    }
    
    exploreRoom() {
        this.ui.write("You look around the room and see bookcases, a chair, and various electronics like a radio, TV, etc.");
        this.showBarricadeOptions();
    }

    showBarricadeOptions() {
        const buttons = []

        if (!this.barricades.includes("chair")) {
            buttons.push({ label: "Barricade with Chair", onClick: () => this.barricadeDoor("chair") });
        }

        if (!this.barricades.includes("bookcase")) {
            buttons.push({ label: "Barricade with Bookcase", onClick: () => this.barricadeDoor("bookcase") });
        }

        if (!this.isDoorLocked) {
            buttons.push({ label: "Lock the Door", onClick: () => this.lockDoor() });
        }

        if (buttons.length === 0) {
            this.ui.write("You've used everything in the room that could help block the door.");
        }

        this.ui.setButtons(buttons);
    }

    barricadeDoor(item) {
        if (item === "bookcase") {
            this.doorDurability += 20;
            this.barricades.push("bookcase");
            this.ui.write("You push a bookcase in front of the door. That should hold better.")
            this.increaseNoise(20, 15000)
        } else if (item === "chair") {
            this.doorDurability += 10;
            this.barricades.push("chair")
            this.ui.write("You wedge a chair under the handle. Not Perfect, but it should hold for a bit longer than the lock alone.")
            this.increaseNoise(10, 10000)
        }

        this.barricades.push(item)

        this.showBarricadeOptions() // Redraw the barricade options to remove anything already used.
    }

    getDoorStatus() {
        return `Door Durability: ${this.doorDurability}`
    }

    increaseNoise(amount, duration) {
        this.noiseLevel += amount
        this.ui.write(`Hopefully the noise from that didn't attract anyone's attention!`)

        if (this.noiseDecayTimer) {
            clearTimeout(this.noiseDecayTimer)
        }

        this.noiseDecayTimer = setTimeout(() =>{
            this.noiseLevel = 0
        })
    }
}
