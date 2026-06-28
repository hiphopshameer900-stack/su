document.addEventListener("DOMContentLoaded", () => {
    runLoadingScreen();
    setupSparkleClicks();
    generateFloatingHearts();
});

// Helper Scene Toggle Manager
function switchScene(currentId, nextId) {
    document.getElementById(currentId).classList.remove("active");
    document.getElementById(nextId).classList.add("active");
}

// Sparkle Burst Click Effect Module
function setupSparkleClicks() {
    const layer = document.getElementById("sparkle-layer");
    window.addEventListener("click", (e) => {
        for (let i = 0; i < 8; i++) {
            const part = document.createElement("div");
            part.className = "sparkle";
            part.style.top = e.clientY + "px";
            part.style.left = e.clientX + "px";
            
            const mx = (Math.random() - 0.5) * 100;
            const my = (Math.random() - 0.5) * 100;
            part.style.setProperty('--mx', `${mx}px`);
            part.style.setProperty('--my', `${my}px`);
            
            layer.appendChild(part);
            setTimeout(() => part.remove(), 800);
        }
    });
}

// Background Floating Hearts Animation Loop
function generateFloatingHearts() {
    const heartsList = ["❤️", "💖", "🌸", "💕"];
    setInterval(() => {
        const heartEl = document.createElement("div");
        heartEl.className = "bg-heart";
        heartEl.innerText = heartsList[Math.floor(Math.random() * heartsList.length)];
        heartEl.style.setProperty('--left', Math.random() * 100 + "%");
        heartEl.style.setProperty('--size', (Math.random() * 20 + 15) + "px");
        heartEl.style.setProperty('--duration', (Math.random() * 4 + 6) + "s");
        document.body.appendChild(heartEl);
        setTimeout(() => heartEl.remove(), 10000);
    }, 450);
}

// 1. Interactive Custom Loading Screen sequence
function runLoadingScreen() {
    const progress = document.getElementById("progress");
    const counter = document.getElementById("counter");
    const loadingText = document.getElementById("loading-text");
    let count = 0;
    
    const interval = setInterval(() => {
        count++;
        progress.style.width = count + "%";
        counter.innerText = count + "%";

        if (count === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingText.style.color = "#ff4d6d";
                loadingText.innerText = "Found 1 precious person... ❤️ Suchitra (Suchi Ma)";
                counter.style.display = "none";
                progress.parentElement.style.display = "none";
                
                setTimeout(() => {
                    switchScene("loading-screen", "scene-1");
                    startScene1();
                }, 2500);
            }, 500);
        }
    }, 35);
}

// Scene 1: Handwriting Question Engine
function startScene1() {
    const textElement = document.getElementById("scene1-text");
    const message = "Ammu... Can I borrow a few minutes of your heart? ❤️";
    let index = 0;
    
    function type() {
        if (index < message.length) {
            textElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, 75);
        } else {
            document.getElementById("start-button").classList.add("animation-heart");
        }
    }
    setTimeout(type, 400);
}

// Scene 1 Interaction Zoom Effect
document.getElementById("start-button").addEventListener("click", () => {
    const heart = document.getElementById("start-button");
    heart.classList.remove("animation-heart");
    heart.style.transform = "scale(8)";
    heart.style.opacity = "0";
    heart.style.transition = "all 1.3s cubic-bezier(0.4, 0, 0.2, 1)";
    setTimeout(() => { switchScene("scene-1", "scene-2"); }, 1100);
});

// Scene 2 Path Transition
document.getElementById("to-scene3").addEventListener("click", () => {
    switchScene("scene-2", "scene-3");
    startScene3();
});

// Scene 3: Rain Overlay Generator & Kintsugi Healing System
function startScene3() {
    const textElement = document.getElementById("scene3-text");
    const heartElement = document.getElementById("repair-heart");
    const nextBtn = document.getElementById("to-scene4");
    const rainLayer = document.getElementById("rain-layer");
    
    for (let i = 0; i < 40; i++) {
        let drop = document.createElement("div");
        drop.className = "drop";
        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDuration = (Math.random() * 1 + 0.8) + "s";
        drop.style.animationDelay = Math.random() * 2 + "s";
        rainLayer.appendChild(drop);
    }

    let msg1 = "I know I cracked your heart, Ammu... ";
    let idx = 0;

    function type1() {
        if (idx < msg1.length) {
            textElement.innerHTML += msg1.charAt(idx); idx++; setTimeout(type1, 65);
        } else {
            setTimeout(() => {
                heartElement.innerText = "❤️";
                heartElement.classList.add("healed");
                rainLayer.style.opacity = "0.2";
                rainLayer.style.transition = "opacity 2s";
                
                setTimeout(() => {
                    textElement.innerHTML = "";
                    let msg2 = "I can't erase the cracks, my Thango... but I'll spend every day filling them with love, care, and trust.";
                    let idx2 = 0;
                    function type2() {
                        if (idx2 < msg2.length) {
                            textElement.innerHTML += msg2.charAt(idx2); idx2++; setTimeout(type2, 55);
                        } else { nextBtn.classList.remove("hidden"); }
                    }
                    type2();
                }, 1400);
            }, 1200);
        }
    }
    type1();
}

// Scene 3 Path Transition
document.getElementById("to-scene4").addEventListener("click", () => {
    switchScene("scene-3", "scene-4");
});

// Scene 4: Flower Garden Assembly Matrix
const flowerData = ["❤️", "🌷", "🌹", "🌸", "🌼"];
function startScene4() {
    const buttons = document.querySelectorAll(".promise-btn");
    const gardenBed = document.getElementById("garden-bed");
    const gardenMsg = document.getElementById("garden-msg");
    const nextBtn = document.getElementById("to-scene5");
    let clicked = 0;

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            btn.classList.add("clicked");
            const fl = document.createElement("span");
            fl.innerText = flowerData[index];
            gardenBed.appendChild(fl);
            
            clicked++;
            if (clicked === buttons.length) {
                setTimeout(() => {
                    gardenMsg.innerText = "Love grows where it's cared for, my Chello. 🌸";
                    nextBtn.classList.remove("hidden");
                }, 800);
            }
        });
    });
}
startScene4();

// Scene 4 Path Transition
document.getElementById("to-scene5").addEventListener("click", () => {
    switchScene("scene-4", "scene-5");
    startScene5();
});

// Scene 5: Flying Butterfly Interaction System
const wishes = ["Smile, Thango... 💖", "You're my favorite person, Suchi Ma. ✨", "I still fall in love with you every day, Ammu. 🌅"];
function startScene5() {
    const area = document.getElementById("butterfly-area");
    const popup = document.getElementById("wish-popup");
    const nextBtn = document.getElementById("to-scene6");
    let caught = 0;

    for (let i = 0; i < 3; i++) {
        let b = document.createElement("div");
        b.className = "butterfly";
        b.innerText = "🦋";
        b.style.top = Math.random() * 50 + 20 + "%";
        b.style.left = Math.random() * 60 + 20 + "%";
        b.style.animationDelay = (i * 1.5) + "s";
        
        b.addEventListener("click", () => {
            popup.innerText = wishes[i];
            b.style.transform = "scale(0)";
            b.style.transition = "transform 0.4s";
            setTimeout(() => b.remove(), 400);
            
            caught++;
            if (caught === 3) { nextBtn.classList.remove("hidden"); }
        });
        area.appendChild(b);
    }
}

// Scene 5 Path Transition
document.getElementById("to-scene6").addEventListener("click", () => {
    switchScene("scene-5", "scene-6");
});

// Scene 6: Path forward Sunrise Transition Engine
document.getElementById("walk-forward-btn").addEventListener("click", () => {
    document.getElementById("sky-bg").classList.add("sunrise");
    document.getElementById("galaxy").style.background = "linear-gradient(to top, #ffccd5 0%, #ff4d6d 40%, #2c0c4d 100%)";
    document.getElementById("scene6-text").innerText = "🌅 Sunrise breaks. The stars fade away. A beautiful new day begins for us, Suchi Ma.";
    document.getElementById("walk-forward-btn").style.display = "none";
    setTimeout(() => { document.getElementById("to-scene7").classList.remove("hidden"); }, 2500);
});

// Scene 6 Path Transition
document.getElementById("to-scene7").addEventListener("click", () => {
    switchScene("scene-6", "scene-7");
});

// Scene 7: Open Envelope & Handwriting Real-Time Letter Renderer
document.getElementById("envelope").addEventListener("click", () => {
    document.getElementById("envelope-wrapper").style.display = "none";
    document.getElementById("letter-box").classList.remove("hidden");
    
    const letterText = document.getElementById("letter-text");
    const fullLetter = "Dear Ammu,\n\nYou are my home, my comfort, and my entire world. Every single heartbeat of mine belongs completely to you. Thank you for being you, my Chello.\n\nForever Yours,\nShameer";
    let i = 0;
    
    function writeLetter() {
        if (i < fullLetter.length) {
            if (fullLetter.charAt(i) === "\n") {
                letterText.innerHTML += "<br>";
            } else {
                letterText.innerHTML += fullLetter.charAt(i);
            }
            i++;
            setTimeout(writeLetter, 45);
        } else {
            document.getElementById("to-final").classList.remove("hidden");
        }
    }
    setTimeout(writeLetter, 500);
});

// Scene 7 Path Transition
document.getElementById("to-final").addEventListener("click", () => {
    switchScene("scene-7", "scene-final");
});

// Final Scene: Shooting Star & Final Promise Layout Mechanics
document.getElementById("wish-btn").addEventListener("click", () => {
    document.getElementById("wish-btn").style.display = "none";
    const star = document.getElementById("sstar");
    star.classList.add("fire");
    
    setTimeout(() => {
        document.getElementById("final-text").style.display = "none";
        document.getElementById("final-hearts").classList.remove("hidden");
        
        const closing = document.getElementById("closing-msg");
        let finalMessage = "No matter how many storms we face...\n\nMy favorite destination will always be you, Suchi Ma. ❤️";
        let fi = 0;
        
        function typeFinal() {
            if (fi < finalMessage.length) {
                if (finalMessage.charAt(fi) === "\n") {
                    closing.innerHTML += "<br>";
                } else {
                    closing.innerHTML += finalMessage.charAt(fi);
                }
                fi++;
                setTimeout(typeFinal, 60);
            }
        }
        typeFinal();
    }, 1500);
});
