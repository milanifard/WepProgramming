let btn = document.getElementsByClassName('btn1_answer');
btn[0].addEventListener('click' , q1) ;
let q = document.getElementsByClassName('answer') ;

function q1(){
    let elemnt = document.createElement('p') ;
    elemnt.innerText = '--version' ;
    elemnt.classList.add('js_p');
    q[0].appendChild(elemnt);
}
function answer(a ,i,event){
    let p = document.createElement('p') ;
    p.textContent = a ;
    p.classList.add('float_left') ;
    p.style.fontSize = '2rem' ;
    btn[i].before(p);
}

for (let i = 1; i < btn.length ; i++) {
    btn[i].addEventListener('click',answer.bind(this , btn[i].dataset.answer , i)) ;
}
