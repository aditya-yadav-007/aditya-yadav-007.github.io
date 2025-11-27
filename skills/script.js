document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const modal = document.getElementById('skillModal');
    const closeBtn = document.querySelector('.close');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    // Updated skill details data with heavy emphasis on tools
    const skillDetails = {
        'penetration-testing': {
            title: 'Penetration Testing ⚔️',
            content: `
                <div class="skill-section">
                    <h3>Core Competencies</h3>
                    <ul>
                        <li>Web Application Penetration Testing</li>
                        <li>Network Infrastructure Testing</li>
                        <li>Wireless Security Assessment</li>
                        <li>Vulnerability Assessment & Management</li>
                    </ul>
                </div>
                
                <div class="tools-section">
                    <h3>🛠️ Primary Tools & Technologies</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">Burp Suite</span>
                        <span class="tool-tag">Metasploit</span>
                        <span class="tool-tag">Nmap</span>
                        <span class="tool-tag">Wireshark</span>
                        <span class="tool-tag">Hashcat</span>
                        <span class="tool-tag">John the Ripper</span>
                        <span class="tool-tag">Aircrack-ng</span>
                        <span class="tool-tag">OpenVAS</span>
                        <span class="tool-tag">Nessus</span>
                    </div>
                </div>
            `
        },
        'reverse-engineering': {
            title: 'Reverse Engineering 🔬',
            content: `
                <div class="skill-section">
                    <h3>Core Competencies</h3>
                    <ul>
                        <li>Malware Analysis & Deobfuscation</li>
                        <li>Binary Analysis & Disassembly</li>
                        <li>Firmware Reverse Engineering</li>
                        <li>Vulnerability Research</li>
                    </ul>
                </div>
                
                <div class="tools-section">
                    <h3>🛠️ Primary Tools & Technologies</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">Ghidra</span>
                        <span class="tool-tag">x64dbg</span>
                        <span class="tool-tag">edb-debugger</span>
                        <span class="tool-tag">Ollydbg</span>
                        <span class="tool-tag">Radare2</span>
                    </div>
                </div>
            `
        },
        'digital-forensics': {
            title: 'Digital Forensics 🔍',
            content: `
                <div class="skill-section">
                    <h3>Core Competencies</h3>
                    <ul>
                        <li>Memory Forensics & Analysis</li>
                        <li>Disk Image Analysis</li>
                        <li>Network Forensics</li>
                        <li>Incident Response & Handling</li>
                    </ul>
                </div>
                
                <div class="tools-section">
                    <h3>🛠️ Primary Tools & Technologies</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">Autopsy</span>
                        <span class="tool-tag">Volatility</span>
                        <span class="tool-tag">FTK Imager</span>
                        <span class="tool-tag">Sleuth Kit</span>
                    </div>
                </div>
                
                <div class="specialties">
                    <h3>🎯 Specialties</h3>
                    <span class="specialty-tag">Memory Forensics</span>
                    <span class="specialty-tag">Disk Forensics</span>
                </div>
            `
        },
        'hardware-pentesting': {
            title: 'Hardware Pentesting 🕹️',
            content: `
                <div class="skill-section">
                    <h3>Core Competencies</h3>
                    <ul>
                        <li>Hardware Security Assessment</li>
                        <li>IoT Device Testing</li>
                        <li>Embedded Systems Analysis</li>
                        <li>Firmware Security Analysis</li>
                    </ul>
                </div>
                
                <div class="tools-section">
                    <h3>🛠️ Protocols & Interfaces</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">SPI</span>
                        <span class="tool-tag">UART</span>
                        <span class="tool-tag">IIC</span>
                        <span class="tool-tag">JTAG</span>
                        <span class="tool-tag">RS232</span>
                        <span class="tool-tag">RS485</span>
                    </div>
                </div>
                
                <div class="tools-section">
                    <h3>📡 Tools & Equipment</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">SDR</span>
                        <span class="tool-tag">Logic Analyzers</span>
                        <span class="tool-tag">Oscilloscopes</span>
                        <span class="tool-tag">Multimeters</span>
                    </div>
                </div>
            `
        },
        'network-security': {
            title: 'Network Security 🧱',
            content: `
                <div class="skill-section">
                    <h3>Core Competencies</h3>
                    <ul>
                        <li>Network Architecture Security</li>
                        <li>Protocol Analysis & Implementation</li>
                        <li>Firewall Configuration & Testing</li>
                        <li>IDS/IPS Implementation</li>
                    </ul>
                </div>
                
                <div class="tools-section">
                    <h3>🛠️ Protocols & Technologies</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">TCP/IP</span>
                        <span class="tool-tag">DNS</span>
                        <span class="tool-tag">DHCP</span>
                        <span class="tool-tag">VPNs</span>
                        <span class="tool-tag">SSL/TLS</span>
                        <span class="tool-tag">Wi-Fi Security</span>
                    </div>
                </div>
                
                <div class="tools-section">
                    <h3>📊 Analysis Tools</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">Wireshark</span>
                        <span class="tool-tag">Nmap</span>
                        <span class="tool-tag">tcpdump</span>
                        <span class="tool-tag">Snort</span>
                    </div>
                </div>
                
                <div class="specialties">
                    <h3>🎯 Specialties</h3>
                    <span class="specialty-tag">Packet Sniffing</span>
                    <span class="specialty-tag">Protocol Analysis</span>
                </div>
            `
        },
        'programming': {
            title: 'Programming 💻',
            content: `
                <div class="skill-section">
                    <h3>Core Competencies</h3>
                    <ul>
                        <li>Security Tool Development</li>
                        <li>Automation Scripting</li>
                        <li>Low-level Programming</li>
                        <li>Web Application Development</li>
                    </ul>
                </div>
                
                <div class="tools-section">
                    <h3>🛠️ Shell Scripting</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">Bash</span>
                        <span class="tool-tag">PowerShell</span>
                    </div>
                </div>
                
                <div class="tools-section">
                    <h3>🛠️ Programming Languages</h3>
                    <div class="tools-grid">
                        <span class="tool-tag">C</span>
                        <span class="tool-tag">Python</span>
                        <span class="tool-tag">Assembly x64</span>
                        <span class="tool-tag">Assembly ARM</span>
                        <span class="tool-tag">Java</span>
                        <span class="tool-tag">JavaScript</span>
                        <span class="tool-tag">C++</span>
                        <span class="tool-tag">MySQL</span>
                        <span class="tool-tag">COBOL</span>
                    </div>
                </div>
            `
        }
    };

    // Function to open modal with skill details
    // Function to open modal with skill details
    function openModal(skillId) {
        const skill = skillDetails[skillId];
        if (skill) {
            modalTitle.innerHTML = skill.title;
            modalBody.innerHTML = skill.content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        
            // Scroll to top when modal opens
            modalBody.scrollTop = 0;
    }
}

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Add event listeners to boxes
    boxes.forEach(box => {
        // Make boxes focusable
        box.setAttribute('tabindex', '0');
        box.setAttribute('role', 'button');
        
        // Click event
        box.addEventListener('click', function() {
            const link = this.getAttribute('data-link').replace('#', '');
            openModal(link);
        });

        // Keyboard navigation
        box.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.getAttribute('data-link').replace('#', '');
                openModal(link);
            }
        });

        // Focus styles
        box.addEventListener('focus', function() {
            this.style.outline = `2px solid ${getComputedStyle(document.documentElement).getPropertyValue('--primary-color')}`;
            this.style.outlineOffset = '1px';
        });

        box.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Touch device optimizations
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    console.log('🔒 Cybersecurity Skills Portfolio loaded successfully!');
    console.log('💡 Click on any skill to view detailed information');
});