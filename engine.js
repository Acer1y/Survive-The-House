class UI {
    constructor() {
        this.log = document.getElementById("log")
        this.buttons = document.getElementById("buttons")
    }

    write(text) {
        this.log.textContent += text + "\n"
        this.log.scrollTop = this.log.scrollHeight
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
            button.onclick = btn.onclick
            this.buttons.appendChild(button)
        })
    }
}

const ui = new UI() // Initialize the UI and start the game

function startGame() {
    ui.clearLog()
    ui.write("You found a house to take shelter in from whatever is happening outside.")
    ui.write("Your heart is still racing, and you hear the growls from those THINGS from other side of the door.")
    ui.write("While the door is closed tight, the house is lit dimly and you still need make they can't get in.")
    ui.setButtons([
        { label: "Explore the room", onClick: exploreRoom },
        { label: "Lock the Door", onClick: lockDoor}
    ])
}

function exploreRoom() {
    ui.write("\nYou glance around the room, in the area you see book cases, chairs, a table, and some electronics like a radio and TV.")
    ui.write("\nYou could probably use the chair or book cases to try and block the door.")
}

function lockDoor() {
    ui.write("\nYou lock the door behind you, the door could still be busted open, but its better than nothing!")
}
