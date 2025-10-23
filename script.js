const outputElement = document.getElementById("output");
const typed = document.getElementById("typed");
const cursor = document.getElementById("cursor");
const hiddenInput = document.getElementById("hidden-input");

let buffer = "";



const banner = (`
==================================================================================================================
 $$$$$$\\        $$\\ $$\\   $$\\                               $$\\     $$\\               $$\\                     
$$  __$$\\       $$ |\\__|  $$ |                              \\$$\\   $$  |              $$ |                    
$$ /  $$ | $$$$$$$ |$$\\ $$$$$$\\   $$\\   $$\\  $$$$$$\\         \\$$\\ $$  /$$$$$$\\   $$$$$$$ | $$$$$$\\ $$\\    $$\\ 
$$$$$$$$ |$$  __$$ |$$ |\\_$$  _|  $$ |  $$ | \\____$$\\         \\$$$$  / \\____$$\\ $$  __$$ | \\____$$\\\\$$\\  $$  |
$$  __$$ |$$ /  $$ |$$ |  $$ |    $$ |  $$ | $$$$$$$ |         \\$$  /  $$$$$$$ |$$ /  $$ | $$$$$$$ |\\$$\\$$  / 
$$ |  $$ |$$ |  $$ |$$ |  $$ |$$\\ $$ |  $$ |$$  __$$ |          $$ |  $$  __$$ |$$ |  $$ |$$  __$$ | \\$$$  /  
$$ |  $$ |\\$$$$$$$ |$$ |  \\$$$$  |\\$$$$$$$ |\\$$$$$$$ |          $$ |  \\$$$$$$$ |\\$$$$$$$ |\\$$$$$$$ |  \\$  /   
\\__|  \\__| \\_______|\\__|   \\____/  \\____$$ | \\_______|          \\__|   \\_______| \\_______| \\_______|   \\_/    
                                  $$\\   $$ |                                                                  
                                  \\$$$$$$  |                                                                  
                                   \\______/                                                                   
-------------------------------------------------------------------------------------------------------------------
     Welcome to Aditya Yadav’s Interactive Terminal
     Type 'help' to view available commands.
==================================================================================================================

`);

printOutput(banner);

const commands = 
{
  skills: '$$ Penetration Testing (Ethical Hacking): Burp Suite, Metasploit, Nmap, Wireshark, Hashcat, John the Ripper, Aircrack-ng, OpenVAS, Nessus\n\
$$ Reverse Engineering: Ghidra, x64dbg, edb-debugger, Ollydbg, Radare2\n\
$$ Digital Forensics: Autopsy, Volatility, FTK Imager, Sleuth Kit, Memory & Disk Forensics\n\
$$ Hardware Pentesting: SPI, UART, IIC, JTAG, RS232, RS485, SDR (Software Defined Radio)\n\
$$ Networking & Security Protocols: TCP/IP, DNS, DHCP, VPNs, SSL/TLS, Wi-Fi Security, Packet Sniffing & Analysis\n\
$$ Shell Scripting: Bash, PowerShell\n\
$$ Programming & Scripting: C, Python, Assembly (x64 & ARM), Java, JavaScript, C++, MySQL, COBOL',
  ls: "Access denied",
  sudo : "F*** Off",
  about: "This is a terminal-style website built using HTML, CSS, and JS.",
  help: "Available commands: \n\ $ help  \n\ $ about \n\ $ clear \n\ $ skills \n\ $ skills-more  \n\ $ exit \n\ $ date  \n\ $ help [command] - for more info  \n\ $ curl \n\ $ echo \n\ $ banner \n\ $ projects \n\ $ linkein  \n\ $ github \n\ $ repo \n\ $ orcid \n\ (Don't add $)",
  pwd: "/home/usr/guest",
  exit: "Click on the X on the top right of the browser to exit",
  education: "$ Class 12th from ISC = 84%",
  email : "Contact me at aditya.ry2007@gmail.com",
  certfications: "Will surely get few",
  repo: "",
  github: "https://github.com/aditya-yadav-007",
  linkedin: "https://www.linkedin.com/in/aditya-r-yadav/",
  orcid: "ORCiD = 0009-0004-0622-706X",
  whoami: "Guest User"

};

const helpDetails = {
  skills: "skills — Lists core technical and creative skills. For complete detail use skills-more",
  about: "about — Displays information about the purpose of this terminal.",
  clear: "clear — Clears all text from the terminal screen.",
  help: "help [command] — Displays detailed info about the given command.",
};


// Output helper
function printOutput(text) {
  outputElement.innerHTML += text + "\n";
  outputElement.scrollTop = outputElement.scrollHeight;
}

function handleCommand(input) 
{
  const cmd = input.trim();
  if (!cmd) return;
  // Show prompt + typed command
  printOutput(`<span style="color:#90ee90;">user@guest&gt;</span><span style="color:white;">${cmd}</span>\n`);

  const parts = cmd.toLowerCase().split(" ");
  const base = parts[0];
  const arg = parts[1];


  if (base === "clear") 
  {
    outputElement.innerHTML = "";
    printOutput(banner);
  }
  else if(base === "echo")
  {
    printOutput(arg + "\n" );
  }
  else if (base === "help") 
  {
    if (arg) 
    {
      if (helpDetails[arg]) 
        {
          printOutput(helpDetails[arg] + "\n");
        }
      else 
        {
        printOutput(`No detailed help found for '${arg}'.\n`);  
        }
    }
    if (commands[base])
      {
        // Show available commands
        printOutput(commands[base]+"\n");
      }
    
  } 
  else if (base === "curl") 
      {
    if (!arg) {
      printOutput("Usage: curl [url]\n");
    } else {
      printOutput(`Connecting to ${arg} ...\n`);
      setTimeout(() => {
        printOutput(`Connected to ${arg}\n`);
        printOutput(`HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 2048
Server: Aether-Terminal\n`);
        printOutput(`<html>
  <head><title>${arg}</title></head>
  <body><h1>Welcome to ${arg}</h1><p>This is a simulated curl response.</p></body>
</html>\n`);
      }, 800);
    }
  } 

  else if (base === "banner")
  {
    printOutput(banner);
  }

  else if (base === "date") 
  {
  const now = new Date();
  const formatted = now.toLocaleString(); // e.g. "10/22/2025, 4:35:10 PM"
  printOutput(`${formatted}\n`);
  }
  else if (base === "skills-more") 
  {
    printOutput("Opening detailed skills page...\n");
    window.open("./skills/index.html", "_blank"); // <-- change URL here
  }
  else if (base === "projects") 
  {
    printOutput("Opening detailed projects page...\n");
    window.open("./projects/index.html", "_blank"); // <-- change URL here
  }
  else if (base === "vim") 
  {
    printOutput("Not here buddy\n");
    window.open("https://www.vim.org/", "_blank"); // <-- change URL here
  }
  else if (commands[base]) 
  {
    printOutput(commands[base] + "\n");
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
