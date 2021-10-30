const questions = document.querySelectorAll("#q");
const inputs = document.querySelectorAll("#inputQ");
const showAnswerBtns = document.querySelectorAll("#showAnswerBtn");

const answers = ["answer1", "answer2"];

showAnswerBtns.forEach((element, index) => {
  element.addEventListener("click", () => {
    inputs[index].value = answers[index];
  });
});



function buildQuiz(){
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div><br>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
  createBlankSpace();
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

      answerContainers[questionNumber].style.color = 'blue';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  blankSpaceAnswer = document.getElementById('blankSpace')
  if(blankSpaceAnswer.value === 'افقی و عمودی'){
    numCorrect++;
    blankSpaceAnswer.style = 'background-color: blue'
  }
  else {
    blankSpaceAnswer.style = 'background-color: red'
  }

  resultsContainer.innerHTML = `شما به ${numCorrect} سوال از ${myQuestions.length + 1} جواب درست دادید`;
}

function createBlankSpace(){
  const output2 = [];
  output2.push(
    `<br><br><label dir="ltr" class="question">
     <input type="text" name="question4" id='blankSpace' dir="rtl">     
    </label><br><br><br><br>`
  );
  previous = quizContainer.innerHTML;
  quizContainer.innerHTML= output2.join('') + previous;
}

const myQuestions = [
  {
    question: "کدام یک از گزینه های زیر درست است؟",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "هیچ کدام"
    },
    correctAnswer: "c"
  },
  
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


buildQuiz();

submitButton.addEventListener('click', showResults);

