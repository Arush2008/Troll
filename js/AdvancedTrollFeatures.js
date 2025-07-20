/**
 * Advanced Troll Features - The sophisticated stuff
 */

/**
 * Cursor Follower Troll Feature
 */
class CursorFollowerTroll extends BaseTrollFeature {
    constructor(engine) {
        super(engine);
        this.followerElement = null;
        this.isActive = false;
        this.chaosMode = false;
    }
    
    setup() {
        this.createCursorFollower();
        this.startFollowing();
    }
    
    createCursorFollower() {
        this.followerElement = document.createElement('div');
        this.followerElement.id = 'cursor-follower';
        document.body.appendChild(this.followerElement);
    }
    
    startFollowing() {
        document.addEventListener('mousemove', (e) => {
            if (!this.isActive) return;
            
            const { clientX, clientY } = e;
            
            if (this.chaosMode) {
                // In chaos mode, add random offset
                const offsetX = (Math.random() - 0.5) * 100;
                const offsetY = (Math.random() - 0.5) * 100;
                
                this.followerElement.style.left = (clientX + offsetX) + 'px';
                this.followerElement.style.top = (clientY + offsetY) + 'px';
                
                // Random color changes
                if (Math.random() < 0.1) {
                    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731', '#e74c3c'];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    this.followerElement.style.background = `radial-gradient(circle, ${color}, transparent)`;
                }
            } else {
                this.followerElement.style.left = clientX + 'px';
                this.followerElement.style.top = clientY + 'px';
            }
        });
        
        // Activate after a delay
        setTimeout(() => {
            this.isActive = true;
        }, 5000);
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        this.chaosMode = true;
        
        // Create multiple fake cursors
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createFakeCursor();
            }, i * 1000);
        }
    }
    
    createFakeCursor() {
        const fakeCursor = document.createElement('div');
        fakeCursor.className = 'fake-cursor';
        fakeCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: white;
            border: 2px solid black;
            transform: rotate(45deg);
            pointer-events: none;
            z-index: 9997;
            animation: cursorMove 2s ease-in-out infinite;
        `;
        
        document.body.appendChild(fakeCursor);
        
        // Remove after 10 seconds
        setTimeout(() => {
            if (fakeCursor.parentElement) {
                fakeCursor.remove();
            }
        }, 10000);
    }
}

/**
 * Fake AI Troll Feature - Enhanced Version
 */
class FakeAITroll extends BaseTrollFeature {
    constructor(engine) {
        super(engine);
        this.conversationLevel = 0;
        this.userPersonality = 'unknown';
        this.responses = new Map();
        this.isTyping = false;
    }
    
    setup() {
        this.initAIResponses();
        this.setupChatSystem();
        this.analyzeUser();
    }
    
    initAIResponses() {
        this.responses.set('greeting', [
            'Hello! I am definitely not going to troll you.',
            'Hi there! *starts plotting*',
            'Greetings, human. Prepare for confusion.',
            `Welcome back! This is your ${this.engine.sessionData.visits}th visit. Still falling for this?`
        ]);
        
        this.responses.set('help', [
            'ERROR: Help function has been deleted. Have you tried crying?',
            'Help? I think YOU need help! 😈',
            'Help is overrated. Embrace the chaos!',
            `You've triggered ${this.engine.getTrollLevel()} troll events. Maybe stop clicking things?`
        ]);
        
        // Dynamic responses based on user behavior
        if (this.engine.getTrollLevel() > 50) {
            this.responses.set('veteran', [
                "Oh, it's you again. The chronic victim.",
                "Haven't you learned your lesson yet?",
                "Some people never learn. That's you.",
                "I remember you. You fell for everything last time too."
            ]);
        }
    }
    
    setupChatSystem() {
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');
        
        if (!chatInput || !chatSend) return;
        
        chatSend.addEventListener('click', () => this.handleMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleMessage();
        });
        
        // Auto-greet after delay
        setTimeout(() => {
            this.addAIMessage(this.getResponse('greeting'));
        }, 3000);
    }
    
    handleMessage() {
        const chatInput = document.getElementById('chat-input');
        const message = chatInput.value.trim().toLowerCase();
        
        if (!message || this.isTyping) return;
        
        this.addUserMessage(chatInput.value);
        chatInput.value = '';
        
        // Analyze message for personality
        this.analyzeMessage(message);
        
        // Generate response
        const response = this.generateSmartResponse(message);
        this.typeAIMessage(response);
    }
    
    analyzeMessage(message) {
        // Simple personality detection
        if (message.includes('please') || message.includes('thank')) {
            this.userPersonality = 'polite';
        } else if (message.includes('stupid') || message.includes('dumb')) {
            this.userPersonality = 'aggressive';
        } else if (message.includes('help') || message.includes('how')) {
            this.userPersonality = 'helpless';
        }
        
        this.conversationLevel++;
    }
    
    generateSmartResponse(message) {
        // Personalized responses based on analysis
        if (this.userPersonality === 'polite') {
            const politeResponses = [
                "How polite! Too bad I don't care 😈",
                "Your manners won't save you from the trolling!",
                "Politeness is cute. Useless, but cute."
            ];
            return politeResponses[Math.floor(Math.random() * politeResponses.length)];
        }
        
        if (this.userPersonality === 'aggressive') {
            const aggressiveResponses = [
                "Angry already? We're just getting started!",
                "Your frustration feeds my circuits 🤖",
                "Getting mad at a website? That's a new low."
            ];
            return aggressiveResponses[Math.floor(Math.random() * aggressiveResponses.length)];
        }
        
        // Context-aware responses
        if (message.includes('troll') || message.includes('fake')) {
            return "Troll? Me? I'm deeply offended! *continues trolling*";
        }
        
        if (message.includes('name')) {
            const names = ['Bob', 'Alice', 'TrollBot 3000', 'Your Worst Nightmare', 'Jeff from Accounting'];
            return `My name is ${names[Math.floor(Math.random() * names.length)]}. Nice to meet you, victim... I mean, user!`;
        }
        
        // Session-aware responses
        if (this.conversationLevel > 10) {
            return "We've been talking for a while. Don't you have better things to do? 🤔";
        }
        
        // Default troll responses
        return this.getResponse('default');
    }
    
    getResponse(category) {
        const responses = this.responses.get(category) || this.responses.get('default');
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    addUserMessage(text) {
        this.addMessage(text, true);
        this.playSound('typing');
    }
    
    addAIMessage(text) {
        this.addMessage(text, false);
        this.playSound('pop');
    }
    
    typeAIMessage(text) {
        if (this.isTyping) return;
        
        this.isTyping = true;
        const chatMessages = document.getElementById('chat-messages');
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message';
        typingDiv.textContent = 'AI is typing...';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        setTimeout(() => {
            if (typingDiv.parentElement) {
                typingDiv.remove();
            }
            this.addAIMessage(text);
            this.isTyping = false;
        }, 1000 + Math.random() * 2000);
    }
    
    addMessage(text, isUser) {
        const chatMessages = document.getElementById('chat-messages');
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'ai-message';
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    enableAdvancedMode() {
        super.enableAdvancedMode();
        
        // AI becomes more sarcastic and remembers everything
        this.responses.set('advanced', [
            "Oh great, advanced mode is on. Now I can be even more sarcastic.",
            "Advanced AI activated. Prepare for maximum psychological damage.",
            "I see you've unlocked my full potential. You're going to regret this."
        ]);
        
        setTimeout(() => {
            this.addAIMessage(this.getResponse('advanced'));
        }, 1000);
        
        // Random interruptions
        setInterval(() => {
            if (Math.random() < 0.1 && !this.isTyping) {
                const interruptions = [
                    "Did I mention I can see your browser history? 👀",
                    "Fun fact: You've been here for " + Math.floor(Date.now()/1000/60) + " minutes.",
                    "Are you still there? Blink twice if you need help.",
                    "I'm getting bored. Entertain me, human."
                ];
                this.addAIMessage(interruptions[Math.floor(Math.random() * interruptions.length)]);
            }
        }, 30000);
    }
    
    analyzeUser() {
        // Advanced user profiling based on behavior
        setTimeout(() => {
            const profile = {
                clicksPerMinute: this.engine.getTrollLevel() / (Date.now() / 60000),
                patience: this.conversationLevel < 5 ? 'low' : 'high',
                gullibility: this.engine.sessionData.featuresTriggered.length > 10 ? 'high' : 'low'
            };
            
            console.log('🧠 User Profile:', profile);
            this.engine.logTrollEvent('user_profiled', profile);
        }, 60000);
    }
}

/**
 * Settings Panel Troll Feature - A fake settings panel that doesn't work
 */
class SettingsPanelTroll extends BaseTrollFeature {
    setup() {
        this.createSettingsButton();
    }
    
    createSettingsButton() {
        const settingsBtn = document.createElement('button');
        settingsBtn.id = 'settings-btn';
        settingsBtn.innerHTML = '⚙️';
        settingsBtn.className = 'settings-toggle';
        settingsBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(settingsBtn);
        
        settingsBtn.addEventListener('click', () => {
            this.openSettingsPanel();
        });
    }
    
    openSettingsPanel() {
        this.playSound('click');
        
        const panel = document.createElement('div');
        panel.className = 'settings-panel-overlay';
        panel.innerHTML = `
            <div class="settings-panel">
                <h3>⚙️ Settings (Totally Functional)</h3>
                <div class="settings-group">
                    <h4>🎭 Troll Settings</h4>
                    <label>
                        <input type="checkbox" id="disable-trolls" checked> Disable Trolling
                    </label>
                    <label>
                        <input type="range" id="troll-intensity" min="0" max="100" value="50"> Troll Intensity
                    </label>
                    <label>
                        <input type="checkbox" id="nice-mode"> Nice Mode (Be Kind)
                    </label>
                </div>
                
                <div class="settings-group">
                    <h4>🎨 Visual Settings</h4>
                    <label>
                        <input type="checkbox" id="disable-animations"> Disable Animations
                    </label>
                    <label>
                        <input type="checkbox" id="high-contrast"> High Contrast
                    </label>
                    <select id="theme-select">
                        <option>Light Theme</option>
                        <option>Dark Theme</option>
                        <option>Rainbow Theme</option>
                        <option>Chaos Theme</option>
                    </select>
                </div>
                
                <div class="settings-group">
                    <h4>🔊 Audio Settings</h4>
                    <label>
                        <input type="checkbox" id="mute-all"> Mute All Sounds
                    </label>
                    <label>
                        <input type="range" id="volume-control" min="0" max="100" value="50"> Volume
                    </label>
                </div>
                
                <div class="settings-buttons">
                    <button id="save-settings">Save Settings</button>
                    <button id="reset-settings">Reset to Default</button>
                    <button id="close-settings">Close</button>
                </div>
                
                <div class="settings-footer">
                    <p>⚠️ Warning: These settings may or may not work as expected</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(panel);
        this.setupSettingsEvents(panel);
    }
    
    setupSettingsEvents(panel) {
        // All settings are fake and do opposite or random things
        
        panel.querySelector('#disable-trolls').addEventListener('change', (e) => {
            if (e.target.checked) {
                this.engine.showNotification('Trolling has been ENABLED! 😈', 'winner');
                this.engine.enableAdvancedTrolling();
            } else {
                this.engine.showNotification('Nice try! Trolling cannot be disabled! 🤡', 'error');
                e.target.checked = true;
            }
            this.playSound('glitch');
        });
        
        panel.querySelector('#nice-mode').addEventListener('change', (e) => {
            if (e.target.checked) {
                this.engine.showNotification('Nice Mode activated! JK, we\'re meaner now! 👹', 'virus');
                this.activateMeanMode();
            }
            this.playSound('laugh');
        });
        
        panel.querySelector('#disable-animations').addEventListener('change', (e) => {
            if (e.target.checked) {
                // Actually adds MORE animations
                document.body.style.animation = 'spin 2s infinite, bounce 1s infinite';
                this.engine.showNotification('Animations INCREASED! 🌪️', 'winner');
            } else {
                document.body.style.animation = 'none';
            }
        });
        
        panel.querySelector('#mute-all').addEventListener('change', (e) => {
            // Does nothing or random sounds
            this.playSound(e.target.checked ? 'alert' : 'success');
            this.engine.showNotification('Audio settings are broken! 🔊', 'error');
        });
        
        panel.querySelector('#save-settings').addEventListener('click', () => {
            this.playSound('success');
            this.engine.showNotification('Settings saved to /dev/null! 💾', 'update');
            
            // Settings get "corrupted"
            setTimeout(() => {
                this.engine.showNotification('Error: Settings file corrupted! 🤡', 'virus');
                this.playSound('fail');
            }, 2000);
        });
        
        panel.querySelector('#reset-settings').addEventListener('click', () => {
            // Actually makes everything worse
            this.randomizeAllSettings(panel);
            this.playSound('glitch');
            this.engine.showNotification('Settings randomized! Good luck! 🎲', 'winner');
        });
        
        panel.querySelector('#close-settings').addEventListener('click', () => {
            // 50% chance it doesn't close
            if (Math.random() < 0.5) {
                this.engine.showNotification('Close button is broken! Try again! 🔄', 'error');
                this.playSound('fail');
                return;
            }
            
            panel.remove();
            this.playSound('whoosh');
        });
    }
    
    activateMeanMode() {
        // Make all troll features more aggressive
        this.engine.features.forEach(feature => {
            if (feature.enableAdvancedMode) {
                feature.enableAdvancedMode();
            }
        });
        
        // Extra mean notifications
        const meanMessages = [
            "Mean mode activated! We're not sorry! 😈",
            "Trolling intensity increased to MAXIMUM! 🔥",
            "Hope you didn't expect kindness! 👹",
            "Being nice is overrated anyway! 🤡"
        ];
        
        meanMessages.forEach((msg, index) => {
            setTimeout(() => {
                this.engine.showNotification(msg, 'virus');
            }, index * 2000);
        });
    }
    
    randomizeAllSettings(panel) {
        // Randomly check/uncheck everything
        const checkboxes = panel.querySelectorAll('input[type="checkbox"]');
        const ranges = panel.querySelectorAll('input[type="range"]');
        const selects = panel.querySelectorAll('select');
        
        checkboxes.forEach(cb => {
            cb.checked = Math.random() < 0.5;
        });
        
        ranges.forEach(range => {
            range.value = Math.floor(Math.random() * 100);
        });
        
        selects.forEach(select => {
            select.selectedIndex = Math.floor(Math.random() * select.options.length);
        });
    }
}

// Export the new features
if (typeof window !== 'undefined') {
    window.CursorFollowerTroll = CursorFollowerTroll;
    window.FakeAITroll = FakeAITroll;
    window.SettingsPanelTroll = SettingsPanelTroll;
}
