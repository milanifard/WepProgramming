var questions = [{
        question: 'کدام نوع داده در جاوا اسکریپت پشتیبانی نمی شود؟',
        option_1: 'var',
        option_2: 'let',
        option_3: 'boolean',
        option_4: 'هیچکدام',
        answer: 'هیچکدام',
        isOkey: null,
    },
    {
        question: 'به متغیری که در بیرون از تابع تعریف می شود چه می گویند؟',
        option_1: 'private',
        option_2: 'const',
        option_3: 'global',
        option_4: 'هیچ کدام',
        answer: 'global',
        isOkey: null,
    },
    {
        question: 'یک سال چند روز است :) ؟',
        option_1: '285 روز',
        option_2: '129 روز',
        option_3: '461 روز',
        option_4: '365 روز',
        answer: '365 روز',
        isOkey: null,
    },
];

var activeQuesionIndex = 0;

function nextQuestion() {
    if (activeQuesionIndex != 0) {
        let answer = validateIsSelectedAnswer();
        if (!answer) {
            alert('لطفا یک پاسخ برای سوال انتخاب کنید');
            return;
        }
        console.log(activeQuesionIndex);

        questions[activeQuesionIndex - 1].isOkey = (questions[activeQuesionIndex - 1].answer == answer);
    }
    if (activeQuesionIndex < 3) {
        console.log('sdfushdufisdf');
        clearQuestion(() => renderNextQuestion(activeQuesionIndex));
    } else {
        clearQuestion(() => renderLog());
    }
}

nextQuestion();

function validateIsSelectedAnswer() {
    var radios = document.getElementsByName('fav_language');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function clearQuestion(callBack) {
    var box = document.getElementById('question-box');
    if (!box) return;
    box.innerHTML = '';
    setTimeout(() => {
        callBack();
    }, 200);
}

function renderNextQuestion(index) {
    var box = document.getElementById('question-box');
    if (!box) return;
    box.innerHTML = `
    <h3 class="text-3">${questions[index].question}</h3>

    <input type="radio" id="html" name="fav_language" value="${questions[index].option_1}">
    <label for="html">${questions[index].option_1}</label>
    <br>
    <input type="radio" id="css" name="fav_language" value="${questions[index].option_2}">
    <label for="css">${questions[index].option_2}</label>
    <br>
    <input type="radio" id="html" name="fav_language" value="${questions[index].option_3}">
    <label for="html">${questions[index].option_3}</label>
    <br>
    <input type="radio" id="javascript" name="fav_language" value="${questions[index].option_4}">
    <label for="javascript">${questions[index].option_4}</label>

    <div class="div">
        <button class="button-2" onclick="nextQuestion()" > ادامه </button>
    </div>
    `;
    activeQuesionIndex++;
    scrolToBottom();
}

function renderLog() {
    var box = document.getElementById('question-box');
    if (!box) return;
    var numberOfOkAnswer = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].isOkey) {
            numberOfOkAnswer++;
        }
    }

    box.innerHTML = `
    <div class="card p-2 m-1">
    <h2 class="text-center">نتیجه آزمون</h2>
    <div class="h6 justify-content-start align-items-center text-muted my-3 d-flex">پاسخ سوال یک : &nbsp;
        <div class="h5 ${questions[0].isOkey ? 'text-success' : 'text-danger'}">${questions[0].isOkey ? 'درست' : 'نادرست'}</div>
    </div>
    <div class="h6 justify-content-start align-items-center text-muted my-3 d-flex">پاسخ سوال دو : &nbsp;
        <div class="h5 ${questions[1].isOkey ? 'text-success' : 'text-danger'}">${questions[1].isOkey ? 'درست' : 'نادرست'}</div>
    </div>
    <div class="h6 justify-content-start align-items-center text-muted my-3 d-flex">پاسخ سوال سه : &nbsp;
        <div class="h5 ${questions[2].isOkey ? 'text-success' : 'text-danger'}">${questions[2].isOkey ? 'درست' : 'نادرست'}</div>
    </div>
    <div class="d-flex justify-content-center align-items-center w-100">
        کارنامه رنگی
        <div class="mx-2 log-box rounded ${
            numberOfOkAnswer == 0 ? 'bg-danger':
            numberOfOkAnswer == 1 ? 'bg-warning':
            numberOfOkAnswer == 2 ? 'bg-info': 'bg-success'
        }">
        ${
            numberOfOkAnswer == 0 ? 'ضعیف':
            numberOfOkAnswer == 1 ? 'قابل قبول':
            numberOfOkAnswer == 2 ? 'خوب': 'عالی'
        }
        </div>
    </div>
</div>
    `;

    scrolToBottom();
}

function scrolToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}