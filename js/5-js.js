const test = () => {
    const a1 = document.getElementById('a1').value;
    const a2 = [...document.getElementsByName('q-2')].map((e, i) => ({c:e.checked, i})).filter((e) => e.c === true)
    const a3 = [...document.getElementsByName('q-3')].map((e, i) => ({c:e.checked, i})).filter((e) => e.c === true)
    if (a2.length === 0) a2.push({i:4});
    if (a3.length === 0) a3.push({i:4});
    const c1 = a1 === 'throw';
    const c2 = a2[0].i === 2;
    const c3 = a3[0].i === 1;
    document.getElementById('result').innerHTML = `سوال ۱ ${c1 ? 'صحیح' : 'غلط'}<br>` +
    `سوال ۲ ${c2 ? 'صحیح' : 'غلط'}<br>` +
    `سوال ۳ ${c3 ? 'صحیح' : 'غلط'}`;
}
let x = 0;
const asnwers = () => {
    if (x===0) {
        document.getElementById('a1').value = 'throw';
        document.getElementById('a2').innerHTML = 'catch';
        document.getElementById('a3').innerHTML = 'finally';
    } else {
        document.getElementById('a1').value = '';
        document.getElementById('a2').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        document.getElementById('a3').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    }
    x = (x+1)%2
}