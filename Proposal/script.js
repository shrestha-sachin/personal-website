const questions = [
    "Would you like to go on a romantic dinner? 🍷🌹",
    "Can I hold your hand forever? 🤝💕",
    "Will you be my forever valentine? 💌",
    "Do you promise to stay by my side? 👫🌈",
    "Will you accept my love? 💘"
];

let currentQuestion = 0;
let userName = "";

function startRomance() {
    userName = document.getElementById('nameInput').value.trim();
    if (!userName) {
        alert("Please enter your beautiful name first! 😊");
        return;
    }
    
    document.getElementById('nameSection').classList.add('hidden');
    const questionSection = document.getElementById('questionSection');
    questionSection.classList.remove('hidden');
    showNextQuestion();
}

function showNextQuestion() {
    if (currentQuestion >= questions.length) {
        showFinalCelebration();
        return;
    }
    
    document.getElementById('questionText').innerHTML = 
        `${userName}, ${questions[currentQuestion]}`;
}

function handleYes() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showNextQuestion();
    } else {
        showFinalCelebration();
    }
}

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function showFinalCelebration() {
    document.getElementById('questionSection').classList.add('hidden');
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.classList.remove('hidden');
    
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5', '#002bff', '#7a00ff', '#ff00c8']
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5', '#002bff', '#7a00ff', '#ff00c8']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
