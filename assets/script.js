// QUESTIONS
var codingQuestions = [
  {
    question:
      "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?",
    choices: ["Scope", "Output Level", "Range", "Restriction"],
    answer: "Scope",
  },

  {
    question:
      "What is the element used and hidden in code that explains things and makes the content more readable?",
    choices: ["Quotations", "Notes", "Comments", "Comparisons"],
    answer: "Comments",
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    choices: ["Numbers", "Strings", "Booleans", "All of the above"],
    answer: "All of the above",
  },
  {
    question:
      "What is considered to be the most popular programming language in the world?",
    choices: ["HTML", "Javascript", "Internet Explorer", "CSS"],
    answer: "Javascript",
  },
  {
    question: "What tag is used to define an unordered list that is bulleted?",
    choices: ["ul", "p", "li", "ol"],
    answer: "ul",
  },
];

// VARIABLES
let question = document.getElementById("question");
let choiceText = document.getElementsByClassName("choice-text");
let incorrectAnswer = document.getElementById("incorrect");
let startQuiz = document.getElementById("btn");
const choices = Array.from(document.getElementsByClassName("choice-text"));

questionIndex = 0;

// this function displays the proper text in each page element as the user navigates through all of the questions
function getNewQuestion() {
  let currentQuestion = codingQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;
  choiceA.innerHTML = currentQuestion.choices[0];
  choiceB.innerHTML = currentQuestion.choices[1];
  choiceC.innerHTML = currentQuestion.choices[2];
  choiceD.innerHTML = currentQuestion.choices[3];
}

getNewQuestion();

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const selectedChoice = e.target.innerHTML;
    let currentQuestion = codingQuestions[questionIndex];
    if (questionIndex === 4) {
      window.location.href = "./endgame.html";
    } else if (selectedChoice === currentQuestion.answer) {
      document.getElementById("incorrect").textContent = "";
      var incorrectChoice = document.createElement("h3");
      incorrectChoice.textContent = "Correct!";
      incorrectAnswer.appendChild(incorrectChoice);
      questionIndex++;
      getNewQuestion();
    } else {
      document.getElementById("incorrect").textContent = "";
      var incorrectChoice = document.createElement("h3");
      incorrectChoice.textContent = "Wrong!";
      incorrectAnswer.appendChild(incorrectChoice);
      secondsLeft -= 10;
    }

    resetMessage();
  });
});

function resetMessage() {
  setTimeout(function (params) {
    document.getElementById("incorrect").textContent = "";
  }, 1000);
}

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 76;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    endGame(timerInterval);
  }, 1000);
}
function endGame(timerInterval) {
  if (secondsLeft <= 0) {
    clearInterval(timerInterval);
    sendMessage();
    localStorage.currentScore = secondsLeft;
    window.location.href = "./endgame.html";
  }
}

setTime();
