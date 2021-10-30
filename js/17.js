
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

      answerContainers[questionNumber].style.color = 'green';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  blankSpaceAnswer = document.getElementById('blankSpace')
  if(blankSpaceAnswer.value === 'افقی و عمودی'){
    numCorrect++;
    blankSpaceAnswer.style = 'background-color: green'
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
        اگر تصویر پس زمینه کوچکتر از عنصر باشد، تصویر به صورت <input type="text" name="question4" id='blankSpace' dir="rtl"> تکرار می شود تا زمانی که به انتهای عنصر برسد      
    </label><br><br><br><br>`
  );
  previous = quizContainer.innerHTML;
  quizContainer.innerHTML= output2.join('') + previous;
}

const myQuestions = [
  {
    question: "اگر سایز بک گراند از عنصر کوچک تر باشد، راهکار آن چیست؟",
    answers: {
      a: "به اندازه فرزند کوچک می شود",
      b: "به اندازه والد بزرگ می شود",
      c: "تکرار می شود",
      d: "هیچ کدام"
    },
    correctAnswer: "c"
  },
  {
    question: "برای اینکه بخواهیم تصویر پشت زمینه(background) کل صفحه را بپوشاند باید چه کار کنیم؟",
    answers: {
      a: "background-image: 100px 100px",
      b: "background-image: 100 100",
      c: "background-image: 100vh 100vh",
      d: "background-image: 100% 100%"
    },
    correctAnswer: "d"
  },
  {
    question: "img-map چیست؟",
    answers: {
      a: "تصویری است که ناحیه قابل کلیک دارد",
      b: "همان تصویر است با قابلیت های بیشتر",
      c: "همان تگ picture است",
      d: "هیچکدام درست نمی باشد"
    },
    correctAnswer: "a"
  }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Kick things off
buildQuiz();
// Event listeners
submitButton.addEventListener('click', showResults);