/**
 * BaseTrollFeature - Abstract base class for all troll features
 * Provides common functionality and standardized interface
 */
class BaseTrollFeature {
    constructor(engine) {
        this.engine = engine;
        this.name = this.constructor.name;
        this.enabled = true;
        this.advancedMode = false;
        this.triggerCount = 0;
    }
    
    initialize() {
        console.log(`🎭 Initializing ${this.name}`);
        this.setup();
    }
    
    setup() {
        // Override in child classes
    }
    
    trigger() {
        if (!this.enabled) return;
        
        this.triggerCount++;
        this.engine.logTrollEvent(`${this.name}_triggered`, {
            triggerCount: this.triggerCount,
            advancedMode: this.advancedMode
        });
        
        this.execute();
    }
    
    execute() {
        // Override in child classes
    }
    
    enableAdvancedMode() {
        this.advancedMode = true;
        console.log(`🔥 ${this.name} advanced mode enabled`);
    }
    
    disable() {
        this.enabled = false;
    }
    
    enable() {
        this.enabled = true;
    }
    
    playSound(soundType) {
        this.engine.getFeature('soundSystem')?.playSound(soundType);
    }
}

/**
 * Moving Button Troll Feature
 */
class MovingButtonTroll extends BaseTrollFeature {
    setup() {
        this.setupMovingButton();
    }
    
    setupMovingButton() {
        const trollButton = document.getElementById('troll-button');
        if (!trollButton) return;
        
        let moveCount = 0;
        const maxMoves = this.advancedMode ? 10 : 5;
        
        trollButton.addEventListener('mouseenter', () => {
            if (moveCount >= maxMoves) {
                this.showVictoryMessage(trollButton);
                return;
            }
            
            moveCount++;
            this.moveButton(trollButton, moveCount);
        });
    }
    
    moveButton(button, count) {
        this.playSound('whoosh');
        
        const messages = [
            "Nope! Try again! 😏",
            "Almost got it! 🏃‍♂️",
            "Getting closer... maybe? 🤔",
            "The button is having trust issues! 😅",
            "It's not you, it's... actually, it's you! 😈"
        ];
        
        const messageElement = document.getElementById('button-message');
        if (messageElement) {
            messageElement.textContent = messages[Math.min(count - 1, messages.length - 1)];
        }
        
        if (this.advancedMode && count > 3) {
            // In advanced mode, button gets more evasive
            button.style.transform += ` rotate(${Math.random() * 360}deg)`;
            button.style.opacity = Math.max(0.3, 1 - (count * 0.1));
        }
    }
    
    showVictoryMessage(button) {
        button.textContent = "You win! 🎉";
        button.style.animation = 'none';
        button.style.transform = 'scale(1)';
        this.playSound('success');
        
        setTimeout(() => {
            button.textContent = "Just kidding! 😈";
            this.playSound('laugh');
            button.style.animation = 'pulse 2s infinite';
        }, 2000);
    }
}

/**
 * Fake Alert Troll Feature  
 */
class FakeAlertTroll extends BaseTrollFeature {
    setup() {
        // Auto-trigger based on user behavior
        setTimeout(() => {
            if (Math.random() < 0.3) {
                this.trigger();
            }
        }, 10000 + Math.random() * 20000);
    }
    
    execute() {
        this.showFakeAlert();
    }
    
    showFakeAlert() {
        const alerts = [
            {
                title: "🚨 VIRUS DETECTED! 🚨",
                message: "Your computer has been infected with 42,069 viruses! Click OK to panic appropriately!",
                type: "virus"
            },
            {
                title: "⚠️ SYSTEM WARNING ⚠️",
                message: "Your warranty has expired! Actually, it expired 3 years ago. We're just telling you now.",
                type: "warning"
            },
            {
                title: "💡 UPDATE REQUIRED 💡",
                message: "Please update your brain to the latest version. Current version: Potato",
                type: "update"
            }
        ];
        
        const alert = alerts[Math.floor(Math.random() * alerts.length)];
        this.createAlert(alert);
    }
    
    createAlert(alertData) {
        const overlay = document.createElement('div');
        overlay.className = 'fake-alert';
        overlay.innerHTML = `
            <div class="alert-content">
                <h2>${alertData.title}</h2>
                <p>${alertData.message}</p>
                <button onclick="this.parentElement.parentElement.remove()">
                    ${this.getRandomButtonText()}
                </button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        this.playSound('alert');
        
        // Auto-remove after random time if not clicked
        setTimeout(() => {
            if (overlay.parentElement) {
                overlay.remove();
            }
        }, 15000 + Math.random() * 10000);
    }
    
    getRandomButtonText() {
        const texts = ["OK", "Got it!", "Make it stop!", "Why me?", "I'm scared", "Close"];
        return texts[Math.floor(Math.random() * texts.length)];
    }
}

/**
 * Blue Screen Troll Feature
 */
class BlueScreenTroll extends BaseTrollFeature {
    execute() {
        this.showBlueScreen();
    }
    
    showBlueScreen() {
        const blueScreen = document.createElement('div');
        blueScreen.className = 'blue-screen';
        blueScreen.innerHTML = `
            <div class="blue-screen-content">
                <h1>💙 BLUE SCREEN OF DEATH 💙</h1>
                <p>Your computer ran into a problem and needs to restart.</p>
                <p>Error Code: 0x000000TROLL</p>
                <p>If you see this screen again, contact your therapist.</p>
                <div class="progress-bar">
                    <div class="progress" id="fake-progress"></div>
                </div>
                <p id="progress-text">Collecting error info: 0%</p>
                <button onclick="this.parentElement.parentElement.remove()">
                    Restart (Doesn't work) 🖱️
                </button>
            </div>
        `;
        
        document.body.appendChild(blueScreen);
        this.playSound('error');
        this.animateProgress(blueScreen);
    }
    
    animateProgress(screen) {
        const progressBar = screen.querySelector('#fake-progress');
        const progressText = screen.querySelector('#progress-text');
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            
            if (progress > 100) {
                progress = 100;
                progressText.textContent = "Collecting error info: 100% - Just kidding! 😈";
                clearInterval(interval);
                
                setTimeout(() => {
                    if (screen.parentElement) {
                        screen.remove();
                    }
                }, 3000);
                return;
            }
            
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `Collecting error info: ${Math.floor(progress)}%`;
            
            // Random troll messages
            if (progress > 50 && Math.random() < 0.1) {
                progressText.textContent = "Actually... we're just trolling you 😏";
            }
        }, 200 + Math.random() * 300);
    }
}

/**
 * Sound System Troll Feature
 */
class SoundSystemTroll extends BaseTrollFeature {
    constructor(engine) {
        super(engine);
        this.audioContext = null;
        this.soundEnabled = true;
        this.trollMode = false;
    }
    
    setup() {
        this.initAudioSystem();
        this.setupSoundToggle();
    }
    
    initAudioSystem() {
        try {
            if (window.AudioContext || window.webkitAudioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                
                // Handle suspended context
                if (this.audioContext.state === 'suspended') {
                    document.addEventListener('click', () => {
                        if (this.audioContext?.state === 'suspended') {
                            this.audioContext.resume();
                        }
                    }, { once: true });
                }
            } else {
                console.warn('Web Audio API not supported');
                this.soundEnabled = false;
            }
        } catch (e) {
            console.warn('Audio initialization failed:', e.message);
            this.soundEnabled = false;
        }
    }
    
    setupSoundToggle() {
        const toggleBtn = document.getElementById('sound-toggle');
        if (!toggleBtn) return;
        
        toggleBtn.addEventListener('click', () => {
            this.toggleSound();
        });
    }
    
    toggleSound() {
        if (this.advancedMode && Math.random() < 0.4) {
            // In advanced mode, sometimes toggle doesn't work
            this.engine.showNotification('Sound toggle is broken! Deal with it! 🔊', 'error');
            this.playSound('glitch');
            return;
        }
        
        this.soundEnabled = !this.soundEnabled;
        const toggleBtn = document.getElementById('sound-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = this.soundEnabled ? '🔊' : '🔇';
        }
        
        this.playSound('click');
        this.engine.sessionData.preferences.soundEnabled = this.soundEnabled;
        this.engine.saveSessionData();
    }
    
    playSound(type, options = {}) {
        if (!this.soundEnabled || !this.audioContext) return;
        
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            // Sound configurations
            const sounds = this.getSoundConfigs();
            const config = sounds[type] || sounds.click;
            
            oscillator.frequency.setValueAtTime(config.frequency, this.audioContext.currentTime);
            if (config.frequencyEnd) {
                oscillator.frequency.exponentialRampToValueAtTime(
                    config.frequencyEnd, 
                    this.audioContext.currentTime + config.duration
                );
            }
            
            oscillator.type = config.waveType;
            
            gainNode.gain.setValueAtTime(config.volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + config.duration);
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + config.duration);
            
            // Troll mode: Sometimes play wrong sounds
            if (this.trollMode && Math.random() < 0.2) {
                setTimeout(() => {
                    this.playSound('glitch');
                }, 100);
            }
            
        } catch (e) {
            console.log('Sound failed:', e);
        }
    }
    
    getSoundConfigs() {
        return {
            click: { frequency: 800, duration: 0.1, volume: 0.1, waveType: 'sine' },
            success: { frequency: 523, frequencyEnd: 784, duration: 0.3, volume: 0.15, waveType: 'sine' },
            fail: { frequency: 200, frequencyEnd: 100, duration: 0.5, volume: 0.2, waveType: 'sawtooth' },
            alert: { frequency: 880, duration: 0.2, volume: 0.2, waveType: 'square' },
            error: { frequency: 150, duration: 0.8, volume: 0.3, waveType: 'sawtooth' },
            coin: { frequency: 988, frequencyEnd: 1319, duration: 0.2, volume: 0.1, waveType: 'square' },
            powerup: { frequency: 220, frequencyEnd: 880, duration: 0.4, volume: 0.15, waveType: 'sine' },
            whoosh: { frequency: 400, frequencyEnd: 200, duration: 0.3, volume: 0.1, waveType: 'sine' },
            glitch: { frequency: 100 + Math.random() * 400, duration: 0.1, volume: 0.2, waveType: 'square' },
            laugh: { frequency: 300, frequencyEnd: 600, duration: 0.6, volume: 0.1, waveType: 'triangle' },
            pop: { frequency: 1000, duration: 0.1, volume: 0.1, waveType: 'sine' },
            zap: { frequency: 2000, frequencyEnd: 100, duration: 0.2, volume: 0.15, waveType: 'sawtooth' },
            womp: { frequency: 60, frequencyEnd: 40, duration: 1, volume: 0.2, waveType: 'sine' }
        };
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        this.trollMode = true;
        console.log('🎵 Sound system now in troll mode - expect chaos!');
    }
}

/**
 * Theme Toggle Troll Feature
 */
class ThemeToggleTroll extends BaseTrollFeature {
    constructor(engine) {
        super(engine);
        this.currentTheme = 'light';
        this.toggleCount = 0;
    }
    
    setup() {
        this.createThemeToggle();
    }
    
    createThemeToggle() {
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'theme-toggle-container';
        toggleContainer.innerHTML = `
            <button id="theme-toggle" class="theme-toggle-btn">
                🌙 Dark Mode
            </button>
        `;
        
        // Insert after sound toggle
        const soundToggle = document.querySelector('.sound-toggle');
        if (soundToggle?.parentElement) {
            soundToggle.parentElement.appendChild(toggleContainer);
        }
        
        this.setupToggleEvents();
    }
    
    setupToggleEvents() {
        const themeBtn = document.getElementById('theme-toggle');
        if (!themeBtn) return;
        
        themeBtn.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
    
    toggleTheme() {
        this.toggleCount++;
        const themeBtn = document.getElementById('theme-toggle');
        
        // Troll behavior based on toggle count
        if (this.toggleCount === 1) {
            // First click works normally
            this.applyTheme('dark');
            themeBtn.textContent = '☀️ Light Mode';
            this.playSound('success');
            
        } else if (this.toggleCount === 2) {
            // Second click also works
            this.applyTheme('light');  
            themeBtn.textContent = '🌙 Dark Mode';
            this.playSound('success');
            
        } else if (this.toggleCount === 3) {
            // Third click does random theme
            this.applyTheme('random');
            themeBtn.textContent = '🎨 Chaos Mode';
            this.playSound('glitch');
            
        } else {
            // After that, it becomes unreliable
            this.trollThemeToggle(themeBtn);
        }
    }
    
    applyTheme(theme) {
        const body = document.body;
        
        switch (theme) {
            case 'dark':
                body.style.background = 'linear-gradient(45deg, #2c3e50, #34495e, #1a252f, #2c3e50)';
                body.style.color = '#ecf0f1';
                this.currentTheme = 'dark';
                break;
                
            case 'light':
                body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f7b731)';
                body.style.color = '#2c3e50';
                this.currentTheme = 'light';
                break;
                
            case 'random':
                const randomColors = [
                    '#ff1493', '#00ff7f', '#ff4500', '#9400d3', 
                    '#ff69b4', '#00ffff', '#ffd700', '#ff6347'
                ];
                const color1 = randomColors[Math.floor(Math.random() * randomColors.length)];
                const color2 = randomColors[Math.floor(Math.random() * randomColors.length)];
                const color3 = randomColors[Math.floor(Math.random() * randomColors.length)];
                
                body.style.background = `linear-gradient(45deg, ${color1}, ${color2}, ${color3}, ${color1})`;
                this.currentTheme = 'chaos';
                break;
        }
        
        this.engine.sessionData.preferences.darkMode = (theme === 'dark');
        this.engine.saveSessionData();
    }
    
    trollThemeToggle(button) {
        const trollActions = [
            () => {
                // Button changes text but theme doesn't change
                button.textContent = Math.random() < 0.5 ? '🌙 Dark Mode' : '☀️ Light Mode';
                this.engine.showNotification('Theme toggle is broken! 🎨', 'error');
                this.playSound('fail');
            },
            () => {
                // Apply random theme regardless
                this.applyTheme('random');
                button.textContent = '🎲 Random Mode';
                this.engine.showNotification('Theme randomized! You got trolled! 🎨', 'winner');
                this.playSound('glitch');
            },
            () => {
                // Button disappears temporarily
                button.style.display = 'none';
                this.engine.showNotification('Theme button ran away! 🏃‍♂️', 'error');
                this.playSound('whoosh');
                setTimeout(() => {
                    button.style.display = 'block';
                    button.textContent = '👻 Ghost Mode';
                }, 3000);
            }
        ];
        
        const action = trollActions[Math.floor(Math.random() * trollActions.length)];
        action();
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        
        // In advanced mode, theme changes randomly every 30 seconds
        setInterval(() => {
            if (Math.random() < 0.3) {
                this.applyTheme('random');
                this.engine.showNotification('Surprise theme change! 🎨', 'update');
            }
        }, 30000);
    }
}

/**
 * BrainlessQuestionTroll - Clever question with hover-swapping buttons
 * The "No" button shows "Yes" on hover, and clicking either shows a popup
 */
class BrainlessQuestionTroll extends BaseTrollFeature {
    setup() {
        this.yesButton = document.getElementById('brainless-yes');
        this.noButton = document.getElementById('brainless-no');
        this.noButtonText = this.noButton?.querySelector('.btn-text');
        this.popup = document.getElementById('brainless-popup');
        this.closeButton = document.getElementById('close-brainless');
        
        if (this.yesButton && this.noButton && this.popup && this.closeButton && this.noButtonText) {
            this.setupEventListeners();
            this.originalNoText = this.noButtonText.textContent;
        }
    }
    
    setupEventListeners() {
        // Handle clicks on both buttons
        this.yesButton.addEventListener('click', () => this.handleButtonClick('yes'));
        this.noButton.addEventListener('click', () => this.handleButtonClick('no'));
        
        // Handle hover effects for text swapping
        this.noButton.addEventListener('mouseenter', () => {
            this.noButtonText.textContent = 'Yes';
        });
        
        this.noButton.addEventListener('mouseleave', () => {
            this.noButtonText.textContent = this.originalNoText;
        });
        
        // Handle popup close
        this.closeButton.addEventListener('click', () => this.closePopup());
        
        // Close popup when clicking outside
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.closePopup();
            }
        });
    }
    
    handleButtonClick(buttonType) {
        this.trigger();
        this.showPopup(buttonType);
        this.playSound('success');
    }
    
    showPopup(buttonType) {
        const messages = [
            "😏 I Knew It!",
            "🎯 Called It!",
            "🧠 Exactly What I Expected!",
            "😈 Gotcha!",
            "🤔 As Predicted!",
            "😂 Too Easy!",
            "🎭 Predictable!"
        ];
        
        const descriptions = [
            "Thanks for being honest! 😈",
            "Your honesty is refreshing! 😄",
            "I can read minds, you know... 🔮",
            "The answer was obvious! 😎",
            "You fell right into my trap! 🕳️",
            "Psychology 101! 🧠",
            "Classic human behavior! 🤖"
        ];
        
        const alertContent = this.popup.querySelector('.alert-content');
        const title = alertContent.querySelector('h2');
        const description = alertContent.querySelector('p');
        
        title.textContent = messages[Math.floor(Math.random() * messages.length)];
        description.textContent = descriptions[Math.floor(Math.random() * descriptions.length)];
        
        this.popup.classList.remove('hidden');
        
        // Track user response
        this.engine.logTrollEvent('brainless_question_answered', {
            answer: buttonType,
            buttonSwapped: buttonType === 'no' // If they clicked No, they actually saw Yes on hover
        });
        
        // Show notification
        this.engine.showNotification(
            `User clicked "${buttonType}" - psychological profile updated! 📊`, 
            'winner'
        );
    }
    
    closePopup() {
        this.popup.classList.add('hidden');
        this.playSound('click');
    }
    
    execute() {
        // This troll is always active via the hover effects
        // But we can add extra chaos in advanced mode
        if (this.advancedMode) {
            this.addAdvancedChaos();
        }
    }
    
    addAdvancedChaos() {
        // In advanced mode, occasionally mess with the buttons
        if (Math.random() < 0.3) {
            // Temporarily swap button colors
            const yesStyle = this.yesButton.style.background;
            const noStyle = this.noButton.style.background;
            
            this.yesButton.style.background = 'linear-gradient(45deg, #e74c3c, #c0392b)';
            this.noButton.style.background = 'linear-gradient(45deg, #27ae60, #229954)';
            
            setTimeout(() => {
                this.yesButton.style.background = yesStyle;
                this.noButton.style.background = noStyle;
            }, 2000);
        }
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        
        // Add extra troll behavior every 45 seconds
        setInterval(() => {
            if (Math.random() < 0.4) {
                this.addAdvancedChaos();
            }
        }, 45000);
        
        // Change the question text occasionally
        const questionTexts = [
            "Are you brainless?",
            "Do you think clearly?",
            "Are you easily confused?",
            "Do you fall for tricks?",
            "Are you gullible?",
            "Can you be fooled?",
            "Are you paying attention?"
        ];
        
        setInterval(() => {
            const section = this.yesButton.closest('.troll-section');
            const questionP = section.querySelector('p');
            if (questionP && Math.random() < 0.2) {
                const newQuestion = questionTexts[Math.floor(Math.random() * questionTexts.length)];
                questionP.textContent = newQuestion;
                this.engine.showNotification('Question updated based on your profile! 🧠', 'update');
            }
        }, 60000);
    }
    
    playSound(type) {
        if (this.engine.soundSystem) {
            this.engine.soundSystem.playSound(type);
        }
    }
}

// Export classes
if (typeof window !== 'undefined') {
    window.BaseTrollFeature = BaseTrollFeature;
    window.MovingButtonTroll = MovingButtonTroll;
    window.FakeAlertTroll = FakeAlertTroll;
    window.BlueScreenTroll = BlueScreenTroll;
    window.SoundSystemTroll = SoundSystemTroll;
    window.ThemeToggleTroll = ThemeToggleTroll;
    window.BrainlessQuestionTroll = BrainlessQuestionTroll;
}
