// Declare the UI class
export class UI {
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