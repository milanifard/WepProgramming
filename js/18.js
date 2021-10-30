var myQuestions = [
  {
    question:
      "کدام یک جزاگر فایلی modify شده باشد ولی تغییری در آن صورت نگرفته باشد با کدام یک از دستورات زیر میتوان متوجه آن شد؟",
    answers: {
      a: "git diff",
      b: "git commit",
      c: "git push",
      d: "git push",
    },
    correctAnswer: "b",
  },
  {
    question: "برای نمایش وضعیت موجود در گیت از کدام دستور استفاده میشود؟",
    answers: {
      a: "Git status",
      b: "Git add",
      c: "Git commit",
      d: "Git pull",
    },
    correctAnswer: "b",
  },

  {
    question: "کدام یک جز دستورات برگرداندن فایل از stage area نیست؟",
    answers: {
      a: "git add",
      b: "git restore",
      c: "git commit",
      d: "git push",
    },
    correctAnswer: "a",
  },
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {
      answers = [];

      for (letter in questions[i].answers) {
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll(".answers");

    var userAnswer = "";
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;

        answerContainers[i].style.color = "lightgreen";
      } else {
        answerContainers[i].style.color = "red";
      }
    }

    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
