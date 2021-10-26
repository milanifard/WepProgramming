
function check_answer(){
    const rd1 = document.getElementById('rd1')
    const rd2 = document.getElementById('rd2')
    const rd3 = document.getElementById('rd3')
    const rd4 = document.getElementById('rd4')

    const question_div = document.getElementById("question_div")
    console.log(question_div)

    if(rd1.checked === true){
        question_div.classList.remove("bg-dark");
        question_div.style.backgroundColor = "green"
    }
    else {
        question_div.classList.remove("bg-dark");
        question_div.style.backgroundColor = "red"
    }
}