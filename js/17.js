(function(){
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
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
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
        question: "کدام یک از گزینه های زیر درست است؟",
        answers: {
          a: "همیشه یک عنصر img را به عنوان فرزند عنصر picture باید قرار داد",
          b: "همیشه یک عنصر picture را به عنوان فرزند عنصر img باید قرار داد",
          c: "هیچکدام",
          d: " گزینه یک و دو درست است"
        },
        correctAnswer: "b"
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
      },
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();