const test = () => {
    const a1 = [...document.getElementsByName('q-1')].map((e, i) => ({c:e.checked, i})).filter((e) => e.c === true)
    const a2 = [...document.getElementsByName('q-2')].map((e, i) => ({c:e.checked, i})).filter((e) => e.c === true)
    const a3 = document.getElementById('a3').value;
    if (a1.length === 0) a1.push({i:4});
    if (a2.length === 0) a2.push({i:4});
    const c1 = a1[0].i === 1;
    const c2 = a2[0].i === 0;
    const c3 = a3 === 'while';
    document.getElementById('result').innerHTML = `سوال ۱ ${c1 ? 'صحیح' : 'غلط'}<br>` +
    `سوال ۲ ${c2 ? 'صحیح' : 'غلط'}<br>` +
    `سوال ۳ ${c3 ? 'صحیح' : 'غلط'}`;
}
let x = 0;
const asnwers = () => {
    if (x===0) {
        document.getElementById('a1').innerHTML = 'of';
        document.getElementById('a2').innerHTML = 'in';
        document.getElementById('a3').value = 'while';
    } else {
        document.getElementById('a1').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        document.getElementById('a2').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        document.getElementById('a3').value = '';
    }
    x = (x+1)%2
}