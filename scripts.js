const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-btn');

const questions = [
    {
        question: "Você sente que precisa de mais energia durante o dia?",
        answers: [
            { text: "Sim", product: "Energy" },
            { text: "Não", product: null }
        ]
    },
    {
        question: "Você quer melhorar seu foco e concentração?",
        answers: [
            { text: "Sim", product: "Focus" },
            { text: "Não", product: null }
        ]
    },
    {
        question: "Você tem problemas para dormir?",
        answers: [
            { text: "Sim", product: "Sleep" },
            { text: "Não", product: null }
        ]
    },
    {
        question: "Você faz exercícios físicos regularmente?",
        answers: [
            { text: "Sim", product: "Energy" },
            { text: "Não", product: null }
        ]
    }
];

let currentQuestionIndex = 0;
let productScores = { "Energy": 0, "Focus": 0, "Sleep": 0 };

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function startGame() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    document.getElementById('question').innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.product) {
        productScores[answer.product]++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    const highestScore = Math.max(productScores["Energy"], productScores["Focus"], productScores["Sleep"]);
    let result;
    if (highestScore === productScores["Energy"]) {
        result = "Serenid Energy";
    } else if (highestScore === productScores["Focus"]) {
        result = "Serenid Focus";
    } else {
        result = "Melhorar a qualidade do sono";
    }
    resultText.innerText = `O produto mais adequado para você é: ${result}`;
}

function restartGame() {
    resultContainer.classList.add('hide');
    startButton.classList.remove('hide');
    currentQuestionIndex = 0;
    productScores = { "Energy": 0, "Focus": 0, "Sleep": 0 };
}
