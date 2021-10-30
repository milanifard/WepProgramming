function showAnswer1() {
    if(document.getElementById('option-1-2').checked){
        alert("Correct!");
    }
    else {
        alert("wrong!");
        document.getElementById('answer-1').style.backgroundColor = "green";
    }
}

function showAnswer2() {
    if(document.getElementById('option-2-3').checked){
        alert("Correct!");
    }
    else {
        alert("wrong!");
        document.getElementById('answer-2').style.backgroundColor = "green";
    }
}

function showAnswer3() {
    if(document.getElementById('option-3-4').checked){
        alert("Correct!");
    }
    else {
        alert("wrong!");
        document.getElementById('answer-3').style.backgroundColor = "green";
    }
}