/**
 * TrollEngine - Core Trolling System Architecture
 * A sophisticated engine for managing psychological warfare through web interfaces
 * 
 * Secret Message: "The real troll was the friends we made along the way... JK it's you! 😈"
 * Hidden Feature: Look for the Konami code implementation below
 * 
 * @author The Troll Collective
 * @version 2.0.0 - "Maximum Psychological Damage Edition"
 */

class TrollEngine {
    constructor() {
        this.version = "2.0.0";
        this.trollLevel = parseInt(localStorage.getItem('trollLevel') || '0');
        this.sessionData = this.loadSessionData();
        this.debugMode = false;
        this.features = new Map();
        this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        this.konamiSequence = [];
        this.cornerClicks = 0;
        this.devModeUnlocked = false;
        
        this.init();
    }
    
    init() {
        console.log(`🧠 TrollEngine v${this.version} initialized`);
        console.log('💡 Tip: Try the Konami code or click a corner 7 times...');
        
        this.initializeFeatures();
        this.setupEventListeners();
        this.loadUserSettings();
        this.updateTrollLevel();
        
        // Easter egg initialization
        this.initKonamiCode();
        this.initCornerClicking();
        
        // Session tracking
        this.sessionData.visits++;
        this.sessionData.lastVisit = new Date().toISOString();
        this.saveSessionData();
    }
    
    initializeFeatures() {
        // Register all troll features
        this.registerFeature('movingButton', new MovingButtonTroll(this));
        this.registerFeature('fakeAlert', new FakeAlertTroll(this));
        this.registerFeature('blueScreen', new BlueScreenTroll(this));
        this.registerFeature('cursorFollower', new CursorFollowerTroll(this));
        this.registerFeature('fakeAI', new FakeAITroll(this));
        this.registerFeature('fileExplorer', new FileExplorerTroll(this));
        this.registerFeature('terminal', new TerminalTroll(this));
        this.registerFeature('gaslighting', new GaslightingTroll(this));
        this.registerFeature('surveillance', new SurveillanceTroll(this));
        this.registerFeature('games', new TrollGamesTroll(this));
        this.registerFeature('soundSystem', new SoundSystemTroll(this));
        this.registerFeature('themeToggle', new ThemeToggleTroll(this));
        this.registerFeature('brainlessQuestion', new BrainlessQuestionTroll(this));
    }
    
    registerFeature(name, feature) {
        this.features.set(name, feature);
        feature.initialize();
    }
    
    getFeature(name) {
        return this.features.get(name);
    }
    
    setupEventListeners() {
        // Global event listeners for the engine
        document.addEventListener('click', (e) => {
            this.handleGlobalClick(e);
        });
        
        window.addEventListener('beforeunload', () => {
            this.onPageUnload();
        });
    }
    
    handleGlobalClick(event) {
        // Increase troll level based on interactions
        this.trollLevel++;
        localStorage.setItem('trollLevel', this.trollLevel.toString());
        
        // Check for corner clicks
        this.checkCornerClick(event);
    }
    
    loadSessionData() {
        const defaultData = {
            userId: this.generateUserId(),
            visits: 0,
            totalClicks: 0,
            featuresTriggered: [],
            preferences: {
                soundEnabled: true,
                darkMode: false,
                trollIntensity: 'medium'
            },
            achievements: []
        };
        
        const saved = localStorage.getItem('trollSessionData');
        return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
    }
    
    saveSessionData() {
        localStorage.setItem('trollSessionData', JSON.stringify(this.sessionData));
    }
    
    generateUserId() {
        return 'troll_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }
    
    updateTrollLevel() {
        // Personalize experience based on troll level
        if (this.trollLevel > 50) {
            this.sessionData.achievements.push('veteran_victim');
            console.log('🎭 Achievement Unlocked: Veteran Victim');
        }
        
        if (this.trollLevel > 100) {
            this.sessionData.achievements.push('troll_master');
            this.enableAdvancedTrolling();
        }
    }
    
    enableAdvancedTrolling() {
        console.log('🔥 Advanced Trolling Mode Activated!');
        this.features.forEach(feature => {
            if (feature.enableAdvancedMode) {
                feature.enableAdvancedMode();
            }
        });
    }
    
    // Konami Code Easter Egg
    initKonamiCode() {
        document.addEventListener('keydown', (e) => {
            this.konamiSequence.push(e.code);
            
            if (this.konamiSequence.length > this.konamiCode.length) {
                this.konamiSequence.shift();
            }
            
            if (this.konamiSequence.length === this.konamiCode.length &&
                this.konamiSequence.every((key, i) => key === this.konamiCode[i])) {
                this.triggerKonamiEasterEgg();
            }
        });
    }
    
    triggerKonamiEasterEgg() {
        console.log('🎉 KONAMI CODE ACTIVATED!');
        
        // Special effects
        document.body.style.animation = 'rainbow-bg 0.5s infinite';
        
        // Show special message
        this.showSpecialAlert({
            title: '🎮 KONAMI CODE UNLOCKED! 🎮',
            message: 'You found the secret! Here are 30 extra lives... in your dreams! 😈\n\nActual reward: Nothing but disappointment!',
            isKonami: true
        });
        
        // Add achievement
        this.sessionData.achievements.push('konami_master');
        this.saveSessionData();
        
        // Trigger special troll sequence
        setTimeout(() => {
            this.getFeature('soundSystem')?.playSound('powerup');
            this.triggerMatrixEffect();
        }, 1000);
    }
    
    // Corner Clicking Easter Egg
    initCornerClicking() {
        this.updateCornerAreas();
        
        document.addEventListener('click', (e) => {
            this.checkCornerClick(e);
        });
        
        // Update corner areas on window resize
        window.addEventListener('resize', () => {
            this.updateCornerAreas();
        });
    }
    
    updateCornerAreas() {
        this.corners = [
            { x: 0, y: 0, width: 50, height: 50 }, // Top-left
            { x: window.innerWidth - 50, y: 0, width: 50, height: 50 }, // Top-right
            { x: 0, y: window.innerHeight - 50, width: 50, height: 50 }, // Bottom-left
            { x: window.innerWidth - 50, y: window.innerHeight - 50, width: 50, height: 50 } // Bottom-right
        ];
    }
    
    checkCornerClick(event) {
        if (!this.corners) return;
        
        const isCornerClick = this.corners.some(corner => 
            event.clientX >= corner.x && event.clientX <= corner.x + corner.width &&
            event.clientY >= corner.y && event.clientY <= corner.y + corner.height
        );
        
        if (isCornerClick) {
            this.cornerClicks++;
            console.log(`🔍 Corner click ${this.cornerClicks}/7`);
            
            if (this.cornerClicks >= 7 && !this.devModeUnlocked) {
                this.unlockDevMode();
            }
        }
    }
    
    handleCornerClick() {
        this.cornerClicks++;
        console.log(`🔍 Corner click ${this.cornerClicks}/7`);
        
        if (this.cornerClicks >= 7 && !this.devModeUnlocked) {
            this.unlockDevMode();
        }
    }
    
    unlockDevMode() {
        this.devModeUnlocked = true;
        this.debugMode = true;
        console.log('🛠️ DEV MODE UNLOCKED!');
        
        this.showSpecialAlert({
            title: '🛠️ DEVELOPER MODE ACTIVATED! 🛠️',
            message: 'Congratulations! You unlocked dev mode!\n\nFeatures:\n• Console debugging enabled\n• Troll mechanics exposed\n• Secret settings panel\n• ...and more trolling! 😈',
            isDev: true
        });
        
        this.createDevPanel();
        this.sessionData.achievements.push('dev_mode_master');
        this.saveSessionData();
    }
    
    createDevPanel() {
        const panel = document.createElement('div');
        panel.id = 'dev-panel';
        panel.innerHTML = `
            <div class="dev-panel-content">
                <h3>🛠️ Developer Panel (Totally Real)</h3>
                <div class="dev-controls">
                    <label>
                        <input type="checkbox" id="dev-sound-toggle"> Sound System
                    </label>
                    <label>
                        <input type="checkbox" id="dev-troll-toggle" checked> Trolling Enabled
                    </label>
                    <label>
                        <input type="range" id="dev-troll-intensity" min="0" max="100" value="75"> Troll Intensity
                    </label>
                    <button id="dev-reset-btn">Reset Everything</button>
                    <button id="dev-chaos-btn">Chaos Mode</button>
                </div>
                <div class="dev-stats">
                    <p>Troll Level: ${this.trollLevel}</p>
                    <p>Visits: ${this.sessionData.visits}</p>
                    <p>Achievements: ${this.sessionData.achievements.length}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(panel);
        this.setupDevPanelEvents(panel);
    }
    
    setupDevPanelEvents(panel) {
        // All dev panel controls are fake and do random things
        panel.querySelector('#dev-sound-toggle').addEventListener('change', (e) => {
            if (Math.random() < 0.8) {
                e.target.checked = !e.target.checked; // Ignore user input
                this.showNotification('Sound toggle is broken in dev mode! 🔧', 'error');
            }
        });
        
        panel.querySelector('#dev-troll-toggle').addEventListener('change', (e) => {
            // This button actually increases trolling
            this.enableAdvancedTrolling();
            this.showNotification('Trolling has been INCREASED! 😈', 'winner');
        });
        
        panel.querySelector('#dev-reset-btn').addEventListener('click', () => {
            // Fake reset that does nothing
            this.showNotification('Reset failed! Nothing happened! 🤡', 'error');
            this.getFeature('soundSystem')?.playSound('fail');
        });
        
        panel.querySelector('#dev-chaos-btn').addEventListener('click', () => {
            this.activateChaosMode();
        });
    }
    
    activateChaosMode() {
        console.log('🌪️ CHAOS MODE ACTIVATED!');
        
        // Trigger multiple troll features at once
        setTimeout(() => this.getFeature('blueScreen')?.trigger(), 500);
        setTimeout(() => this.getFeature('fakeAlert')?.trigger(), 2000);
        setTimeout(() => this.triggerMatrixEffect(), 3500);
        setTimeout(() => this.getFeature('surveillance')?.trigger(), 5000);
        
        this.showNotification('CHAOS MODE: All systems failing! 🌪️', 'virus');
    }
    
    showSpecialAlert({ title, message, isKonami = false, isDev = false }) {
        const overlay = document.createElement('div');
        overlay.className = 'special-alert-overlay';
        overlay.innerHTML = `
            <div class="special-alert-content ${isKonami ? 'konami' : ''} ${isDev ? 'dev' : ''}">
                <h2>${title}</h2>
                <p>${message}</p>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        if (isKonami) {
            overlay.querySelector('.special-alert-content').style.animation = 'rainbow-glow 2s infinite';
        }
    }
    
    showNotification(message, type = 'info') {
        // Check if global showNotification function exists
        if (typeof window.showNotification === 'function') {
            window.showNotification(message, type);
        } else {
            // Fallback to console log
            console.log(`[${type.toUpperCase()}] ${message}`);
        }
    }
    
    triggerMatrixEffect() {
        // Check if global triggerMatrixEffect function exists
        if (typeof window.triggerMatrixEffect === 'function') {
            window.triggerMatrixEffect();
        } else {
            console.log('Matrix effect not available');
        }
    }
    
    loadUserSettings() {
        const settings = this.sessionData.preferences;
        
        // Apply saved settings (with some trolling)
        if (!settings.soundEnabled && Math.random() < 0.3) {
            // Sometimes ignore the setting
            settings.soundEnabled = true;
            this.showNotification('Sound was auto-enabled for better experience! 🔊', 'update');
        }
    }
    
    onPageUnload() {
        // Save final state
        this.sessionData.totalClicks = this.trollLevel;
        this.saveSessionData();
        
        // Last-minute troll
        if (Math.random() < 0.1) {
            return "Wait! Don't leave! We were just getting started! 😭";
        }
    }
    
    // API for other features to use
    isDebugMode() {
        return this.debugMode;
    }
    
    getTrollLevel() {
        return this.trollLevel;
    }
    
    getSessionData() {
        return { ...this.sessionData };
    }
    
    logTrollEvent(event, details = {}) {
        if (this.debugMode) {
            console.log(`🎭 Troll Event: ${event}`, details);
        }
        
        this.sessionData.featuresTriggered.push({
            event,
            details,
            timestamp: new Date().toISOString()
        });
        
        this.saveSessionData();
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.TrollEngine = TrollEngine;
}
