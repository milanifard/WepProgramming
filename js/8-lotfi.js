const questions = document.querySelectorAll("#q");
const inputs = document.querySelectorAll("#inputQ");
const showAnswerBtns = document.querySelectorAll("#showAnswerBtn");

const answers = ["answer1", "answer2"];

showAnswerBtns.forEach((element, index) => {
  element.addEventListener("click", () => {
    inputs[index].value = answers[index];
  });
});

