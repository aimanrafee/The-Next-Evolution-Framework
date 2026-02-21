/**
 * 📟 SOVEREIGN LOGIC ENGINE (v.2050.1)
 * File: script.js
 * Function: Terminal Processor & Auto-Automation Click-to-PDF
 * Architected by: Global 2050 Founder
 */

document.addEventListener('DOMContentLoaded', () => {
    const terminalInput = document.querySelector('.terminal-input');
    const terminalWrapper = document.querySelector('.terminal-wrapper');
    const cards = document.querySelectorAll('.directory-card');
    const fileItems = document.querySelectorAll('.file-list li');

    // Senarai Arahan (Command Registry) - GOLD MASTER VERSION
    const COMMANDS = {
        'help': 'Available commands: help, status, verify, list, view --pdf, clear, founder --bio',
        'status': 'SYSTEM: STAND-ALONE | CORE: INTELLIGENCE (I) | UPTIME: INDEFINITE',
        'view --pdf': 'OPENING_PDF_PROTOCOL',
        'verify': 'Integrity Check: 100% Secure. ES-RFS Protocol active.',
        'list': 'Directories: 01_Axioms, 02_Economics, 03_Social, 04_Mechanical, 05_Synthesis',
        'founder --bio': 'Architect of the Next Evolution. Visionary for Global 2050.',
        'clear': 'CLEAR_SCREEN'
    };

    /**
     * Fungsi Utama Memproses Arahan
     */
    function processCommand(input) {
        const cmd = input.toLowerCase().trim();
        let response = "";

        if (COMMANDS[cmd]) {
            response = COMMANDS[cmd];
            if (response === 'OPENING_PDF_PROTOCOL') {
                launchPDF(cmd);
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
     * Protokol Pelancaran PDF (Automation Logic)
     */
    function launchPDF(commandSource) {
        displayResponse(commandSource, "Initiating Sovereign Document Protocol... Opening MASTER_DOCUMENT.pdf");
        setTimeout(() => {
            // Membuka fail PDF di tab baru
            window.open('MASTER_DOCUMENT.pdf', '_blank');
        }, 800);
    }

    /**
     * UI Renderer: Memaparkan output pada terminal
     */
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
        line.style.color = '#008f11'; // Hijau Malap
        
        // Gabungan visual arahan dan maklum balas
        line.innerHTML = `<span style="color: #00ff41;">> ${cmd}</span><br>${response}`;
        
        terminalWrapper.insertBefore(line, terminalInput.parentElement);
        terminalInput.value = "";
        
        // Auto-scroll untuk keselesaan pengguna
        window.scrollTo(0, document.body.scrollHeight);
    }

    // --- EVENT LISTENERS ---

    // 1. Input Terminal (Keyboard)
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            processCommand(terminalInput.value);
        }
    });

    // 2. Interaktiviti Kad (Simulasi Direktori)
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const h3Element = card.querySelector('h3');
            if (!h3Element) return;

            const dirName = h3Element.innerText;
            terminalInput.focus();
            terminalInput.value = `access --dir "${dirName}"`;
            
            card.style.borderColor = '#00ff41';
            setTimeout(() => {
                card.style.borderColor = '';
                displayResponse("system", `Accessing ${dirName}... Authorized.`);
            }, 500);
        });
    });

    // 3. Automasi Klik Fail .MD (Direct PDF Access)
    fileItems.forEach(item => {
        item.style.cursor = "pointer"; 
        item.addEventListener('click', (e) => {
            e.stopPropagation(); // Menghalang 'click' daripada mencetuskan event pada kad
            const fileName = item.innerText;
            
            // Log ke terminal dan terus buka PDF
            displayResponse("access", `Encrypted file identified: ${fileName}. Opening Master PDF...`);
            launchPDF("auto-load");
        });
    });

    // --- BOOT SEQUENCE DIAGNOSTICS ---
    console.log("-----------------------------------------");
    console.log("INITIALIZING SOVEREIGN_OS_2050...");
    console.log("INTEGRITY CHECK... OK");
    console.log("AUTO-PDF_PROTOCOL... ACTIVE");
    console.log("STAND-ALONE MODE READY.");
    console.log("-----------------------------------------");
});
