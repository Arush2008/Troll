// Troll Website JavaScript - All the fun happens here! 🎭

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
