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
            ui.write("You locked the door. It won't hold forever, but it's somethin.")
        } else {
            ui.write("the door is already locked.")
        }
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
        const buttons = [
            { label: "Barricade with Chair", onClick: () => this.barricadeDoor("chair") },
            { label: "Barricade with Bookcase", onClick: () => this.barricadeDoor("bookcase")}
        ];

        if (!this.isDoorLocked) {
            buttons.push({ label: "Lock the Door", onClick: () => this.lockDoor });
        }

        this.ui.setButtons(buttons);
    }

    barricadeDoor(item) {
        console.log("barricade door was called")
        if (item === "bookcase") {
            this.doorDurability += 20;
            this.barricades.push("bookcase");
            this.ui.write("You push a bookcase in front of the door. That should hold better.")
        } else if (item === "chair") {
            this.doorDurability += 10;
            this.barricades.push("chair")
            this.ui.write("You wedge a chair under the handle. Not Perfect, but it should hold for a bit longer than the lock alone.")
        }
    }

    getDoorStatus() {
        return `Door Durability: ${this.doorDurability}`
    }
}
