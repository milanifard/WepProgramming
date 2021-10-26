let btn = document.getElementsByClassName('btn1_answer');
btn[0].addEventListener('click' , q1) ;
let q = document.getElementsByClassName('answer') ;

function q1(){
    let elemnt = document.createElement('p') ;
    elemnt.innerText = '--version' ;
    elemnt.classList.add('js_p');
    q[0].appendChild(elemnt);
}
