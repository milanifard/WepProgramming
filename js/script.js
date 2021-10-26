const quizData = [
  {
    question: 'برای اضافه کردن فایلی به مخزن کد از کدام دستور استفاده می شود؟',
    a: 'git add filename',
    b: 'git merge branchname',
    c: 'git fetch',
    d: 'git push origin master',
    correct: 'a',
  },
  {
    question: 'برای بررسی وضعیت فایل هایی که تغییر داشته اند از کدام دستور استفاده می شود؟',
    a: 'git status',
    b: 'git ls-files',
    c: 'git ls-remote',
    d: 'git log --oneline',
    correct: 'a',
  },
  {
    question: 'برای افزودن تمام فایل های تغییر داشته به مخزن کد از کدام دستور زیر استفاده می شود؟',
    a: 'git merge branchname',
    b: 'git config --global user.name "username"',
    c: 'git add .',
    d: 'git clone remote-url .',
    correct: 'c',
  },
  {
    question: 'برای مشاهده تاریخچه تغییرات مخزن کد از کدام دستور زیر استفاده می شود؟',
    a: 'git pull -u origin main',
    b: 'git switch -c branchname',
    c: 'git cherrypick',
    d: 'git log --oneline',
    correct: 'd',
  },
]

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
         <h2 class="text-success text-center">شما به ${score} از ${quizData.length} پاسخ صحیح داده اید</h2>  
         <button onclick="history.go(0)" class="btn btn-success my-2">آزمون مجدد</button>  
       `
    }
  }
})

submit1Button.addEventListener('click', () => {
  console.log(question.value)
  longQuiz.innerHTML = ''
  if (question.value === 'title') {
    longQuiz.innerHTML = `  
         <h2 class="text-success text-center">پاسخ صحیح است</h2>  
         <button onclick="history.go(0)" class="btn btn-success my-2">ازمون مجدد</button>  
       `
  } else {
    longQuiz.innerHTML = `  
         <h2 class="text-danger text-center">پاسخ صحیح نمی باشد</h2>  
         <button onclick="history.go(0)" class="btn btn-success my-2">ازمون مجدد</button>  
       `
  }
})
