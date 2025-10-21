const outputElement = document.getElementById("output");
const typed = document.getElementById("typed");
const cursor = document.getElementById("cursor");
const hiddenInput = document.getElementById("hidden-input");

let buffer = "";

printOutput(`
=============================================================
 $$$$$$\\              $$\\      $$\\                           
$$  __$$\\             $$ |     $$ |                          
$$ /  $$ | $$$$$$\  $$$$$$\\    $$$$$$$\   $$$$$$\\   $$$$$$\\  
$$$$$$$$ |$$  __$$\\ \\_$$  _|   $$  __$$\\ $$  __$$\\ $$  __$$\\ 
$$  __$$ |$$$$$$$$ |  $$ |     $$ |  $$ |$$$$$$$$ |$$ |  \\__|
$$ |  $$ |$$   ____|  $$ |$$\\  $$ |  $$ |$$   ____|$$ |      
$$ |  $$ |\\$$$$$$$\\   \\$$$$  | $$ |  $$ |\\$$$$$$$\\ $$ |      
\\__|  \\__| \\_______|   \\____/  \\__|  \\__| \\_______|\\__|      

-------------------------------------------------------------
     Welcome to Aditya Yadav’s Interactive Terminal
     Type 'help' to view available commands.
=============================================================

`);

const commands = {
  skills: "$$ Penetration Testing (Ethical Hacking): Burp Suite, Metasploit, Nmap, Wireshark, Hashcat, John the Ripper, Aircrack-ng, OpenVAS, Nessus\n\
$$ Reverse Engineering: Ghidra, x64dbg, edb-debugger, Ollydbg, Radare2\n\
$$ Digital Forensics: Autopsy, Volatility, FTK Imager, Sleuth Kit, Memory & Disk Forensics\n\
$$ Hardware Pentesting: SPI, UART, IIC, JTAG, RS232, RS485, SDR (Software Defined Radio)\n\
$$ Networking & Security Protocols: TCP/IP, DNS, DHCP, VPNs, SSL/TLS, Wi-Fi Security, Packet Sniffing & Analysis\n\
$$ Shell Scripting: Bash, PowerShell\n\
$$ Programming & Scripting: C, Python, Assembly (x64 & ARM), Java, JavaScript, C++, MySQL, COBOL",

  about: "This is a terminal-style website built using HTML, CSS, and JS.",
  help: "Available commands: skills, about, clear, help",
  pwd: "/home/usr/guest"

};

// Output helper
function printOutput(text) {
  outputElement.innerHTML += text + "\n";
  outputElement.scrollTop = outputElement.scrollHeight;
}

function handleCommand(input) {
  const cmd = input.trim();
  if (!cmd) return;

  // Show prompt + typed command
  printOutput(`<span style="color:#90ee90;">user@guest&gt;</span><span style="color:white;">${cmd}</span>\n`);

  const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === "clear") 
  {
    outputElement.innerHTML = "";
  } 
  else if (lowerCmd === "skills-more") 
  {
    printOutput("Opening detailed skills page...\n");
    window.open("./skills/index.html", "_blank"); // <-- change URL here
  }
  else if (commands[lowerCmd]) 
  {
    printOutput(commands[lowerCmd] + "\n");
  } 
  else 
  {
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
