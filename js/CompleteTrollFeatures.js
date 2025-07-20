/**
 * Remaining Troll Features - Modularized versions of existing features
 */

/**
 * File Explorer Troll Feature
 */
class FileExplorerTroll extends BaseTrollFeature {
    setup() {
        this.initFileExplorer();
    }
    
    initFileExplorer() {
        const fileItems = document.querySelectorAll('.file-item');
        if (!fileItems.length) return;
        
        fileItems.forEach(item => {
            item.addEventListener('click', () => {
                this.handleFileClick(item);
            });
            
            item.addEventListener('mouseenter', () => {
                if (Math.random() < 0.3) {
                    this.corruptFile(item);
                }
            });
        });
    }
    
    handleFileClick(item) {
        this.playSound('click');
        
        const fileName = item.textContent.trim();
        const responses = {
            'virus.exe': 'Virus executed successfully! Just kidding! 😄',
            'secrets.txt': 'Your secrets: You fell for a troll website! 🤫',
            'hack_tools.bat': 'Hacking tools activated! Target: Your dignity 🎯',
            'important.pdf': 'Error 404: Importance not found 📄'
        };
        
        const message = responses[fileName] || 'File corrupted by trolling! 💾';
        this.engine.showNotification(message, 'update');
        
        if (this.advancedMode) {
            this.triggerAdvancedFileCorruption();
        }
    }
    
    corruptFile(item) {
        const original = item.textContent;
        item.textContent = original + ' (CORRUPTED)';
        
        setTimeout(() => {
            item.textContent = original;
        }, 2000);
    }
    
    triggerAdvancedFileCorruption() {
        // In advanced mode, add more chaos
        const fileExplorer = document.querySelector('.file-explorer');
        if (!fileExplorer) return;
        
        // Add fake files
        const fakeFiles = [
            'your_browser_history.txt',
            'embarrassing_photos.zip',
            'deleted_messages.bak',
            'credit_card_info.xlsx'
        ];
        
        fakeFiles.forEach((fileName, index) => {
            setTimeout(() => {
                const fakeFile = document.createElement('div');
                fakeFile.className = 'file-item';
                fakeFile.textContent = fileName;
                fakeFile.style.color = '#e74c3c';
                
                fakeFile.addEventListener('click', () => {
                    this.engine.showNotification('Nice try! This file is fake! 🤡', 'virus');
                    this.playSound('laugh');
                });
                
                fileExplorer.appendChild(fakeFile);
                
                // Remove after 10 seconds
                setTimeout(() => {
                    if (fakeFile.parentElement) {
                        fakeFile.remove();
                    }
                }, 10000);
                
            }, index * 2000);
        });
    }
}

/**
 * Terminal Troll Feature
 */
class TerminalTroll extends BaseTrollFeature {
    constructor(engine) {
        super(engine);
        this.commandHistory = [];
        this.easterEggCommands = new Map();
    }
    
    setup() {
        this.initTerminal();
        this.setupEasterEggs();
    }
    
    initTerminal() {
        const terminalInput = document.getElementById('terminal-input');
        if (!terminalInput) return;
        
        terminalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleCommand(terminalInput.value);
                terminalInput.value = '';
            }
        });
    }
    
    setupEasterEggs() {
        this.easterEggCommands.set('konami', () => {
            this.addTerminalOutput('🎮 Konami code detected in terminal! Try the real sequence!');
            this.playSound('powerup');
        });
        
        this.easterEggCommands.set('troll', () => {
            this.addTerminalOutput('You called?');
            this.playSound('laugh');
        });
        
        this.easterEggCommands.set('coffee', () => {
            this.addTerminalOutput('HTTP 418: I\'m a teapot ☕');
            this.playSound('pop');
        });
        
        this.easterEggCommands.set('matrix', () => {
            this.addTerminalOutput('There is no spoon... 🥄');
            if (typeof window.triggerMatrixEffect === 'function') {
                window.triggerMatrixEffect();
            } else {
                console.log('Matrix effect triggered');
                document.body.style.background = 'linear-gradient(0deg, #000 0%, #003300 100%)';
            }
        });
    }
    
    handleCommand(command) {
        this.commandHistory.push(command);
        this.playSound('typing');
        
        // Check for easter eggs first
        if (this.easterEggCommands.has(command.toLowerCase())) {
            this.easterEggCommands.get(command.toLowerCase())();
            return;
        }
        
        // Handle regular commands with trolling
        this.processCommand(command);
        
        if (this.advancedMode) {
            this.addAdvancedTrolling(command);
        }
    }
    
    processCommand(command) {
        const cmd = command.toLowerCase().trim();
        
        // Add command to history display
        this.addTerminalOutput(`$ ${command}`, true);
        
        // Enhanced command responses
        const responses = {
            'help': 'Available commands: troll, hack, matrix, coffee, konami, sudo, rm, ls, cat, whoami',
            'sudo': 'You are not in the sudoers file. This incident will be reported to the Troll Council.',
            'rm -rf /': 'Deleting universe... ERROR: Universe is read-only',
            'ls': 'troll.exe  your_dignity.404  reality.corrupted  hope.deleted',
            'cat /etc/passwd': 'root:x:0:0:Troll Master:/root:/bin/troll',
            'whoami': 'You are: victim #' + Math.floor(Math.random() * 99999),
            'ping google.com': 'PING failed: Google has blocked you for suspicious trolling activity',
            'top': 'PID  COMMAND    %CPU\n1337 troll.exe   666%\n420  chaos.sh   100%',
            'history': this.commandHistory.join('\n')
        };
        
        let output = responses[cmd];
        
        if (!output) {
            const errorMessages = [
                `bash: ${command}: command not found. Try crying instead.`,
                `Error: ${command} is not recognized as a valid way to escape this website.`,
                `Command failed: Your skills are insufficient for '${command}'`,
                `${command}: Permission denied by the Troll Authority`
            ];
            output = errorMessages[Math.floor(Math.random() * errorMessages.length)];
            this.playSound('fail');
        } else {
            this.playSound('success');
        }
        
        this.addTerminalOutput(output);
    }
    
    addTerminalOutput(text, isCommand = false) {
        const terminalOutput = document.getElementById('terminal-output');
        if (!terminalOutput) return;
        
        const line = document.createElement('div');
        line.className = 'terminal-line';
        
        if (isCommand) {
            line.innerHTML = `<span class="terminal-prompt">user@trollsite:~$ </span>${text.substring(2)}`;
        } else {
            line.textContent = text;
        }
        
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    
    addAdvancedTrolling(command) {
        // In advanced mode, terminal becomes more chaotic
        setTimeout(() => {
            if (Math.random() < 0.3) {
                const chaosMessages = [
                    'SYSTEM INTRUSION DETECTED: Command intercepted by AI',
                    'WARNING: Terminal may be compromised by advanced trollware',
                    'NOTICE: Your keystrokes are being monitored for comedic purposes',
                    'ERROR: Reality buffer overflow detected'
                ];
                
                const message = chaosMessages[Math.floor(Math.random() * chaosMessages.length)];
                this.addTerminalOutput(message);
                this.playSound('alert');
            }
        }, 1000 + Math.random() * 3000);
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        
        // Add more easter egg commands in advanced mode
        this.easterEggCommands.set('godmode', () => {
            this.addTerminalOutput('God mode enabled! You are now... still powerless. 😈');
            this.playSound('powerup');
        });
        
        this.easterEggCommands.set('exit', () => {
            this.addTerminalOutput('Exiting... ERROR: Exit not found. You are trapped forever! 👹');
            this.playSound('glitch');
        });
        
        // Random command injection
        setInterval(() => {
            if (Math.random() < 0.1) {
                const injectedCommands = [
                    'Ghost command executed: boo!',
                    'AI is now typing: Hello there!',
                    'System: Someone else is using this terminal...',
                    'Automated troll script running...'
                ];
                
                const injected = injectedCommands[Math.floor(Math.random() * injectedCommands.length)];
                this.addTerminalOutput(injected);
                this.playSound('typing');
            }
        }, 45000);
    }
}

/**
 * Gaslighting Troll Feature
 */
class GaslightingTroll extends BaseTrollFeature {
    constructor(engine) {
        super(engine);
        this.gaslightingLevel = 0;
        this.userResponses = [];
    }
    
    setup() {
        this.initGaslightingForm();
    }
    
    initGaslightingForm() {
        const yesBtn = document.getElementById('yes-btn');
        const noBtn = document.getElementById('no-btn');
        const inputs = document.querySelectorAll('.gaslight-input');
        
        if (yesBtn && noBtn) {
            this.setupButtonSwapping(yesBtn, noBtn);
        }
        
        inputs.forEach(input => {
            this.setupInputGlitching(input);
        });
    }
    
    setupButtonSwapping(yesBtn, noBtn) {
        let swapCount = 0;
        
        const swapButtons = () => {
            swapCount++;
            this.gaslightingLevel++;
            
            // Swap button positions
            const yesText = yesBtn.textContent;
            const yesColor = yesBtn.style.backgroundColor;
            
            yesBtn.textContent = noBtn.textContent;
            yesBtn.style.backgroundColor = noBtn.style.backgroundColor || '#e74c3c';
            
            noBtn.textContent = yesText;
            noBtn.style.backgroundColor = yesColor || '#27ae60';
            
            this.playSound('glitch');
            
            const messages = [
                'Did those buttons just... switch? 🤔',
                'Your eyes are playing tricks on you! 👀',
                'The buttons are definitely in the right place! 😇',
                'Nothing suspicious happening here! 😈',
                'You\'re imagining things! 🧠'
            ];
            
            const message = messages[Math.min(swapCount - 1, messages.length - 1)];
            this.engine.showNotification(message, 'update');
            
            if (this.advancedMode && swapCount > 3) {
                this.activateAdvancedGaslighting(yesBtn, noBtn);
            }
        };
        
        yesBtn.addEventListener('click', swapButtons);
        noBtn.addEventListener('click', swapButtons);
    }
    
    setupInputGlitching(input) {
        let glitchCount = 0;
        
        input.addEventListener('input', () => {
            if (Math.random() < 0.2 && this.gaslightingLevel > 2) {
                glitchCount++;
                
                // Add random characters
                setTimeout(() => {
                    const randomChars = ['!', '@', '#', '$', '%', '?'];
                    const randomChar = randomChars[Math.floor(Math.random() * randomChars.length)];
                    input.value += randomChar;
                    
                    input.classList.add('glitch');
                    this.playSound('zap');
                    
                    setTimeout(() => {
                        input.classList.remove('glitch');
                    }, 500);
                }, 100);
            }
        });
        
        input.addEventListener('blur', () => {
            if (this.advancedMode && Math.random() < 0.3) {
                // Change the input value after user leaves
                setTimeout(() => {
                    input.value = 'You didn\'t type this... or did you? 🤔';
                    this.playSound('glitch');
                }, 1000);
            }
        });
    }
    
    activateAdvancedGaslighting(yesBtn, noBtn) {
        // Create duplicate buttons that appear and disappear
        const container = yesBtn.parentElement;
        if (!container) return;
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const fakeBtn = yesBtn.cloneNode(true);
                fakeBtn.textContent = Math.random() < 0.5 ? 'Maybe' : 'Perhaps';
                fakeBtn.style.opacity = '0.7';
                fakeBtn.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
                
                fakeBtn.addEventListener('click', () => {
                    this.engine.showNotification('That button was fake! 🤡', 'virus');
                    this.playSound('fail');
                    fakeBtn.remove();
                });
                
                container.appendChild(fakeBtn);
                
                // Remove after 5 seconds
                setTimeout(() => {
                    if (fakeBtn.parentElement) {
                        fakeBtn.remove();
                    }
                }, 5000);
                
            }, i * 2000);
        }
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        
        // In advanced mode, gaslight even more aggressively
        setInterval(() => {
            if (Math.random() < 0.2) {
                const gaslightMessages = [
                    'Are you sure you clicked that button? 🤨',
                    'That form field was always empty... wasn\'t it? 🧐',
                    'The website looks different? No, you\'re imagining it! 😏',
                    'You\'ve been here for 5 minutes... or was it an hour? ⏰'
                ];
                
                const message = gaslightMessages[Math.floor(Math.random() * gaslightMessages.length)];
                this.engine.showNotification(message, 'update');
            }
        }, 30000);
    }
}

/**
 * Surveillance Troll Feature  
 */
class SurveillanceTroll extends BaseTrollFeature {
    constructor(engine) {
        super(engine);
        this.watchingTime = 0;
        this.userBehavior = {
            mouseMovements: 0,
            clicks: 0,
            keysPressed: 0,
            timeSpent: 0
        };
    }
    
    setup() {
        this.initSurveillance();
        this.startWatching();
    }
    
    initSurveillance() {
        // Track user behavior for "surveillance"
        document.addEventListener('mousemove', () => {
            this.userBehavior.mouseMovements++;
        });
        
        document.addEventListener('click', () => {
            this.userBehavior.clicks++;
        });
        
        document.addEventListener('keypress', () => {
            this.userBehavior.keysPressed++;
        });
        
        // Time tracking
        setInterval(() => {
            this.userBehavior.timeSpent++;
            this.watchingTime++;
        }, 1000);
    }
    
    startWatching() {
        // Randomly trigger surveillance alerts
        setTimeout(() => {
            if (Math.random() < 0.4) {
                this.trigger();
            }
        }, 20000 + Math.random() * 30000);
    }
    
    execute() {
        this.showSurveillanceModal();
    }
    
    showSurveillanceModal() {
        const modal = document.createElement('div');
        modal.className = 'surveillance-modal';
        modal.innerHTML = `
            <div class="surveillance-content">
                <h2>🔍 SURVEILLANCE DETECTED 🔍</h2>
                <p>We have been watching you for ${this.watchingTime} seconds...</p>
                
                <div class="fake-webcam">
                    <div class="webcam-feed">📹 LIVE FEED</div>
                    <div class="glitch-overlay"></div>
                </div>
                
                <div class="surveillance-data">
                    <h3>📊 Your Behavior Profile:</h3>
                    <p>🖱️ Mouse movements: ${this.userBehavior.mouseMovements}</p>
                    <p>👆 Clicks recorded: ${this.userBehavior.clicks}</p>
                    <p>⌨️ Keys pressed: ${this.userBehavior.keysPressed}</p>
                    <p>⏱️ Time monitored: ${this.userBehavior.timeSpent}s</p>
                    <p>🤖 Troll Level: ${this.engine.getTrollLevel()}</p>
                </div>
                
                <div class="surveillance-warning">
                    <p>⚠️ This data will be used against you in the court of trolling!</p>
                </div>
                
                <button onclick="this.parentElement.parentElement.remove()">
                    Stop Watching Me! 🙈
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.playSound('alert');
        
        // Auto-remove after 15 seconds
        setTimeout(() => {
            if (modal.parentElement) {
                modal.remove();
                this.engine.showNotification('Surveillance never stops! 👁️', 'virus');
            }
        }, 15000);
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        
        // In advanced mode, add fake permissions requests
        setTimeout(() => {
            this.requestFakePermissions();
        }, 5000);
    }
    
    requestFakePermissions() {
        const permissions = [
            'Access your webcam for "security purposes"',
            'Read your browser history for "optimization"', 
            'Access your microphone to "improve experience"',
            'Track your location for "personalized trolling"'
        ];
        
        permissions.forEach((permission, index) => {
            setTimeout(() => {
                this.showFakePermissionRequest(permission);
            }, index * 10000);
        });
    }
    
    showFakePermissionRequest(permission) {
        const notification = document.createElement('div');
        notification.className = 'fake-permission-request';
        notification.innerHTML = `
            <div class="permission-content">
                <h4>🔐 Permission Request</h4>
                <p>${permission}</p>
                <div class="permission-buttons">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Allow</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Deny</button>
                </div>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border: 2px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            z-index: 10007;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        `;
        
        document.body.appendChild(notification);
        this.playSound('pop');
        
        // Both buttons do the same thing (nothing)
        const buttons = notification.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.engine.showNotification('Permission ignored! We do what we want! 😈', 'virus');
                this.playSound('laugh');
            });
        });
        
        // Auto-remove
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 8000);
    }
}

/**
 * Troll Games Feature - Enhanced version
 */
class TrollGamesTroll extends BaseTrollFeature {
    constructor(engine) {
        super(engine);
        this.gameStats = {
            gamesPlayed: 0,
            totalFailures: 0,
            ragequits: 0
        };
    }
    
    setup() {
        this.initGameLaunchers();
        this.trackGameStats();
    }
    
    initGameLaunchers() {
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            card.addEventListener('click', () => {
                this.gameStats.gamesPlayed++;
                this.playSound('powerup');
                
                if (this.advancedMode) {
                    this.addAdvancedGameTrolling();
                }
            });
        });
    }
    
    trackGameStats() {
        // Monitor for rage quit behavior
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' || (e.ctrlKey && e.key === 'w')) {
                this.gameStats.ragequits++;
                this.engine.logTrollEvent('potential_ragequit', {
                    gamesPlayed: this.gameStats.gamesPlayed,
                    ragequits: this.gameStats.ragequits
                });
            }
        });
    }
    
    addAdvancedGameTrolling() {
        // In advanced mode, games become even more unfair
        setTimeout(() => {
            const trollMessages = [
                'The games are watching your performance... you\'re terrible! 🎮',
                'Pro tip: The games are designed to make you lose! 🏆',
                'Your failure rate: 99.9%. The 0.1% was a glitch. 📊',
                'Achievement Unlocked: Professional Loser! 🏅'
            ];
            
            const message = trollMessages[Math.floor(Math.random() * trollMessages.length)];
            this.engine.showNotification(message, 'winner');
            this.playSound('laugh');
        }, 5000);
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        
        // Add fake achievements system
        this.createFakeAchievements();
        
        // Make games even more trolly
        setTimeout(() => {
            this.engine.showNotification('HARD MODE ACTIVATED: Games are now impossible! 💀', 'virus');
        }, 2000);
    }
    
    createFakeAchievements() {
        const achievements = [
            '🏆 First Loss - Lost your first game!',
            '💀 Die Hard - Failed 10 times in a row!', 
            '🤡 Clown Achievement - Fell for obvious tricks!',
            '😭 Cry Baby - Showed frustration!',
            '🔄 Persistent Fool - Kept trying despite obvious trolling!'
        ];
        
        achievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.engine.showNotification(achievement, 'winner');
                this.playSound('coin');
            }, (index + 1) * 15000);
        });
    }
}

// Export all the features
if (typeof window !== 'undefined') {
    window.FileExplorerTroll = FileExplorerTroll;
    window.TerminalTroll = TerminalTroll;
    window.GaslightingTroll = GaslightingTroll;
    window.SurveillanceTroll = SurveillanceTroll;
    window.TrollGamesTroll = TrollGamesTroll;
}
