const questions = [
    {
        question: "Quanto é 2 + 2?",
        answers: ["3", "6", "4", "22"],
        correct: 2
    },
    {
        question: "Quanto é 5 x 6?",
        answers: ["25", "30", "35", "40"],
        correct: 1
    },
    {
        question: "Quanto é 12 x 8?",
        answers: ["104", "92", "96", "88"],
        correct: 2
    },
    {
        question: "Se 3 metros de tecido custam R$ 24, quanto custam 5 metros?",
        answers: ["R$ 40", "R$ 35", "R$ 30", "R$ 45"],
        correct: 0
    },
    {
        question: "Se 4 metros de tecido custam R$ 32, quanto custa 10 metros?",
        answers: ["R$ 87", "R$ 75", "R$ 85", "R$ 80"],
        correct: 3
    },
    {
        question: "Um celular que custava R$ 1.200,00 teve um desconto de 15%. Qual é o valor final do celular após o desconto?",
        answers: ["R$1110", "R$980", "R$1000", "R$1020"],
        correct: 3
    },
    {
        question: "Se um carro viaja a 80 km/h, quanto tempo ele levaria para percorrer 160 km?",
        answers: ["2 horas", "3 horas", "1 hora", "4 horas"],
        correct: 0
    },
    {
        question: "Calcule a área de um triângulo que tem base 10 cm e altura 6 cm!",
        answers: ["15cm²", "20cm²", "30cm²", "25cm²"],
        correct: 2
    },
    {
        question: "Qual a área de um círculo com raio 7 cm? (Use pi = 3.14)",
        answers: ["153,86 cm²", "154,98 cm²", "143,28 cm²", "145,72 cm²"],
        correct: 0
    },
    {
        question: "Qual o valor de X para: 3X - 15 = 0?",
        answers: ["X = 6", "X = 15", "X = 10", "X = 5"],
        correct: 3
    },
    {
        question: "Qual o valor de X para: 2(X - 3) = 10?",
        answers: ["X = 4", "X = 8", "X = 5", "X = 7"],
        correct: 1
    },
    {
        question: "Qual o valor de X para: 4X + 10 = 2X + 30?",
        answers: ["X = 10", "X = 15", "X = 20", "X = 5"],
        correct: 0
    },
    {
        question: "Qual é o valor de X para:(2x + 3)(x + 1)?",
        answers: ["X = 7", "X = -5", "X = 3", "X = -1"],
        correct: 3
    },
    {
        question: "Qual o valor de X para: X² + 4X + 4?",
        answers: ["X = -4", "X = 3", "X = -2", "X = 5"],
        correct: 2
    },
    {
        question: "Qual é o valor de X:",
        imagem: "tri 1.jpeg",
        answers: ["X = 8", "X = 9", "X = 12", "X = 11"],
        correct: 2
    },
    {
        question: "Qual o valor de X para: 2X² - 72 = 0?",
        answers: ["X = 6", "X = -7", "X = 9", "X = -5"],
        correct: 0
    },
        {
        question: "Qual o valor de x nos triângulos a seguir?",
        imagem: "tri 2.jpeg",
        answers: ["X = 56", "X = 48", "X = 40", "X = 52"],
        correct: 1
    },
    {
        question: "Qual o valor de X para: 5X² - 100 = X² + 44?",
        answers: ["X = 10", "X = 6", "X = 5", "X = 7"],
        correct: 1
    },
    {
        question: "Quais os valores de X para: X² - 9X + 18?",
        answers: ["X = 2 ou 1", "X = 0 ou 2", "X = 5 ou 10", "X = 6 ou 3"],
        correct: 3
    },
    {
        question: "Descubra o valor de X para:",
        imagem: "tri 3.jpeg",
        answers: ["X = 12", "X = 14", "X = 10", "X = 8"],
        correct: 2
    }
];

let currentQuestion = 0;

function startGame() {
    document.getElementById("startScreen").style.display = "none"; // Esconde a tela inicial
    document.getElementById("gameScreen").style.display = "block"; // Mostra a tela do jogo
    document.getElementById("quizTitle").style.display = "none"; // Esconde o título da página de jogo
    loadQuestion(); // Carrega a primeira pergunta
}


function loadQuestion() {
    const questionBox = document.getElementById("questionBox");
    const questionText = document.getElementById("questionText");
    const questionImage = document.getElementById("questionImage");
    const answersDiv = document.getElementById("answers");

    const current = questions[currentQuestion];

    questionText.textContent = current.question;
    answersDiv.innerHTML = "";

    // Mostra imagem se houver
    if (current.imagem) {
        questionImage.src = current.imagem;
        questionImage.style.display = "block";
    } else {
        questionImage.style.display = "none";
    }

    current.answers.forEach((answer, index) => {
        let button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const buttons = document.querySelectorAll("#answers button");

    if (selectedIndex === questions[currentQuestion].correct) {
        buttons[selectedIndex].classList.add("correct");
        setTimeout(() => nextQuestion(), 250); // Avançar para a próxima questão após 250ms
    } else {
        // Se errar, redireciona para a página de Game Over
        window.location.href = "gameover.html"; // Sem o alerta
    }
}

// Função para carregar a próxima pergunta
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        // Atualiza o número da fase
        document.getElementById("faseNumero").textContent = currentQuestion + 1;
    } else {
window.location.href = "vitoria.html";
    }
}
function toggleExplanation() {
    const box = document.getElementById("explanationBox");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
