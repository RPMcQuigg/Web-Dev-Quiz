document.addEventListener("DOMContentLoaded", function () {
    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "Hyperlink and Text Markup Language"],
            correctAnswer: "A"
        },
        {
            question: "What does API stand for?",
            options: ["Application programming Information", "Application programming interface", "Advanced programming interface"],
            correctAnswer: "B"
        },
        {
            question: "What Third Party API is NOT loaded in to application as a stylesheets?",
            options: ["Bootstrap", "JQuery", "JQuery UI"],
        },
        {
            question: "What is a cloud based system is used to store branches of and applications code called?",
            options: ["Coding Clouds", "Repository", "Retainer"],
            correctAnswer: "B"
        },
        {
            question: "To retrieve a single branch of code from a repo what Git command would you use",
            options: ["Git Push", "Git Fetch", "Git Pull"],
            correctAnswer: "c"
        }
    ];

    const startButton = document.getElementById("start-button");
    const nextButton = document.getElementById("next-button");
    const retakeButton = document.getElementById("retake-button");
    const highScoreButton = document.getElementById("high-score-button");
    const finalScoreElement = document.getElementById("final-score");

    startButton.addEventListener("click", function () {
        document.querySelector(".start-page").style.display = "none";
        document.querySelector(".question-page").style.display = "block";
        displayQuestion(currentQuestionIndex);
    });

    nextButton.addEventListener("click", function () {
        const selectedOption = document.querySelector(`input[name='q${currentQuestionIndex + 1}']:checked`);
        if (selectedOption) {
            if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion(currentQuestionIndex);
            } else {
                showScorePage();
            }
        }
    });

    retakeButton.addEventListener("click", function () {
        currentQuestionIndex = 0;
        score = 0;
        document.querySelector(".score-page").style.display = "none";
        document.querySelector(".start-page").style.display = "block";
    });

    highScoreButton.addEventListener("click", function () {
        
        alert("Score added to High Score!");
    });

    function displayQuestion(index) {
        const questionPages = document.querySelectorAll(".question-page");
        questionPages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });

        const questionPage = document.querySelector(".question-page");
        const question = questions[index];
        questionPage.querySelector("h2").textContent = `Question ${index + 1}`;
        questionPage.querySelector("p").textContent = question.question;
        const optionsContainer = questionPage.querySelector(".options-container");
        optionsContainer.innerHTML = "";
        question.options.forEach((option, i) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${index + 1}`;
            input.value = String.fromCharCode(65 + i);
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${option}`));
            optionsContainer.appendChild(label);
            optionsContainer.appendChild(document.createElement("br"));
        });
    }

    function showScorePage() {
        document.querySelector(".question-page").style.display = "none";
        document.querySelector(".score-page").style.display = "block";
        finalScoreElement.textContent = score;
    }
});
