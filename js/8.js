const myQuestions = [
    {
        question: "اچ تی ام ل مخفف چیست؟",
        answers: {
            a: 'hypertext styling language',
            b: 'hypertext markup language',
            c: 'hypertext transport protocol'
        },
        correctAnswer: 'b'
    },
    {
        question: "گیت جیست",
        answers: {
            a: 'زبان برنامه نویسی',
            b: 'نام فریم ورک',
            c: 'ورژن کنترل'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;


        for(var i=0; i<questions.length; i++){


            answers = [];
            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');




        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){


            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){

                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            }

            else{

                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}