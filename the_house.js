export class House {
    constructor() {
        this.doorDurability = 0;
        this.isDoorLocked = false;
        this.barricades = []
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

    barricadeDoor(item) {
        if (item === "bookcase") {
            this.doorDurability += 20;
            this.barricades.push("bookcase");
            ui.write("You push a bookcase in front of the door. That should hold better.")
        } else if (item === "chair") {
            this.doorDurability += 10;
            this.barricades.push("chair")
            ui.write("You wedge a chair under the handle. Not Perfect, but it should hold for a bit longer than the lock alone.")
        }
    }

    getDoorStatus() {
        return `Door Durability: ${this.doorDurability}`
    }
}
