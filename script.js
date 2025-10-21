const outputElement = document.getElementById("output");
const typed = document.getElementById("typed");
const cursor = document.getElementById("cursor");
const hiddenInput = document.getElementById("hidden-input");

let buffer = "";

printOutput(
  "Welcome to my terminal demo!\n" +
  "This site is keyboard-only. Use Enter to run commands.\n" +
  "Type 'help' to see available commands.\n"
);

const commands = {
  skills: "Skills: HTML, CSS, JavaScript, Python, C, Embedded Systems.",
  about: "This is a terminal-style website built using HTML, CSS, and JS.",
  help: "Available commands: skills, about, clear, help",
};

// Output helper
function printOutput(text) {
  outputElement.innerHTML += text + "\n";
  outputElement.scrollTop = outputElement.scrollHeight;
}

function handleCommand(input) {
  const cmd = input.trim();
  if (!cmd) return;

  printOutput(`<span style="color:#90ee90;">user@guest&gt; </span><span style="color:white;">${cmd}</span>\n`);

  const lowerCmd = cmd.toLowerCase();
  if (lowerCmd === "clear") {
    outputElement.innerHTML = "";
  } else if (commands[lowerCmd]) {
    printOutput(commands[lowerCmd] + "\n");
  } else {
    printOutput("Command not found. Type \"help\" for list.\n");
  }
}

// Update typed text from hidden input
hiddenInput.addEventListener("input", () => {
  buffer = hiddenInput.value;
  typed.textContent = buffer;
});

// Submit on Enter
hiddenInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCommand(buffer);
    buffer = "";
    typed.textContent = "";
    hiddenInput.value = "";
    e.preventDefault();
  }
});

// Focus the hidden input when terminal is tapped
document.getElementById("terminal").addEventListener("click", () => hiddenInput.focus());
window.onload = () => hiddenInput.focus();
