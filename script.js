const outputElement = document.getElementById("output");
const typed = document.getElementById("typed");
const cursor = document.getElementById("cursor");

let buffer = "";

printOutput(
  "Welcome to my terminal demo!\n" +
  "This site is keyboard-only. Use Enter to run commands.\n" +
  "Type 'help' to see available commands.\n"
);

const commands = {
  skills: "Skills: HTML, CSS, JavaScript, Python, C, Embedded Systems.",
  about: "This is a terminal-style website built using HTML, CSS, and JS. ",
  help: "Available commands: skills, about, clear, help ",
};

function printOutput(text) {
  outputElement.innerHTML += text + "\n";
  outputElement.scrollTop = outputElement.scrollHeight;
}

function handleCommand(input) {
  const cmd = input.trim();

  // Print the prompt in green, typed text in white
  printOutput(`<span style="color:#90ee90;">user@guest> </span> <span style="color:white;">${cmd}</span>\n`);

  const lowerCmd = cmd.toLowerCase();

  if (lowerCmd === "clear") {
    outputElement.innerHTML = "";
  } else if (commands[lowerCmd]) {
    printOutput(commands[lowerCmd] + "\n");
  } else if (cmd) {
    printOutput(`Command not found. Type "help" for list.\n`);
  }
}


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
    e.preventDefault();
  }
});

document.addEventListener("click", () => typed.focus());
window.onload = () => typed.focus();
