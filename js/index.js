var quizData = [
    {
        question: "کدام یک جز شی های dom است؟",
        a: "پنجره",
        b: "سند",
        c: "تاریخچه",
        d: "همه موارد",
        correct: "d"
    },
    {
        question: "وظیفه اصلی bom چیست؟",
        a: "مدیریت پنجره های مرورگر",
        b: "فعال کردن ارتباط بین پنجره ها",
        c: "هر دو",
        d: "هیچکدام",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz')
const longQuiz = document.getElementById('long-quiz')
const answerElements = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitButton = document.getElementById('submit')
const submit1Button = document.getElementById('submit1')
const question = document.getElementById('long-question-text')
let currentQuiz = 0
let score = 0

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false))
}

const getSelected = () => {
    let answer
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id
    })
    return answer
}

const loadQuiz = () => {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionElement.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

loadQuiz()
submitButton.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++
        currentQuiz++
        if (currentQuiz < quizData.length) loadQuiz()
        else {
            quiz.innerHTML = `  
           <h2>شما به ${score}/${quizData.length} سوال به درستی پاسخ داده اید</h2>  
           <button onclick="history.go(0)" class="btn btn-success">آزمون مجدد</button>  
         `
        }
    }
})

submit1Button.addEventListener('click', () => {
    console.log(question.value)
    longQuiz.innerHTML = ''
    if (question.value === 'xxx') {
        longQuiz.innerHTML = `  
           <h2 class="text-success">صحیح بود</h2>  
           <button onclick="history.go(0)" class="btn btn-success">آزمون مجدد</button>  
         `
    } else {
        longQuiz.innerHTML = `  
           <h2 class="text-danger">غلط بود</h2>  
           <button onclick="history.go(0)" class="btn btn-success">آزمون مجدد</button>  
         `
    }
})

