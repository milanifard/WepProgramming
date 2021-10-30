function evaluation() {
    var score = 0;
    if (document.getElementById('r1').checked) {
            document.getElementById('q1').style.backgroundColor = "green";
            score++;
    } else {
            document.getElementById('q1').style.backgroundColor = "rgb(195, 76, 76)";
    }
    if (document.getElementById('rr4').checked) {
            document.getElementById('q2').style.backgroundColor = "green";
            score++;
    } else {
            document.getElementById('q2').style.backgroundColor = "rgb(195, 76, 76)";
    }
    if (document.getElementById('rrr2').checked) {
            document.getElementById('q3').style.backgroundColor = "green";
            score++;
    } else {
            document.getElementById('q3').style.backgroundColor = "rgb(195, 76, 76)";
    }
    document.getElementById('d1').style.opacity = "100%";
    document.getElementById('d2').style.opacity = "100%";
    document.getElementById('d3').style.opacity = "100%";
    let text = "امتیاز شما " + String(score) + "/3" + " میباشد.";
    alert(text);
}

function show(){
        alert("پاسخ btn-warning میباشد.");
}

function checkquestion(){
        if (document.querySelector('input').value === "btn-warning")
                alert(".پاسخ صحیح است")

        else
                alert("پاسخ شما صحیح نیست")
        
}

