function checkAnswer(answer, question) {

    const answerset = ["a", "b"];

    const result = document.getElementById('result' + question);

    
    if (answer === answerset[question -1]) {
        result.textContent = "ถูกต้อง";
        result.style.color = 'green';
    } else {
        result.textContent = "ผิด";
        result.style.color = 'red';
    }

    checkScore();
}

function checkScore() {
    var sumscore = 0;

    const score = document.getElementById('score');
    const result = document.getElementsByClassName('result');
    
    Array.prototype.forEach.call(result, function(el) {
        console.log(el.innerHTML);
        if(el.innerHTML == "ถูกต้อง"){
            sumscore++;
        }
    });
 
    score.innerHTML = sumscore;
}
