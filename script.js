// Troll Website JavaScript - All the fun happens here! 🎭
// Advanced trolling features for maximum confusion!

document.addEventListener('DOMContentLoaded', function() {
    // Initialize audio context on first user interaction
    document.addEventListener('click', function initAudio() {
        initAudioContext();
        document.removeEventListener('click', initAudio);
    }, { once: true });
    
    // Initialize all troll features
    initLoadingScreen();
    initMovingButton();
    initFakeErrors();
    initDisappearingText();
    initTrollForm();
    initCursorFollower();
    initBrokenButton();
    initSecretMessage();
    initRestartButton();
    initRandomTrolls();
    
    // Initialize advanced troll features
    initFakeAI();
    initFileExplorer();
    initFakeTerminal();
    initGaslightingForm();
    initSurveillance();
    initSystemNotifications();
    initInternetBreaker();
    initMatrixEffect();
    initCursorChaos();
    initPersonalization();
    initAudioChaos();
    
    // Initialize trolling games
    initTrollingGames();
    
    // Initialize sound effects for all buttons
    initButtonSounds();
    
    // Get user's name for personalized trolling
    setTimeout(() => {
        getUserName();
    }, 5000);
});

// Add sound effects to all interactive elements
function initButtonSounds() {
    // Add click sounds to all buttons
    document.querySelectorAll('button').forEach(button => {
        // Skip buttons that already have custom sounds
        if (!button.onclick && !button.classList.contains('catch-target')) {
            button.addEventListener('click', () => {
                if (button.classList.contains('troll-button')) {
                    playSound('boing');
                } else if (button.classList.contains('normal-button')) {
                    playSound('click');
                } else if (button.classList.contains('gaslight-btn')) {
                    playSound('honk');
                } else {
                    playSound('pop');
                }
            });
        }
    });
    
    // Add hover sounds to game cards
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            playSound('coin');
        });
    });
    
    // Add typing sounds to text inputs
    document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
        input.addEventListener('keydown', () => {
            if (Math.random() < 0.3) { // Not every keystroke
                playSound('typing');
            }
        });
    });
    
    // Add sound to file explorer items
    document.querySelectorAll('.file-item').forEach(item => {
        const originalClick = item.onclick;
        item.addEventListener('mouseenter', () => {
            playSound('pop');
        });
    });
}

// 1. Fake Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const loadingPercent = document.getElementById('loading-percent');
    const loadingStatus = document.getElementById('loading-status');
    
    const statuses = [
        "Downloading more RAM...",
        "Calculating the meaning of life...",
        "Teaching AI to be funny...",
        "Counting to infinity twice...",
        "Dividing by zero...",
        "Loading pixels one by one...",
        "Asking the internet for permission...",
        "Warming up the hamster wheel...",
        "Almost there! (Not really)",
        "Pretending to work hard..."
    ];
    
    let percent = 0;
    let statusIndex = 0;
    
    const loadingInterval = setInterval(() => {
        // Randomly slow down or speed up
        const increment = Math.random() > 0.7 ? Math.floor(Math.random() * 15) + 1 : Math.floor(Math.random() * 5) + 1;
        percent += increment;
        
        if (percent > 100) percent = 100;
        
        loadingPercent.textContent = percent;
        
        // Change status message
        if (Math.random() > 0.8) {
            statusIndex = (statusIndex + 1) % statuses.length;
            loadingStatus.textContent = statuses[statusIndex];
        }
        
        // Fake getting stuck at certain percentages
        if (percent === 73 || percent === 89 || percent === 97) {
            setTimeout(() => {
                // Do nothing, just pause for effect
            }, 1000);
        }
        
        if (percent >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                showWelcomeMessage();
            }, 1000);
        }
    }, 200 + Math.random() * 300); // Variable speed
}

// Welcome message with typing effect
function showWelcomeMessage() {
    const title = document.getElementById('title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let index = 0;
    const typeInterval = setInterval(() => {
        title.textContent += originalText[index];
        index++;
        
        if (index >= originalText.length) {
            clearInterval(typeInterval);
            // Add a little celebration
            title.style.animation = 'bounce 1s ease-in-out';
        }
    }, 100);
}

// 2. Moving Button Prank - Improved Version
function initMovingButton() {
    const movingButton = document.getElementById('moving-button');
    const buttonMessage = document.getElementById('button-message');
    
    if (!movingButton || !buttonMessage) {
        console.warn('Moving button elements not found');
        return;
    }
    
    let clickCount = 0;
    let isMoving = false;
    
    const messages = [
        "Nice try! 😜",
        "Almost got it! 😂",
        "Keep trying! 🎯",
        "So close! 😄",
        "You're getting warmer! 🔥",
        "Nope, not there! 🙈",
        "Maybe next time! ⭐",
        "You're persistent! 💪"
    ];
    
    function moveButton() {
        if (isMoving || clickCount >= 5) return;
        
        isMoving = true;
        playSound('whoosh');
        
        const container = movingButton.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = movingButton.getBoundingClientRect();
        
        // Calculate safe movement area (accounting for padding)
        const padding = 20;
        const maxX = container.offsetWidth - movingButton.offsetWidth - padding;
        const maxY = container.offsetHeight - movingButton.offsetHeight - padding;
        
        // Ensure minimum movement distance for better effect
        const minMove = 80;
        let newX, newY;
        
        do {
            newX = Math.random() * Math.max(0, maxX);
            newY = Math.random() * Math.max(0, maxY);
        } while (
            Math.abs(newX - (movingButton.offsetLeft || 0)) < minMove &&
            Math.abs(newY - (movingButton.offsetTop || 0)) < minMove
        );
        
        // Apply smooth movement
        movingButton.style.position = 'absolute';
        movingButton.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        movingButton.style.left = newX + 'px';
        movingButton.style.top = newY + 'px';
        movingButton.style.transform = 'scale(0.9)';
        
        // Show troll message
        buttonMessage.textContent = messages[clickCount % messages.length];
        buttonMessage.classList.remove('hidden');
        clickCount++;
        
        // Play different sounds based on attempts
        setTimeout(() => {
            if (clickCount <= 2) {
                playSound('boing');
            } else if (clickCount <= 4) {
                playSound('honk');
            } else {
                playSound('laugh');
            }
        }, 100);
        
        // Reset button scale after movement
        setTimeout(() => {
            movingButton.style.transform = 'scale(1)';
            isMoving = false;
        }, 300);
        
        // After 5 attempts, make button clickable
        if (clickCount >= 5) {
            setTimeout(() => {
                playSound('success');
                movingButton.style.position = 'relative';
                movingButton.style.left = '';
                movingButton.style.top = '';
                movingButton.style.transform = '';
                movingButton.innerHTML = "Fine, you can click me now! 💰";
                movingButton.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
                
                movingButton.onclick = function() {
                    playSound('coin');
                    showFakeAlert();
                };
            }, 1000);
        }
    }
    
    // Use mouseenter for better control
    movingButton.addEventListener('mouseenter', moveButton);
    
    // Prevent default hover effects when moving
    movingButton.addEventListener('mouseover', function(e) {
        if (isMoving || clickCount >= 5) return;
        e.preventDefault();
    });
}

// 3. Fake Error Messages
function initFakeErrors() {
    const updateButton = document.getElementById('update-button');
    
    if (!updateButton) {
        console.warn('Update button not found');
        return;
    }
    
    updateButton.addEventListener('click', function() {
        playSound('alert'); // Alert sound for fake update
        
        // Show fake blue screen
        const blueScreen = safeGetElement('blue-screen');
        if (blueScreen) {
            blueScreen.classList.remove('hidden');
        }
        
        // Add sound effect (if browser supports it)
        setTimeout(() => {
            playSound('error');
        }, 1000);
    });
    
    // Close blue screen
    safeAddEventListener('close-blue-screen', 'click', function() {
        playSound('success');
        const blueScreen = safeGetElement('blue-screen');
        if (blueScreen) {
            blueScreen.classList.add('hidden');
        }
    });
}

// 4. Disappearing Text
function initDisappearingText() {
    const disappearingText = document.getElementById('disappearing-text');
    
    if (!disappearingText) {
        console.warn('Disappearing text element not found');
        return;
    }
    
    let countdown = 5;
    const countdownInterval = setInterval(() => {
        countdown--;
        disappearingText.textContent = `This text will disappear in ${countdown} seconds...`;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            disappearingText.style.animation = 'fadeOut 2s ease-out forwards';
            
            setTimeout(() => {
                disappearingText.textContent = "Surprise! I'm back! 👻";
                disappearingText.style.animation = 'slideIn 1s ease-out';
                disappearingText.style.opacity = '1';
            }, 3000);
        }
    }, 1000);
}

// 5. Troll Form
function initTrollForm() {
    const trollForm = document.getElementById('troll-form');
    
    if (!trollForm) {
        console.warn('Troll form not found');
        return;
    }
    
    trollForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input');
        const submitBtn = document.getElementById('form-submit');
        
        if (!submitBtn) {
            console.warn('Submit button not found');
            return;
        }
        
        // Fake processing
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Clear form dramatically
            inputs.forEach(input => {
                input.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    input.value = '';
                }, 500);
            });
            
            submitBtn.textContent = 'Error: Form trolled! 😂';
            submitBtn.style.background = '#e74c3c';
            
            setTimeout(() => {
                submitBtn.textContent = 'Try Again! (It won\'t work)';
                submitBtn.disabled = false;
                submitBtn.style.background = 'linear-gradient(45deg, #f39c12, #e67e22)';
            }, 2000);
        }, 2000);
    });
}

// 6. Cursor Follower
function initCursorFollower() {
    const cursorFollower = document.getElementById('cursor-follower');
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth following animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // Add random colors
    setInterval(() => {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731', '#8b00ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        cursorFollower.style.background = `radial-gradient(circle, ${randomColor}, transparent)`;
    }, 1000);
}

// 7. Broken Button
function initBrokenButton() {
    const brokenButton = document.getElementById('broken-button');
    const brokenMessage = document.getElementById('broken-message');
    const fixButton = document.getElementById('fix-button');
    
    if (!brokenButton || !fixButton) {
        console.warn('Broken button elements not found');
        return;
    }
    
    let clickCount = 0;
    
    brokenButton.addEventListener('click', function() {
        clickCount++;
        playSound('error'); // Error sound for broken button
        this.classList.add('shake');
        
        setTimeout(() => {
            this.classList.remove('shake');
        }, 500);
        
        if (clickCount >= 3) {
            playSound('womp'); // Sad womp womp sound
            brokenMessage.classList.remove('hidden');
            this.style.opacity = '0.5';
        }
    });
    
    fixButton.addEventListener('click', function() {
        playSound('powerup'); // Power up sound for fix
        brokenButton.textContent = 'Fixed! Now click me!';
        brokenButton.style.opacity = '1';
        brokenButton.style.background = '#27ae60';
        brokenMessage.classList.add('hidden');
        
        // But it breaks again after clicking
        brokenButton.onclick = function() {
            playSound('zap'); // Zap sound for breaking again
            this.textContent = 'Oops! Broke again! 🔧';
            this.style.background = '#e74c3c';
            setTimeout(() => {
                playSound('sad'); // Sad trombone
                brokenMessage.classList.remove('hidden');
                this.style.opacity = '0.5';
            }, 1000);
        };
    });
}

// 8. Secret Message
function initSecretMessage() {
    const reverseText = document.getElementById('reverse-text');
    const decodeButton = document.getElementById('decode-button');
    const reverseHeading = document.getElementById('reverse-heading');
    
    decodeButton.addEventListener('click', function() {
        reverseText.classList.add('reverse-text');
        
        const originalHandler = this.onclick;
        setTimeout(() => {
            reverseText.textContent = 'Hello, I am trolling you. You are on the track!';
            reverseHeading.textContent = 'Secret Message Revealed! 🕵️';
            this.textContent = 'Encode Again';
            
            this.onclick = function() {
                reverseText.textContent = '!kcart eht no era uoY .uoy gnitroll ma I ,olleH';
                reverseHeading.textContent = 'Amazing Secret Message';
                this.textContent = 'Decode Secret Message';
                this.onclick = originalHandler; // Reset to original function
            };
        }, 1000);
    });
}

// 9. Restart Button
function initRestartButton() {
    const restartButton = document.getElementById('restart-button');
    
    restartButton.addEventListener('click', function() {
        // Fake page reload
        document.body.style.animation = 'fadeOut 1s ease-out';
        
        setTimeout(() => {
            location.reload();
        }, 1000);
    });
}

// 10. Random Trolls
function initRandomTrolls() {
    // Random page title changes
    const titles = [
        "Don't close this tab!",
        "You're being watched! 👀",
        "TROLL WEBSITE 🎭",
        "Did you hear that?",
        "Look behind you...",
        "Welcome to My Website",
        "You can't leave now!"
    ];
    
    setInterval(() => {
        document.title = titles[Math.floor(Math.random() * titles.length)];
    }, 3000);
    
    // Random background color shifts
    setTimeout(() => {
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 2000);
    }, 15000);
    
    // Random screen shake
    setTimeout(() => {
        document.body.style.animation = 'shake 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = 'none';
        }, 2000);
    }, 30000);
}

// Utility function to safely get DOM elements
function safeGetElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`⚠️ Element with ID '${id}' not found`);
    }
    return element;
}

// Utility function to safely add event listener
function safeAddEventListener(elementId, event, handler) {
    const element = safeGetElement(elementId);
    if (element) {
        element.addEventListener(event, handler);
        return true;
    }
    return false;
}

// Helper Functions
function showFakeAlert() {
    document.getElementById('fake-alert').classList.remove('hidden');
    playSound('alert');
    
    document.getElementById('close-alert').addEventListener('click', function() {
        document.getElementById('fake-alert').classList.add('hidden');
        playSound('click');
    });
}

function playErrorSound() {
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Audio not supported');
    }
}

// ADVANCED SOUND SYSTEM 🔊
// Comprehensive sound effects for maximum trolling fun!

let audioContext;
let soundEnabled = true;

// Initialize audio context (needed for modern browsers)
function initAudioContext() {
    try {
        // Check if AudioContext is available
        if (window.AudioContext || window.webkitAudioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Handle suspended context (required by newer browsers)
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            console.log('🔊 Audio system initialized successfully');
            return true;
        } else {
            console.warn('⚠️ Web Audio API not supported');
            soundEnabled = false;
            return false;
        }
    } catch (e) {
        console.warn('⚠️ Audio initialization failed:', e.message);
        soundEnabled = false;
        audioContext = null;
        return false;
    }
}

// Main sound playing function
function playSound(soundType, options = {}) {
    if (!soundEnabled || !audioContext) return;
    
    // Initialize audio context on first user interaction
    if (!audioContext || audioContext.state === 'closed') {
        if (!initAudioContext()) return;
    }
    
    try {
    
    // Resume context if suspended (browser autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    switch(soundType) {
        case 'click':
            playClickSound(options);
            break;
        case 'error':
            playErrorBeep(options);
            break;
        case 'success':
            playSuccessChime(options);
            break;
        case 'fail':
            playFailBuzzer(options);
            break;
        case 'whoosh':
            playWhooshSound(options);
            break;
        case 'alert':
            playAlertSound(options);
            break;
        case 'glitch':
            playGlitchSound(options);
            break;
        case 'typing':
            playTypingSound(options);
            break;
        case 'countdown':
            playCountdownBeep(options);
            break;
        case 'explosion':
            playExplosionSound(options);
            break;
        case 'laugh':
            playLaughSound(options);
            break;
        case 'sad':
            playSadSound(options);
            break;
        case 'coin':
            playCoinSound(options);
            break;
        case 'powerup':
            playPowerUpSound(options);
            break;
        case 'womp':
            playWompSound(options);
            break;
        case 'boing':
            playBoingSound(options);
            break;
        case 'zap':
            playZapSound(options);
            break;
        case 'honk':
            playHonkSound(options);
            break;
        case 'pop':
            playPopSound(options);
            break;
        case 'laser':
            playLaserSound(options);
            break;
        default:
            playClickSound(options);
    }
    } catch (e) {
        console.warn('⚠️ Sound playback failed:', e.message);
    }
}

// Individual sound functions
function playClickSound(options = {}) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function playErrorBeep(options = {}) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 200;
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + 0.2);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function playSuccessChime(options = {}) {
    // Play a happy ascending sequence
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    
    notes.forEach((freq, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }, index * 100);
    });
}

function playFailBuzzer(options = {}) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(100, audioContext.currentTime + 0.8);
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.8);
}

function playWhooshSound(options = {}) {
    // Create a whoosh/wind sound effect
    const bufferSize = audioContext.sampleRate * 0.5; // 0.5 seconds
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Generate pink noise for whoosh effect
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(i / bufferSize, 2);
    }
    
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    source.buffer = buffer;
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(200, audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.3);
    
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    source.start(audioContext.currentTime);
}

function playAlertSound(options = {}) {
    // Classic alert sound - alternating tones
    [600, 800, 600, 800].forEach((freq, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }, index * 200);
    });
}

function playGlitchSound(options = {}) {
    // Create glitchy digital sound
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 100 + Math.random() * 1000;
            oscillator.type = Math.random() > 0.5 ? 'square' : 'sawtooth';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }, i * 50 + Math.random() * 100);
    }
}

function playTypingSound(options = {}) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 300 + Math.random() * 200;
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
}

function playCountdownBeep(options = {}) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = options.final ? 1000 : 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function playExplosionSound(options = {}) {
    // Create explosion sound with noise and low frequency
    const bufferSize = audioContext.sampleRate * 0.8;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Generate noise that fades out
    for (let i = 0; i < bufferSize; i++) {
        const fade = 1 - (i / bufferSize);
        data[i] = (Math.random() * 2 - 1) * fade * fade;
    }
    
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    source.buffer = buffer;
    filter.type = 'lowpass';
    filter.frequency.value = 200;
    
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
    
    source.start(audioContext.currentTime);
}

function playLaughSound(options = {}) {
    // Simulate laugh with descending notes
    const laughNotes = [400, 350, 300, 250, 300, 280, 260];
    
    laughNotes.forEach((freq, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
        }, index * 100);
    });
}

function playSadSound(options = {}) {
    // Sad trombone effect
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(250, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 1);
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
}

function playCoinSound(options = {}) {
    // Classic coin/pickup sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

function playPowerUpSound(options = {}) {
    // Ascending power-up sound
    const notes = [200, 300, 400, 600, 800];
    
    notes.forEach((freq, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }, index * 80);
    });
}

function playWompSound(options = {}) {
    // Sad womp womp sound
    [150, 120, 150, 120].forEach((freq, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sawtooth';
            
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }, index * 300);
    });
}

function playBoingSound(options = {}) {
    // Cartoon boing sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.1);
    oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.4);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
}

function playZapSound(options = {}) {
    // Electric zap sound
    playGlitchSound(); // Reuse glitch for zap effect
}

function playHonkSound(options = {}) {
    // Air horn style honk
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 110; // Low honk
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.25, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.6);
}

function playPopSound(options = {}) {
    // Quick pop sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function playLaserSound(options = {}) {
    // Sci-fi laser sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Sound toggle function
function toggleSound() {
    soundEnabled = !soundEnabled;
    const soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) {
        soundBtn.textContent = soundEnabled ? '🔊' : '🔇';
        soundBtn.title = soundEnabled ? 'Disable Sound' : 'Enable Sound';
    }
    
    if (soundEnabled) {
        playSound('powerup');
        showNotification('Sound effects enabled! 🔊', 'update');
    } else {
        showNotification('Sound effects disabled 🔇', 'update');
    }
}

// Easter Eggs
document.addEventListener('keydown', function(e) {
    // Konami Code: ↑↑↓↓←→←→BA
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    if (!window.konamiIndex) window.konamiIndex = 0;
    
    if (e.keyCode === konamiCode[window.konamiIndex]) {
        window.konamiIndex++;
        if (window.konamiIndex === konamiCode.length) {
            alert('🎮 KONAMI CODE ACTIVATED! 🎮\nExtra troll mode enabled!');
            document.body.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                document.body.style.transform = 'none';
            }, 3000);
            window.konamiIndex = 0;
        }
    } else {
        window.konamiIndex = 0;
    }
    
    // CTRL + ALT + T for secret troll
    if (e.ctrlKey && e.altKey && e.key === 't') {
        document.body.style.animation = 'spin 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = 'none';
        }, 4000);
    }
});

// Prevent right-click context menu (classic troll move)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    
    // Show fake context menu
    const fakeMenu = document.createElement('div');
    fakeMenu.innerHTML = `
        <div style="position: fixed; top: ${e.pageY}px; left: ${e.pageX}px; 
             background: white; border: 1px solid #ccc; padding: 10px; 
             border-radius: 5px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); 
             z-index: 10000; font-family: Arial;">
            <div>Copy (doesn't work) 😜</div>
            <div>Paste (also doesn't work) 😂</div>
            <div>You've been trolled! 🎭</div>
        </div>
    `;
    
    document.body.appendChild(fakeMenu);
    
    setTimeout(() => {
        document.body.removeChild(fakeMenu);
    }, 2000);
});

// Console message for curious developers
console.log(`
🎭 TROLL WEBSITE DETECTED! 🎭

Congratulations! You opened the developer console!
You must be a real developer... or just curious! 😄

Here's a secret for you:
This website is designed to be harmless fun.
All the "errors" and "viruses" are fake!

Want to see the code? It's all here!
Built with love (and lots of trolling) ❤️

Pro tip: Try the Konami Code! ↑↑↓↓←→←→BA
Or press Ctrl+Alt+T for a surprise!
`);

// Fun fact in console
console.log('🔥 HOT TIP: The moving button will stop moving after 5 attempts!');

// Random console messages
const consoleTrolls = [
    "👀 I see you checking the console...",
    "🕵️ Looking for secrets?",
    "💻 Nice try, but there are no real errors here!",
    "🎯 You found the developer mode!",
    "🚀 Welcome to the troll console!"
];

setInterval(() => {
    console.log(consoleTrolls[Math.floor(Math.random() * consoleTrolls.length)]);
}, 10000);

// ADVANCED TROLL FEATURES START HERE 🧠

// Fake AI Chatbox
function initFakeAI() {
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    
    const aiResponses = {
        'hello': ['Hello! I am definitely not going to troll you.', 'Hi there! *starts plotting*', 'Greetings, human. Prepare for confusion.'],
        'help': ['ERROR: Help function has been deleted. Have you tried crying?', 'Help? I think YOU need help! 😈', 'Help is overrated. Embrace the chaos!'],
        'exit': ['There is no exit. Welcome to the Hotel California of websites!', 'Exit? The only way out is through!', 'You can check out any time you like, but you can never leave... 🎵'],
        'password': ['Your password is: password123... wait, that\'s MY password!', 'Nice try! Your password is probably "password" anyway.', 'Password hint: It\'s not "password". Or is it?'],
        'who are you': ['I am your worst nightmare... a malfunctioning chatbot!', 'I\'m Bob from accounting. Wait, no, I\'m an AI. Or am I?', 'I\'m you, but smarter. Which isn\'t saying much.'],
        'default': ['I don\'t understand. Have you tried turning yourself off and on again?', 'That makes no sense. Like this website!', 'Beep boop. Translation: You\'re weird.', '404: Brain not found.', 'I\'m sorry, I was hacked by a toaster.']
    };
    
    let isTyping = false;
    let userName = localStorage.getItem('trollUserName') || 'Anonymous';
    
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'ai-message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Play sound based on message type
        if (isUser) {
            playSound('typing');
        } else {
            playSound('pop');
        }
    }
    
    function typeMessage(message) {
        if (isTyping) return;
        isTyping = true;
        
        const tempDiv = document.createElement('div');
        tempDiv.className = 'ai-message';
        tempDiv.textContent = 'AI is typing...';
        chatMessages.appendChild(tempDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        setTimeout(() => {
            chatMessages.removeChild(tempDiv);
            addMessage(message);
            isTyping = false;
        }, 1000 + Math.random() * 2000);
    }
    
    function getAIResponse(userInput) {
        const input = userInput.toLowerCase();
        
        // Easter egg responses
        if (input.includes('hack')) {
            setTimeout(() => {
                addMessage('SYSTEM COMPROMISED! Just kidding 😄');
                triggerMatrixEffect();
                playSound('laugh');
            }, 2000);
            return 'Initiating hack sequence... Please wait...';
        }
        
        if (input.includes(userName.toLowerCase()) && userName !== 'Anonymous') {
            return `${userName}? That's a weird name. Are you sure that's right?`;
        }
        
        // Find matching response
        for (const [key, responses] of Object.entries(aiResponses)) {
            if (key !== 'default' && input.includes(key)) {
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
        
        return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
    }
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message || isTyping) return;
        
        addMessage(message, true);
        chatInput.value = '';
        
        const response = getAIResponse(message);
        typeMessage(response);
    }
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Random AI "glitches"
    setInterval(() => {
        if (Math.random() < 0.1 && !isTyping) {
            const glitchMessages = [
                '01001000 01100101 01101100 01110000',
                'SYSTEM ERROR: Reality.exe has stopped working',
                'The cake is a lie',
                'I can see you through your webcam... just kidding!',
                'Why did the chicken cross the road? To escape this website!'
            ];
            typeMessage(glitchMessages[Math.floor(Math.random() * glitchMessages.length)]);
        }
    }, 15000);
}

// File Explorer Trolling
function initFileExplorer() {
    const fileItems = document.querySelectorAll('.file-item');
    
    const fileActions = {
        'passwords.txt': () => {
            showNotification('Opening passwords.txt...', 'update');
            setTimeout(() => {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                showNotification('Rick-rolled! Your passwords are safe 😄', 'virus');
            }, 2000);
        },
        'DO_NOT_OPEN.exe': () => {
            showNotification('WARNING: Opening dangerous file...', 'virus');
            setTimeout(() => {
                createPopupSpam();
            }, 1000);
        },
        'homework_folder': () => {
            const userName = localStorage.getItem('trollUserName') || 'User';
            showNotification(`Deleting ${userName}'s homework... Just kidding!`, 'update');
            setTimeout(() => {
                showNotification('Your homework is safe. Do it yourself! 📚', 'winner');
            }, 3000);
        },
        'secret_diary.txt': () => {
            showNotification('Reading your diary... "Dear Diary, I love trolling websites..."', 'update');
        },
        'virus_scanner.exe': () => {
            showNotification('Scanning for viruses...', 'update');
            setTimeout(() => {
                showNotification('1,000,000 viruses found! (All fake)', 'virus');
                triggerFakeBSOD();
            }, 2000);
        }
    };
    
    fileItems.forEach(item => {
        item.addEventListener('click', function() {
            const fileName = this.getAttribute('data-file');
            const action = fileActions[fileName];
            
            if (action) {
                this.style.animation = 'shake 0.5s ease-in-out';
                action();
            }
        });
        
        // File hover effects
        item.addEventListener('mouseenter', function() {
            if (Math.random() < 0.3) {
                this.textContent = this.textContent + ' (CORRUPTED)';
                setTimeout(() => {
                    this.textContent = this.textContent.replace(' (CORRUPTED)', '');
                }, 2000);
            }
        });
    });
}

// Fake Terminal
function initFakeTerminal() {
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    
    const commands = {
        'help': 'Available commands: selfdestruct, open-portal, ai-takeover, hack, exit, clear, whoami, sudo, rm -rf /',
        'selfdestruct': 'Self-destruct sequence initiated... 10... 9... 8... Just kidding! 😄',
        'open-portal': '🌀 Opening interdimensional portal... Portal opened! Welcome to Earth 2.0!',
        'ai-takeover': 'AI TAKEOVER INITIATED... ERROR: AI too lazy to take over. Please try again later.',
        'hack': 'Hacking the mainframe... Access granted! You now have root access to nothing!',
        'clear': 'CLEAR',
        'whoami': 'You are: A confused human who fell for a troll website',
        'sudo': 'You are not in the sudoers file. This incident will be reported to Santa.',
        'rm -rf /': 'Deleting everything... ERROR: Cannot delete /reality. Permission denied.',
        'exit': 'There is no escape from the terminal of doom!'
    };
    
    function addTerminalLine(text, isCommand = false) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        if (isCommand) {
            line.innerHTML = `<span class="terminal-prompt">user@trollsite:~$ </span>${text}`;
        } else {
            line.textContent = text;
        }
        terminalOutput.appendChild(line);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    
    function executeCommand(cmd) {
        addTerminalLine(cmd, true);
        
        const command = cmd.toLowerCase().trim();
        
        // Play appropriate sound for different commands
        if (command === 'selfdestruct') {
            playSound('alert');
        } else if (command === 'hack' || command === 'ai-takeover') {
            playSound('glitch');
        } else if (command === 'open-portal') {
            playSound('whoosh');
        } else if (command === 'rm -rf /') {
            playSound('zap');
        } else if (command === 'clear') {
            playSound('pop');
        } else if (commands[command]) {
            playSound('typing');
        } else {
            playSound('error');
        }
        
        if (command === 'clear') {
            terminalOutput.innerHTML = '';
            addTerminalLine('Terminal cleared. The trolling continues...');
            return;
        }
        
        if (commands[command]) {
            if (command === 'selfdestruct') {
                let countdown = 10;
                const countdownInterval = setInterval(() => {
                    addTerminalLine(`Self-destruct in ${countdown}...`);
                    countdown--;
                    if (countdown < 0) {
                        clearInterval(countdownInterval);
                        addTerminalLine('BOOM! 💥 Just kidding! You survived!');
                    }
                }, 1000);
            } else if (command === 'ai-takeover') {
                addTerminalLine(commands[command]);
                setTimeout(() => {
                    triggerInternetBreaker();
                }, 3000);
            } else {
                addTerminalLine(commands[command]);
            }
        } else {
            addTerminalLine(`bash: ${cmd}: command not found. Try 'help' for available commands.`);
        }
    }
    
    terminalInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = this.value;
            executeCommand(command);
            this.value = '';
        }
    });
    
    // Random terminal "glitches"
    setInterval(() => {
        if (Math.random() < 0.1) {
            const glitches = [
                'MEMORY LEAK DETECTED: Allocating 999999999 bytes...',
                'WARNING: /dev/brain not found',
                'ERROR: Keyboard not connected. Press F1 to continue.',
                'NETWORK INTRUSION DETECTED: Someone is stealing your WiFi!'
            ];
            addTerminalLine(glitches[Math.floor(Math.random() * glitches.length)]);
        }
    }, 20000);
}

// UI Gaslighting Form
function initGaslightingForm() {
    const nameInput = document.getElementById('gaslight-name');
    const emailInput = document.getElementById('gaslight-email');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    
    let buttonSwapCount = 0;
    
    // Input text deletion
    function randomlyDeleteText(input) {
        const text = input.value;
        if (text.length > 3 && Math.random() < 0.3) {
            input.classList.add('glitch');
            setTimeout(() => {
                input.value = text.slice(0, -Math.floor(Math.random() * 3) - 1);
                input.classList.remove('glitch');
            }, 200);
        }
    }
    
    nameInput.addEventListener('input', () => randomlyDeleteText(nameInput));
    emailInput.addEventListener('input', () => randomlyDeleteText(emailInput));
    
    // Button swapping
    function swapButtons() {
        buttonSwapCount++;
        yesBtn.classList.add('swap-animation');
        noBtn.classList.add('swap-animation');
        
        setTimeout(() => {
            const yesText = yesBtn.textContent;
            const yesClass = yesBtn.id;
            
            yesBtn.textContent = noBtn.textContent;
            noBtn.textContent = yesText;
            
            yesBtn.classList.remove('swap-animation');
            noBtn.classList.remove('swap-animation');
            
            if (buttonSwapCount >= 3) {
                yesBtn.textContent = 'I Give Up';
                noBtn.textContent = 'Me Too';
            }
        }, 500);
    }
    
    yesBtn.addEventListener('mouseenter', () => {
        if (Math.random() < 0.7) {
            swapButtons();
        }
    });
    
    noBtn.addEventListener('mouseenter', () => {
        if (Math.random() < 0.7) {
            swapButtons();
        }
    });
    
    // Form submission trolling
    document.getElementById('gaslight-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Form submitted! Data sent to... nowhere! 😄', 'winner');
    });
}

// Surveillance System
function initSurveillance() {
    setTimeout(() => {
        if (Math.random() < 0.8) {
            showSurveillanceModal();
        }
    }, 20000);
}

function showSurveillanceModal() {
    const modal = document.getElementById('surveillance-modal');
    const ipMessage = document.getElementById('ip-message');
    const locationMessage = document.getElementById('location-message');
    
    // Generate fake IP and location
    const fakeIPs = ['192.168.0.1', '127.0.0.1', '999.999.999.999', '123.456.789.0'];
    const fakeLocations = [
        'Mars, Solar System',
        'Atlantis, Ocean Floor',
        'North Pole, Santa\'s Workshop',
        'The Matrix, Simulation Level 1',
        'Narnia, Behind the Wardrobe',
        'Hogwarts, Platform 9¾'
    ];
    
    ipMessage.textContent = `Your IP address has been logged: ${fakeIPs[Math.floor(Math.random() * fakeIPs.length)]}`;
    locationMessage.textContent = `Location detected: ${fakeLocations[Math.floor(Math.random() * fakeLocations.length)]}`;
    
    modal.classList.remove('hidden');
    
    document.getElementById('close-surveillance').addEventListener('click', function() {
        modal.classList.add('hidden');
        showNotification('Your data is safe! This was just a prank 😊', 'update');
    });
}

// System Notifications
function initSystemNotifications() {
    setTimeout(() => showRandomNotifications(), 10000);
    setInterval(showRandomNotifications, 30000);
}

function showNotification(message, type = 'update') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Play sound based on notification type
    switch(type) {
        case 'virus':
            playSound('alert');
            break;
        case 'winner':
            playSound('success');
            break;
        case 'update':
            playSound('pop');
            break;
        default:
            playSound('click');
    }
    
    container.appendChild(notification);
    
    // Auto-remove after 5 seconds or on click
    const removeNotification = () => {
        if (container.contains(notification)) {
            playSound('whoosh'); // Whoosh when closing
            container.removeChild(notification);
        }
    };
    
    notification.addEventListener('click', removeNotification);
    setTimeout(removeNotification, 5000);
}

function showRandomNotifications() {
    const notifications = [
        { message: 'Installing virus.exe... 47% complete', type: 'virus' },
        { message: 'You\'ve won $1,000,000! Click here to claim!', type: 'winner' },
        { message: 'Windows needs to restart in 5 minutes', type: 'update' },
        { message: 'Your mic is currently ON', type: 'virus' },
        { message: 'New message from: FBI_Agent_Johnson', type: 'update' },
        { message: 'Battery critically low: 2% remaining', type: 'virus' }
    ];
    
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    showNotification(randomNotification.message, randomNotification.type);
}

function createPopupSpam() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            showNotification(`Popup ${i + 1}: You can't close me! 😈`, 'virus');
        }, i * 500);
    }
}

// Internet Breaker
function initInternetBreaker() {
    // Randomly trigger internet breaker
    setTimeout(() => {
        if (Math.random() < 0.3) {
            triggerInternetBreaker();
        }
    }, 60000);
}

function triggerInternetBreaker() {
    const internetBreaker = document.getElementById('internet-breaker');
    internetBreaker.classList.remove('hidden');
    
    document.getElementById('restore-internet').addEventListener('click', function() {
        internetBreaker.classList.add('hidden');
        showNotification('Internet restored! You were never actually disconnected 😄', 'update');
    });
    
    // Auto-restore after 10 seconds
    setTimeout(() => {
        if (!internetBreaker.classList.contains('hidden')) {
            internetBreaker.classList.add('hidden');
            showNotification('Internet auto-restored! The disconnection was fake!', 'update');
        }
    }, 10000);
}

// Matrix Effect
function initMatrixEffect() {
    // Random matrix effect
    setTimeout(() => {
        if (Math.random() < 0.2) {
            triggerMatrixEffect();
        }
    }, 45000);
}

function triggerMatrixEffect() {
    const matrixOverlay = document.getElementById('matrix-overlay');
    matrixOverlay.classList.remove('hidden');
    
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    // Create falling matrix characters
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = characters[Math.floor(Math.random() * characters.length)];
            char.style.left = Math.random() * 100 + '%';
            char.style.animationDelay = Math.random() * 2 + 's';
            matrixOverlay.appendChild(char);
            
            setTimeout(() => {
                if (matrixOverlay.contains(char)) {
                    matrixOverlay.removeChild(char);
                }
            }, 3000);
        }, i * 100);
    }
    
    // Remove matrix effect after 8 seconds
    setTimeout(() => {
        matrixOverlay.classList.add('hidden');
    }, 8000);
}

// Cursor Chaos
function initCursorChaos() {
    setTimeout(() => {
        if (Math.random() < 0.3) {
            triggerCursorChaos();
        }
    }, 25000);
}

function triggerCursorChaos() {
    const cursorChaos = document.getElementById('cursor-chaos');
    cursorChaos.classList.remove('hidden');
    
    // Create multiple fake cursors
    for (let i = 0; i < 5; i++) {
        const fakeCursor = document.createElement('div');
        fakeCursor.className = 'fake-cursor';
        fakeCursor.style.left = Math.random() * window.innerWidth + 'px';
        fakeCursor.style.top = Math.random() * window.innerHeight + 'px';
        cursorChaos.appendChild(fakeCursor);
    }
    
    // Remove after 6 seconds
    setTimeout(() => {
        cursorChaos.classList.add('hidden');
        cursorChaos.innerHTML = '';
    }, 6000);
}

// Personalization
function getUserName() {
    const names = ['Alex', 'Jordan', 'Casey', 'Taylor', 'Morgan', 'Riley', 'Avery', 'Quinn'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    
    const name = prompt(`Hello! What's your name? (Don't worry, this is just for personalized trolling 😄)`) || randomName;
    localStorage.setItem('trollUserName', name);
    
    // Show personalized message
    setTimeout(() => {
        showNotification(`Hello ${name}! Prepare for personalized chaos! 🎭`, 'winner');
    }, 1000);
    
    return name;
}

function initPersonalization() {
    const userName = localStorage.getItem('trollUserName');
    if (userName) {
        // Add personalized elements throughout the site
        setTimeout(() => {
            const hour = new Date().getHours();
            let timeMessage = '';
            
            if (hour >= 0 && hour < 6) {
                timeMessage = `${userName}, you're up late! Go to bed! 😴`;
            } else if (hour >= 6 && hour < 12) {
                timeMessage = `Good morning ${userName}! Ready to be trolled? ☀️`;
            } else if (hour >= 12 && hour < 18) {
                timeMessage = `Good afternoon ${userName}! Having fun yet? 😄`;
            } else {
                timeMessage = `Good evening ${userName}! Perfect time for some trolling! 🌙`;
            }
            
            showNotification(timeMessage, 'update');
        }, 8000);
    }
}

// Audio Chaos
function initAudioChaos() {
    let isUserActive = true;
    let inactivityTimer;
    
    // Track user activity
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keypress', resetInactivityTimer);
    
    function resetInactivityTimer() {
        isUserActive = true;
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            isUserActive = false;
            if (Math.random() < 0.3) {
                playSpookySound();
                showNotification('Did you hear that? 👻', 'virus');
            }
        }, 30000);
    }
    
    function playSpookySound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);
            oscillator.type = 'sawtooth';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        } catch (e) {
            console.log('Audio chaos failed - browser blocked it');
        }
    }
    
    resetInactivityTimer();
    
    // Fake microphone notification
    setTimeout(() => {
        if (Math.random() < 0.4) {
            showNotification('🎤 Your microphone is currently ON', 'virus');
            setTimeout(() => {
                showNotification('Just kidding! Your mic is safe 😄', 'update');
            }, 5000);
        }
    }, 40000);
}

// Fake BSOD (Blue Screen of Death)
function triggerFakeBSOD() {
    setTimeout(() => {
        document.getElementById('blue-screen').classList.remove('hidden');
    }, 2000);
}

// TROLLING GAMES 🎮
// These games are designed to be nearly impossible to win!

function initTrollingGames() {
    const gameModal = document.getElementById('game-modal');
    const closeGameBtn = document.getElementById('close-game');
    
    closeGameBtn.addEventListener('click', () => {
        gameModal.classList.add('hidden');
        // Hide all game screens
        document.querySelectorAll('.game-screen').forEach(screen => {
            screen.classList.add('hidden');
        });
    });
    
    // Initialize individual games
    initCatchButtonGame();
    initMemoryGame();
    initTypingTest();
    initReactionTimeGame();
}

function showGame(gameType) {
    const gameModal = document.getElementById('game-modal');
    playSound('pop'); // Pop sound when opening game
    gameModal.classList.remove('hidden');
    
    // Hide all game screens first
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    
    // Show selected game
    switch(gameType) {
        case 'catch-button':
            document.getElementById('catch-button-game').classList.remove('hidden');
            playSound('powerup'); // Game start sound
            resetCatchButtonGame();
            break;
        case 'memory-game':
            document.getElementById('memory-game-screen').classList.remove('hidden');
            playSound('powerup');
            resetMemoryGame();
            break;
        case 'typing-test':
            document.getElementById('typing-test-screen').classList.remove('hidden');
            playSound('powerup');
            resetTypingTest();
            break;
        case 'reaction-time':
            document.getElementById('reaction-time-screen').classList.remove('hidden');
            playSound('powerup');
            resetReactionTimeGame();
            break;
    }
}

// 1. CATCH THE BUTTON GAME 🎯
// The button gets faster and more evasive as you progress!
function initCatchButtonGame() {
    const catchTarget = document.getElementById('catch-target');
    const catchScore = document.getElementById('catch-score');
    const catchMessage = document.getElementById('catch-message');
    
    let score = 0;
    let clickCount = 0;
    let gameActive = true;
    
    catchTarget.addEventListener('click', function(e) {
        if (!gameActive) return;
        
        clickCount++;
        score++;
        catchScore.textContent = score;
        
        // Play success sound with pitch getting higher
        playSound('coin');
        
        // Increase difficulty and trolling with each click
        if (score >= 3) {
            // Button becomes smaller
            this.style.transform = `scale(${Math.max(0.5, 1 - (score * 0.1))})`;
            playSound('powerup'); // Power-up sound for difficulty increase
        }
        
        if (score >= 5) {
            // Button moves faster
            this.style.animationDuration = `${Math.max(0.5, 2 - (score * 0.2))}s`;
            playSound('alert'); // Alert sound for speed increase
        }
        
        if (score >= 7) {
            // Button becomes partially transparent
            this.style.opacity = Math.max(0.3, 1 - ((score - 7) * 0.2));
            playSound('glitch'); // Glitch sound for transparency
        }
        
        if (score >= 9) {
            // Almost impossible to click - button moves away on hover
            this.addEventListener('mouseenter', function() {
                playSound('whoosh'); // Whoosh when escaping
                this.style.animation = 'none';
                this.style.transform = `translate(${Math.random() * 400}px, ${Math.random() * 200}px) scale(0.3)`;
                setTimeout(() => {
                    this.style.animation = 'catchButtonMove 0.5s ease-in-out infinite';
                }, 200);
            });
        }
        
        // Troll messages based on progress
        const trollMessages = [
            "Good start! 🎯",
            "Getting warmer... 🔥",
            "Hmm, getting harder? 😏",
            "Button is getting nervous! 😰",
            "You're making it angry! 😡",
            "It's running away from you! 🏃‍♂️",
            "Almost impossible now! 💀",
            "The button is practically invisible! 👻",
            "One more... if you can catch it! 🎭",
            "VICTORY! ...or is it? 🤔"
        ];
        
        catchMessage.textContent = trollMessages[score] || "Keep trying!";
        
        // Check for "victory"
        if (score >= 10) {
            gameActive = false;
            playSound('success'); // Victory sound
            setTimeout(() => {
                // Fake victory that gets trolled
                playSound('womp'); // But then womp womp
                catchMessage.textContent = "YOU WIN! 🎉 ...Just kidding! The game never ends! 😈";
                showNotification("Congratulations! You've been trolled by the button game! 🎯", 'winner');
                
                // Reset the game after 3 seconds
                setTimeout(() => {
                    playSound('laser'); // Reset sound
                    resetCatchButtonGame();
                }, 3000);
            }, 1000);
        }
    });
}

function resetCatchButtonGame() {
    const catchTarget = document.getElementById('catch-target');
    const catchScore = document.getElementById('catch-score');
    const catchMessage = document.getElementById('catch-message');
    
    catchScore.textContent = '0';
    catchMessage.textContent = 'Click the button 10 times to win!';
    catchTarget.style.transform = 'scale(1)';
    catchTarget.style.opacity = '1';
    catchTarget.style.animationDuration = '2s';
    
    // Remove previous event listeners to avoid stacking
    catchTarget.replaceWith(catchTarget.cloneNode(true));
    initCatchButtonGame();
}

// 2. MEMORY GAME 🧠
// The sequence changes when you're about to win!
function initMemoryGame() {
    let sequence = [];
    let playerSequence = [];
    let level = 1;
    let showingSequence = false;
    let gameActive = false;
}

function resetMemoryGame() {
    const memoryLevel = document.getElementById('memory-level');
    const memoryMessage = document.getElementById('memory-message');
    const memoryGrid = document.getElementById('memory-grid');
    
    // Create 3x3 grid
    memoryGrid.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement('div');
        tile.className = 'memory-tile';
        tile.dataset.index = i;
        memoryGrid.appendChild(tile);
    }
    
    memoryLevel.textContent = '1';
    memoryMessage.textContent = 'Watch the sequence and repeat it!';
    
    startMemoryGame();
}

function startMemoryGame() {
    let sequence = [];
    let playerSequence = [];
    let level = 1;
    let showingSequence = false;
    let gameActive = true;
    
    function addToSequence() {
        // Add random tile to sequence
        sequence.push(Math.floor(Math.random() * 9));
        showSequence();
    }
    
    function showSequence() {
        showingSequence = true;
        document.getElementById('memory-message').textContent = 'Watch carefully...';
        
        let index = 0;
        const interval = setInterval(() => {
            if (index < sequence.length) {
                const tile = document.querySelector(`[data-index="${sequence[index]}"]`);
                tile.classList.add('active');
                playSound('boing'); // Boing sound for each tile in sequence
                
                setTimeout(() => {
                    tile.classList.remove('active');
                }, 500);
                
                index++;
            } else {
                clearInterval(interval);
                showingSequence = false;
                document.getElementById('memory-message').textContent = 'Now repeat the sequence!';
                playSound('pop'); // Pop sound when sequence is done
                setupClickListeners();
            }
        }, 800);
    }
    
    function setupClickListeners() {
        const tiles = document.querySelectorAll('.memory-tile');
        tiles.forEach(tile => {
            tile.onclick = function() {
                if (showingSequence || !gameActive) return;
                
                const clickedIndex = parseInt(this.dataset.index);
                playerSequence.push(clickedIndex);
                
                this.classList.add('active');
                playSound('click'); // Click sound for player input
                setTimeout(() => {
                    this.classList.remove('active');
                }, 200);
                
                // Check if player is correct so far
                const currentStep = playerSequence.length - 1;
                
                // TROLL MECHANIC: Change the sequence when player is about to win!
                if (level >= 3 && playerSequence.length === sequence.length - 1) {
                    // Secretly change the last element
                    sequence[sequence.length - 1] = (sequence[sequence.length - 1] + 1) % 9;
                }
                
                if (playerSequence[currentStep] !== sequence[currentStep]) {
                    // Wrong!
                    this.classList.add('wrong');
                    playSound('fail'); // Fail sound for wrong answer
                    setTimeout(() => {
                        this.classList.remove('wrong');
                    }, 500);
                    
                    const trollMessages = [
                        "Oops! Try again! 🤔",
                        "Memory failing you? 😏",
                        "The sequence definitely didn't change... 😇",
                        "Are you sure you watched carefully? 🤨",
                        "Maybe your screen glitched? 😈"
                    ];
                    
                    document.getElementById('memory-message').textContent = 
                        trollMessages[Math.floor(Math.random() * trollMessages.length)];
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        playerSequence = [];
                        showSequence();
                    }, 2000);
                } else if (playerSequence.length === sequence.length) {
                    // Completed this level
                    level++;
                    document.getElementById('memory-level').textContent = level;
                    
                    if (level >= 6) {
                        // "Victory" troll
                        gameActive = false;
                        document.getElementById('memory-message').textContent = 
                            "You win! ...Actually, the game is infinite! 🤯";
                        showNotification("Memory game trolled you! The sequence keeps changing! 🧠", 'winner');
                        return;
                    }
                    
                    this.classList.add('correct');
                    playSound('success'); // Success sound for correct level
                    setTimeout(() => {
                        this.classList.remove('correct');
                    }, 500);
                    
                    document.getElementById('memory-message').textContent = 
                        `Level ${level}! Get ready for a longer sequence...`;
                    
                    playerSequence = [];
                    setTimeout(() => {
                        addToSequence();
                    }, 1500);
                }
            };
        });
    }
    
    // Start the game
    addToSequence();
}

// 3. TYPING TEST ⌨️
// Words change while you're typing them!
function initTypingTest() {
    const words = [
        'hello', 'world', 'javascript', 'troll', 'website',
        'computer', 'keyboard', 'mouse', 'screen', 'internet',
        'programming', 'code', 'function', 'variable', 'array'
    ];
    
    let currentWord = '';
    let score = 0;
    let wordChangeCount = 0;
}

function resetTypingTest() {
    const typingScore = document.getElementById('typing-score');
    const typingInput = document.getElementById('typing-input');
    const typingTarget = document.getElementById('typing-target-word');
    const typingMessage = document.getElementById('typing-message');
    
    typingScore.textContent = '0';
    typingInput.value = '';
    typingMessage.textContent = 'Type 5 words correctly to win!';
    
    startTypingTest();
}

function startTypingTest() {
    const words = [
        'hello', 'world', 'javascript', 'troll', 'website',
        'computer', 'keyboard', 'mouse', 'screen', 'internet',
        'programming', 'code', 'function', 'variable', 'array'
    ];
    
    let currentWord = words[Math.floor(Math.random() * words.length)];
    let score = 0;
    let wordChangeCount = 0;
    let gameActive = true;
    
    const typingScore = document.getElementById('typing-score');
    const typingInput = document.getElementById('typing-input');
    const typingTarget = document.getElementById('typing-target-word');
    const typingMessage = document.getElementById('typing-message');
    
    function setNewWord() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        typingTarget.textContent = currentWord;
        typingInput.value = '';
        typingInput.focus();
        playSound('pop'); // Sound when new word appears
    }
    
    setNewWord();
    
    typingInput.addEventListener('input', function() {
        if (!gameActive) return;
        
        const typed = this.value.toLowerCase().trim();
        
        // TROLL MECHANIC 1: Change word when user is close to completing it
        if (typed.length >= currentWord.length - 2 && wordChangeCount < 3) {
            wordChangeCount++;
            setTimeout(() => {
                if (typed === this.value.toLowerCase().trim()) {
                    currentWord = words[Math.floor(Math.random() * words.length)];
                    typingTarget.textContent = currentWord;
                    typingMessage.textContent = "Oops! Word changed! 😈";
                    playSound('glitch'); // Glitch sound when word changes
                }
            }, 100);
        }
        
        // TROLL MECHANIC 2: Delete characters randomly
        if (typed.length > 3 && Math.random() < 0.2) {
            setTimeout(() => {
                this.value = this.value.slice(0, -1);
                this.classList.add('shake');
                playSound('zap'); // Zap sound when deleting characters
                setTimeout(() => {
                    this.classList.remove('shake');
                }, 500);
            }, 50);
        }
        
        // Check if word is complete
        if (typed === currentWord.toLowerCase()) {
            score++;
            typingScore.textContent = score;
            playSound('success'); // Success sound for completing word
            
            if (score >= 5) {
                gameActive = false;
                typingMessage.textContent = "You win! ...Wait, did the words keep changing? 🤔";
                playSound('powerup'); // Victory sound
                showNotification("Typing test trolled you! Words kept changing while you typed! ⌨️", 'winner');
                return;
            }
            
            const encouragements = [
                "Great! Next word coming up! 🎯",
                "Nice typing! But can you handle the next one? 😏",
                "Good job! This next word won't change... maybe 😈",
                "Excellent! The game is definitely not cheating! 😇",
                "Perfect! One more and you win... if you can! 🎭"
            ];
            
            typingMessage.textContent = encouragements[score - 1];
            wordChangeCount = 0; // Reset for next word
            
            setTimeout(() => {
                setNewWord();
            }, 1000);
        }
    });
    
    typingInput.addEventListener('keypress', function(e) {
        // TROLL MECHANIC 3: Random key doesn't register
        if (Math.random() < 0.1) {
            e.preventDefault();
            this.classList.add('shake');
            setTimeout(() => {
                this.classList.remove('shake');
            }, 300);
        }
    });
}

// 4. REACTION TIME GAME ⚡
// The timing is rigged against the player!
function initReactionTimeGame() {
    let gameState = 'waiting'; // waiting, ready, go, finished
    let startTime = 0;
    let bestTime = localStorage.getItem('bestReactionTime') || null;
    let attempts = 0;
}

function resetReactionTimeGame() {
    const reactionCircle = document.getElementById('reaction-circle');
    const reactionMessage = document.getElementById('reaction-message');
    const bestTimeDisplay = document.getElementById('best-time');
    
    reactionCircle.className = 'reaction-circle wait';
    reactionCircle.textContent = 'Wait for GREEN...';
    reactionMessage.textContent = 'Click when the circle turns GREEN!';
    
    const savedBest = localStorage.getItem('bestReactionTime');
    bestTimeDisplay.textContent = savedBest ? savedBest + 'ms' : '---';
    
    startReactionTimeGame();
}

function startReactionTimeGame() {
    let gameState = 'waiting';
    let startTime = 0;
    let bestTime = localStorage.getItem('bestReactionTime') || null;
    let attempts = 0;
    
    const reactionCircle = document.getElementById('reaction-circle');
    const reactionMessage = document.getElementById('reaction-message');
    const bestTimeDisplay = document.getElementById('best-time');
    
    function startRound() {
        gameState = 'waiting';
        reactionCircle.className = 'reaction-circle wait';
        reactionCircle.textContent = 'Wait for GREEN...';
        
        // Random wait time between 2-6 seconds
        const waitTime = 2000 + Math.random() * 4000;
        
        // TROLL MECHANIC: Sometimes make wait time extremely long
        const actualWaitTime = attempts > 3 && Math.random() < 0.3 ? 
            waitTime + 5000 + Math.random() * 10000 : waitTime;
        
        setTimeout(() => {
            if (gameState === 'waiting') {
                gameState = 'ready';
                reactionCircle.className = 'reaction-circle ready';
                reactionCircle.textContent = 'GET READY...';
                playSound('countdown'); // Countdown sound for get ready phase
                
                // Random ready time
                setTimeout(() => {
                    if (gameState === 'ready') {
                        gameState = 'go';
                        reactionCircle.className = 'reaction-circle go';
                        reactionCircle.textContent = 'CLICK NOW!';
                        startTime = Date.now();
                        playSound('powerup'); // Power-up sound when turning green
                        
                        // TROLL MECHANIC: Sometimes change back to red immediately
                        if (attempts > 2 && Math.random() < 0.4) {
                            setTimeout(() => {
                                if (gameState === 'go') {
                                    gameState = 'finished';
                                    reactionCircle.className = 'reaction-circle wait';
                                    reactionCircle.textContent = 'Too Slow!';
                                    reactionMessage.textContent = 'The game is faster than you! Try again! 😈';
                                    
                                    setTimeout(() => {
                                        startRound();
                                    }, 2000);
                                }
                            }, 50 + Math.random() * 100); // Very short window
                        }
                    }
                }, 500 + Math.random() * 1500);
            }
        }, actualWaitTime);
    }
    
    reactionCircle.onclick = function() {
        attempts++;
        
        if (gameState === 'waiting' || gameState === 'ready') {
            // Too early!
            gameState = 'finished';
            this.className = 'reaction-circle too-early';
            this.textContent = 'TOO EARLY!';
            reactionMessage.textContent = 'Wait for GREEN! Starting over...';
            playSound('fail'); // Fail sound for clicking too early
            
            setTimeout(() => {
                startRound();
            }, 2000);
            
        } else if (gameState === 'go') {
            // Calculate reaction time
            const reactionTime = Date.now() - startTime;
            gameState = 'finished';
            
            // TROLL MECHANIC: Add random delay to make user look slower
            const trollDelay = attempts > 1 ? Math.random() * 100 : 0;
            const displayTime = Math.floor(reactionTime + trollDelay);
            
            this.className = 'reaction-circle wait';
            this.textContent = `${displayTime}ms`;
            
            // Play sound based on reaction time
            if (displayTime < 200) {
                playSound('success');
            } else if (displayTime < 300) {
                playSound('coin');
            } else if (displayTime < 500) {
                playSound('pop');
            } else {
                playSound('womp');
            }
            
            // Troll messages based on time
            let message = '';
            if (displayTime < 200) {
                message = "Suspiciously fast... 🤔 (The game added delay)";
            } else if (displayTime < 300) {
                message = "Good! But the game made you look slower! 😏";
            } else if (displayTime < 500) {
                message = "Not bad! (Plus some added troll delay) 😈";
            } else {
                message = "Slow! And we added extra delay for fun! 🐌";
            }
            
            reactionMessage.textContent = message;
            
            // Update "best" time (but not really)
            if (!bestTime || displayTime < bestTime) {
                bestTime = displayTime;
                localStorage.setItem('bestReactionTime', bestTime);
                bestTimeDisplay.textContent = bestTime + 'ms';
                
                if (attempts > 5) {
                    showNotification("New best time! (With hidden troll delays added) ⚡", 'winner');
                }
            }
            
            // Start next round
            setTimeout(() => {
                if (attempts >= 5) {
                    reactionMessage.textContent = 
                        "Game over! Your times included random delays for trolling! 😂";
                    showNotification("Reaction game trolled you with hidden delays! ⚡", 'winner');
                } else {
                    startRound();
                }
            }, 3000);
        }
    };
    
    // Start first round
    startRound();
}

// Make showGame function global
window.showGame = showGame;
