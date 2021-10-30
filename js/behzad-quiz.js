const myQuestions = [
  {
    question: "با کدام دستور شاخه فعلی را عوض کنیم؟",
    answers: {
      a: "git checkout",
      b: "git branch",
      c: "git clone",
      d: "git change"
    },
    correctAnswer: "a"
  },
  {
    question: "با کدام دستور شاخه جدید می سازیم؟",
    answers: {
      a: "git checkout",
      b: "git branch",
      c: "git clone",
      d: "git change"
    },
    correctAnswer: "b"
  },
  {
    question: "برای حذف شاخه از کدام دستور استفاده می شود؟",
    answers: {
      a: "git branch -d",
      b: "git checkout -b",
      c: "git delete",
      d: "git remove"
    },
    correctAnswer: "a"
  }
];

function buildQuiz(){
  const output = [];
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<label dir="ltr">
            <input type="radio" name="question${questionNumber}" value="${letter}" >
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
    quizContainer.innerHTML = output.join('');
    jakhali()
}
function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'green';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  jakhaliAnswer=document.getElementById('jakhali')
  if(jakhaliAnswer.value==='بی نهایت'){
    numCorrect++;
    jakhaliAnswer.style='background-color: green'
  }else{
    jakhaliAnswer.style='background-color: red'
  }
  Ql=4
    resultsContainer.innerHTML = `شما به ${numCorrect} سوال از ${Ql} جواب درست دادید`;
}

function jakhali(){
const output = [];
output.push(
  `<label dir="ltr" class="question">
      در گیت می توانیم <input type="text" name="question4" id='jakhali'> شاخه درست کنیم      
  </label>`
);
pre=quizContainer.innerHTML
quizContainer.innerHTML=pre+output.join('')
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



buildQuiz();

submitButton.addEventListener('click', showResults);
