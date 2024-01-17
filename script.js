const questions = [
   {
      question: "Javascript is an ______ language1?",
      answers: [
         { text: "Object-Oriented", correct: true },
         { text: "Object-Based", correct: false },
         { text: "Procedural", correct: false },
         { text: "None of the above", correct: false },
      ]
   },
   {
      question: "Which of the following keywords is used to define a variable in Javascript?",
      answers: [
         { text: "var", correct: false },
         { text: "let", correct: false },
         { text: "Both var & let", correct: true },
         { text: "None of the above", correct: false },
      ]
   },
   {
      question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
      answers: [
         { text: "Throws an error", correct: false },
         { text: "Ignores the statements", correct: true },
         { text: "Gives a warning", correct: false },
         { text: "None of the above", correct: false },
      ]
   },

   {
      question: "Which of the following methods is used to access HTML elements using Javascript?",
      answers: [
         { text: "getElementById()", correct: false },
         { text: "getElementsByClassName()", correct: false },
         { text: "Both", correct: true },
         { text: "None of the above ", correct: false },
      ]
   },
   {
      question: "What keyword is used to check whether a given property is valid or not?",
      answers: [
         { text: "is in", correct: false },
         { text: "exists", correct: false },
         { text: "in", correct: true },
         { text: "lies", correct: false },
      ]
   },
   {
      question: "How to stop an interval timer in Javascript?",
      answers: [
         { text: "clearInterval", correct: true },
         { text: "clearTimer", correct: false },
         { text: "intervalOver", correct: false },
         { text: "None of the above", correct: false },
      ]
   },
]


const questionElem = document.getElementById("question");
const ansButtonElem = document.getElementById("ans_btn");
const nextButtonElem = document.getElementById("btn_next");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
   currentQuestionIndex = 0;
   score = 0;
   nextButtonElem.innerHTML = "Next";
   showQuestion();
}

function showQuestion() {
   reset();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElem.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("ansBtn");
      ansButtonElem.appendChild(button);
      if (answer.correct) {
         button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", optionSelect)
   })



}


function reset() {
   nextButtonElem.style.display = "none";
   while (ansButtonElem.firstChild) {
      ansButtonElem.removeChild(ansButtonElem.firstChild)
   }
}


function optionSelect(e) {
   const btnSelected = e.target;
   const isCorrect = btnSelected.dataset.correct === "true";
   if (isCorrect) {
      btnSelected.classList.add("correct")
      score++;
   } else {
      btnSelected.classList.add("incorrect")
   }
   Array.from(ansButtonElem.children).forEach((button) => {
      if (button.dataset.correct === "true") {
         button.classList.add("correct");
      }
      button.disabled = true;
   })
   nextButtonElem.style.display = "block"

}

function showScore() {
   reset();
   questionElem.innerHTML = `Your score is ${score} out of ${questions.length}`;
   nextButtonElem.innerHTML = "Play Again";
   nextButtonElem.style.display = "block"

}


function controlNextButton() {
   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
      showQuestion();
   } else {
      showScore();
   }

}

nextButtonElem.addEventListener("click", () => {
   if (currentQuestionIndex < questions.length) {
      controlNextButton();
   } else {
      startQuiz()
   }
})

startQuiz();






//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////
//////////////////



