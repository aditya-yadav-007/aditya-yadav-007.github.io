const outputElement = document.getElementById("output");
const typed = document.getElementById("typed");
const cursor = document.getElementById("cursor");
const hiddenInput = document.getElementById("hidden-input"); // hidden input for mobile

let buffer = "";

// Print welcome message
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

// Function to append text to output
function printOutput(text) {
  outputElement.innerHTML += text + "\n";
  outputElement.scrollTop = outputElement.scrollHeight;
}

// Execute a command
function handleCommand(input) {
  const cmd = input.trim();
  if (!cmd) return;

  // Show prompt + typed command
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

// Handle desktop key events
document.addEventListener("keydown", (e) => {
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    buffer += e.key;
    typed.textContent = buffer;
  } else if (e.key === "Backspace") {
    buffer = buffer.slice(0, -1);
    typed.textContent = buffer;
    e.preventDefault();
  } else if (e.key === "Enter") {
    handleCommand(buffer);
    buffer = "";
    typed.textContent = "";
    if (hiddenInput) hiddenInput.value = "";
    e.preventDefault();
  }
});

// Mirror hidden input for mobile keyboards
if (hiddenInput) {
  hiddenInput.addEventListener("input", () => {
    buffer = hiddenInput.value;
    typed.textContent = buffer;
  });
}

// Focus handling
document.addEventListener("click", () => {
  if (hiddenInput) hiddenInput.focus();
  else typed.focus();
});
window.onload = () => {
  if (hiddenInput) hiddenInput.focus();
  else typed.focus();
};
