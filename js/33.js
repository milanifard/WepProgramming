console.log($('input[name="test-1"]:checked').val());
$('#submit-form').click(() => {
    let score = 3;
    ;
    if ($('input[name="test-1"]:checked').val() !== 'test1') {
        score--;
    }
    if ($('input[name="test-2"]:checked').val() !== 'test1') {
        score--;
    }
    if ($('input[name="test-3"]:checked').val() !== 'test1') {
        score--;
    }
    $('#score').text(`امتیاز شما از این آزمون برابر ${score} از ۳ است.`);
})