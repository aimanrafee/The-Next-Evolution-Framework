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

    // Senarai Arahan (Command Registry) - GOLD MASTER VERSION
    const COMMANDS = {
        'help': 'Available commands: help, status, verify, list, view --pdf, clear, founder --bio',
        'status': 'SYSTEM: STAND-ALONE | CORE: INTELLIGENCE (I) | UPTIME: INDEFINITE',
        'view --pdf': 'OPENING_PDF_PROTOCOL', // Trigger internal untuk akses dokumen
        'verify': 'Integrity Check: 100% Secure. ES-RFS Protocol active.',
        'list': 'Directories: 01_Axioms, 02_Economics, 03_Social, 04_Mechanical, 05_Synthesis',
        'founder --bio': 'Architect of the Next Evolution. Visionary for Global 2050.',
        'clear': 'CLEAR_SCREEN'
    };

    /**
     * Fungsi untuk memproses arahan (Command Processor)
     */
    function processCommand(input) {
        const cmd = input.toLowerCase().trim();
        let response = "";

        if (COMMANDS[cmd]) {
            response = COMMANDS[cmd];
            
            // Logik Khas: Protokol Pembukaan PDF
            if (response === 'OPENING_PDF_PROTOCOL') {
                displayResponse(cmd, "Initiating Sovereign Document Protocol... Opening MASTER_DOCUMENT.pdf in new tab.");
                setTimeout(() => {
                    // Membuka fail PDF di tab baru. Pastikan MASTER_DOCUMENT.pdf ada di folder yang sama.
                    window.open('MASTER_DOCUMENT.pdf', '_blank');
                }, 1000);
                return;
            }
        } else if (cmd === "") {
            return;
        } else {
            response = `Command not found: ${cmd}. Type 'help' for options.`;
        }

        displayResponse(cmd, response);
    }

    /**
     * Fungsi untuk memaparkan output pada terminal (UI Renderer)
     */
    function displayResponse(cmd, response) {
        // Logik Khas: Membersihkan Skrin
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
        line.style.color = '#008f11'; // Warna sekunder (hijau malap)
        
        // Memasukkan format arahan dan maklum balas sistem
        line.innerHTML = `<span style="color: #00ff41;">> ${cmd}</span><br>${response}`;
        
        // Memasukkan baris baru sebelum bar input
        terminalWrapper.insertBefore(line, terminalInput.parentElement);
        terminalInput.value = "";
        
        // Auto-scroll ke bawah secara automatik untuk keselesaan pengguna
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Event Listener: Mengesan punat 'Enter' pada terminal
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            processCommand(terminalInput.value);
        }
    });

    /**
     * Interaktiviti Kad: Klik untuk "Simulasi" pembukaan direktori
     */
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const h3Element = card.querySelector('h3');
            if (!h3Element) return;

            const dirName = h3Element.innerText;
            terminalInput.focus();
            terminalInput.value = `access --dir "${dirName}"`;
            
            // Simulasi kesan visual pada kad (Visual Feedback)
            card.style.borderColor = '#00ff41';
            setTimeout(() => {
                card.style.borderColor = '';
                processCommand(`Accessing ${dirName}... Authorized.`);
            }, 500);
        });
    });

    // Urutan But Sistem (Boot Sequence) - Diagnostics Only
    console.log("-----------------------------------------");
    console.log("INITIALIZING SOVEREIGN_OS_2050...");
    console.log("INTEGRITY CHECK... OK");
    console.log("PDF_VIEW_PROTOCOL... LOADED");
    console.log("STAND-ALONE MODE ACTIVE.");
    console.log("-----------------------------------------");
});
