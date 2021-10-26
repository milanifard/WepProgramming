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
      resultsContainer.innerHTML = `شما به ${numCorrect} سوال از ${myQuestions.length} جواب درست دادید`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



buildQuiz();

submitButton.addEventListener('click', showResults);
