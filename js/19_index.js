
function check_answer(){
    const rd1 = document.getElementById('rd1')
    const rd2 = document.getElementById('rd2')
    const rd3 = document.getElementById('rd3')
    const rd4 = document.getElementById('rd4')

    const question_div = document.getElementById("question_div");

    if(rd1.checked === true){
        question_div.classList.remove("bg-dark");
        question_div.style.backgroundColor = "green"
    }
    else {
        question_div.classList.remove("bg-dark");
        question_div.style.backgroundColor = "red"
    }
}

function check_answer_2(){
    const rd21 = document.getElementById('rd21')
    const rd22 = document.getElementById('rd22')

    const question_div_2 = document.getElementById("question_div_2");

    if(rd21.value.trim() === "clear" && rd22.value.trim() === "both"){
        question_div_2.classList.remove("bg-dark");
        question_div_2.style.backgroundColor = "greengi"
    }
    else {
        question_div_2.classList.remove("bg-dark");
        question_div_2.style.backgroundColor = "red"
    }
}