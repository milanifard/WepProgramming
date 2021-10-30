const quizData = [
  {
    question: "در جاوا اسکریپت کدام شرط برقرار نیست",
    a: "null == undefined",
    b: "''==0",
    c: "''===0",
    d: "1==true",
    correct: "b",
  },
  {
    question: "کدام گزینه ternary را درست بیان کرده؟",
    a: "a ?? 0",
    b: "a ? b : c",
    c: "a : 0",
    d: "هیچ کدام",
    correct: "b",
  },
  {
    question: "کدام گزینه ساختار شرطی را در جاوا اسکریپت درست بیان کرده",
    a: "{}if(expression)",
    b: ":if expression",
    c: "{}if expression",
    d: ":if (expression)",
    correct: "a",
  },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `  
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
      <button onclick="history.go(0)" class="btn btn-primary">Play Again</button>  
    `; // location.reload() won't work in CodePen for security reasons;
    }
  }
});

var tooltipInput = document.getElementById("tooltipInput");

var btnSubmitToltip = document.getElementById("btnSubmitToltip");

btnSubmitToltip.addEventListener("click", function () {
  console.log("value :");
  console.log(tooltipInput.value);
  if (tooltipInput.value != "") {
    if (tooltipInput.value == "Hello") {
      alert("Correct ... ");
    } else {
      alert("Wrong ... ");
    }
  }
});
