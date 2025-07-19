// Troll Website JavaScript - All the fun happens here! 🎭
// Advanced trolling features for maximum confusion!

document.addEventListener('DOMContentLoaded', function() {
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
    
    // Get user's name for personalized trolling
    setTimeout(() => {
        getUserName();
    }, 5000);
});

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

// 2. Moving Button Prank
function initMovingButton() {
    const movingButton = document.getElementById('moving-button');
    const buttonMessage = document.getElementById('button-message');
    let clickCount = 0;
    
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
    
    movingButton.addEventListener('mouseenter', function() {
        const container = this.parentElement;
        const containerRect = container.getBoundingClientRect();
        
        // Random position within container
        const maxX = containerRect.width - this.offsetWidth;
        const maxY = containerRect.height - this.offsetHeight;
        
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        this.style.position = 'absolute';
        this.style.left = newX + 'px';
        this.style.top = newY + 'px';
        
        // Show troll message
        buttonMessage.textContent = messages[clickCount % messages.length];
        buttonMessage.classList.remove('hidden');
        clickCount++;
        
        // After 5 attempts, make button clickable
        if (clickCount >= 5) {
            setTimeout(() => {
                movingButton.style.position = 'static';
                movingButton.innerHTML = "Fine, you can click me now! 💰";
                movingButton.onclick = function() {
                    showFakeAlert();
                };
            }, 2000);
        }
    });
}

// 3. Fake Error Messages
function initFakeErrors() {
    const updateButton = document.getElementById('update-button');
    
    updateButton.addEventListener('click', function() {
        // Show fake blue screen
        document.getElementById('blue-screen').classList.remove('hidden');
        
        // Add sound effect (if browser supports it)
        playErrorSound();
    });
    
    // Close blue screen
    document.getElementById('close-blue-screen').addEventListener('click', function() {
        document.getElementById('blue-screen').classList.add('hidden');
    });
}

// 4. Disappearing Text
function initDisappearingText() {
    const disappearingText = document.getElementById('disappearing-text');
    
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
    
    trollForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input');
        const submitBtn = document.getElementById('form-submit');
        
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
    
    let clickCount = 0;
    
    brokenButton.addEventListener('click', function() {
        clickCount++;
        this.classList.add('shake');
        
        setTimeout(() => {
            this.classList.remove('shake');
        }, 500);
        
        if (clickCount >= 3) {
            brokenMessage.classList.remove('hidden');
            this.style.opacity = '0.5';
        }
    });
    
    fixButton.addEventListener('click', function() {
        brokenButton.textContent = 'Fixed! Now click me!';
        brokenButton.style.opacity = '1';
        brokenButton.style.background = '#27ae60';
        brokenMessage.classList.add('hidden');
        
        // But it breaks again after clicking
        brokenButton.onclick = function() {
            this.textContent = 'Oops! Broke again! 🔧';
            this.style.background = '#e74c3c';
            setTimeout(() => {
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
        
        setTimeout(() => {
            reverseText.textContent = 'Hello, I am trolling you. You are on the track!';
            reverseHeading.textContent = 'Secret Message Revealed! 🕵️';
            this.textContent = 'Encode Again';
            
            this.onclick = function() {
                reverseText.textContent = '!kcart eht no era uoY .uoy gnitroll ma I ,olleH';
                reverseHeading.textContent = 'Amazing Secret Message';
                this.textContent = 'Decode Secret Message';
                this.onclick = arguments.callee.outer; // Reset to original function
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

// Helper Functions
function showFakeAlert() {
    document.getElementById('fake-alert').classList.remove('hidden');
    
    document.getElementById('close-alert').addEventListener('click', function() {
        document.getElementById('fake-alert').classList.add('hidden');
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
    
    container.appendChild(notification);
    
    // Auto-remove after 5 seconds or on click
    const removeNotification = () => {
        if (container.contains(notification)) {
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
