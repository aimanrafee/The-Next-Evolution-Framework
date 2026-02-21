/**
 * 📟 SOVEREIGN LOGIC ENGINE (v.2050.1)
 * File: script.js
 * Function: Terminal Command Processor & System Integrity Validation
 * Principles: Minimalist, Client-Side, Stand-alone
 */

document.addEventListener('DOMContentLoaded', () => {
    const terminalInput = document.querySelector('.terminal-input');
    const terminalWrapper = document.querySelector('.terminal-wrapper');
    const cards = document.querySelectorAll('.directory-card');

    // Senarai Arahan (Command Registry)
    const COMMANDS = {
        'help': 'Available commands: help, status, verify, list, clear, founder --bio',
        'status': 'SYSTEM: STAND-ALONE | CORE: INTELLIGENCE (I) | UPTIME: INDEFINITE',
        'verify': 'Integrity Check: 100% Secure. ES-RFS Protocol active.',
        'list': 'Directories: 01_Axioms, 02_Economics, 03_Social, 04_Mechanical, 05_Synthesis',
        'founder --bio': 'Architect of the Next Evolution. Visionary for Global 2050.',
        'clear': 'CLEAR_SCREEN'
    };

    // Fungsi untuk memproses arahan
    function processCommand(input) {
        const cmd = input.toLowerCase().trim();
        let response = "";

        if (COMMANDS[cmd]) {
            response = COMMANDS[cmd];
        } else if (cmd === "") {
            return;
        } else {
            response = `Command not found: ${cmd}. Type 'help' for options.`;
        }

        displayResponse(cmd, response);
    }

    // Fungsi untuk memaparkan output pada terminal
    function displayResponse(cmd, response) {
        if (response === 'CLEAR_SCREEN') {
            const lines = document.querySelectorAll('.terminal-line');
            lines.forEach(line => line.remove());
            terminalInput.value = "";
            return;
        }

        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.style.fontSize = '0.85rem';
        line.style.margin = '5px 0';
        line.style.color = '#008f11';
        line.innerHTML = `<span style="color: #00ff41;">> ${cmd}</span><br>${response}`;
        
        terminalWrapper.insertBefore(line, terminalInput.parentElement);
        terminalInput.value = "";
        
        // Auto-scroll ke bawah
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Event Listener untuk input terminal
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            processCommand(terminalInput.value);
        }
    });

    // Interaktiviti Kad: Klik untuk "Simulasi" pembukaan fail
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const dirName = card.querySelector('h3').innerText;
            terminalInput.focus();
            terminalInput.value = `access --dir "${dirName}"`;
            
            // Simulasi kesan visual
            card.style.borderColor = '#00ff41';
            setTimeout(() => {
                card.style.borderColor = '';
                processCommand(`Accessing ${dirName}... Authorized.`);
            }, 500);
        });
    });

    // Kesan visual permulaan (Boot Sequence)
    console.log("INITIALIZING SOVEREIGN_OS_2050...");
    console.log("INTEGRITY CHECK... OK");
    console.log("STAND-ALONE MODE ACTIVE.");
});
