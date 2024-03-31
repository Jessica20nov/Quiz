const questions = [
    {
        question: "Onde fica Machu Picchu?",
        options: ["Bolívia", "Colômbia", "Peru", "Índia"],
        answer: "Peru",
        answeredCorrectly: false   
    },
    {
        question: "De que peixe vem o caviar?",
        options: ["Esturjão", "Badejo", "Truta", "Salmão"],
        answer: "Esturjão",
        answeredCorrectly: false
    },
    {
        question: "Qual filme teve a maior bilheteria de 2023?",
        options: ["John Wick 4", "Barbie", "Openheimer", "Super Mario Bros"],
        answer: "Barbie",
        answeredCorrectly: false
    },
    {
        question: "Qual o maior osso do corpo humano?",
        options: ["Tíbia", "Úmero", "Fíbula", "Fêmur"],
        answer: "Fêmur",
        answeredCorrectly: false
    },
    {
        question: "Quem pintou o quadro da Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Michelangelo", "Vicent Van Gogh"],
        answer: "Leonardo da Vinci",
        answeredCorrectly: false
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const scoreElement = document.getElementById("score-value");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = function() {
            checkAnswer(option, button);
        }
        optionsElement.appendChild(button);
    });

    scoreElement.textContent = score;
}

function checkAnswer(selectedOption, button) {
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        button.classList.add("correct-answer");
        if (!questions[currentQuestion].answeredCorrectly) {
            score++;
            button.style.backgroundColor = 'lightgreen';
            document.getElementById("score-value").textContent = score;
            questions[currentQuestion].answeredCorrectly = true;
        }
    } else {
        button.classList.add("incorrect-answer");
        if (questions[currentQuestion].answeredCorrectly) {
            score--;
            document.getElementById("score-value").textContent = score;
            questions[currentQuestion].answeredCorrectly = false;
        }
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Fim do quiz. Sua pontuação final é: " + score);
        location.reload();
    }
}
window.onload = loadQuestion;
