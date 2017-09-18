function submitQuiz() {
    console.log('submitted');

    // get each answer score
    function answerScore(qName) {
        let radiosNo = document.getElementsByName(qName);

        for (let i = 0, length = radiosNo.length; i < length; i++) {
            if (radiosNo[i].checked) {
                // do something with radiosNo
                let answerValue = Number(radiosNo[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    // calc score with answerScore function
    let calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3'));
    console.log("CalcScore: " + calcScore); // it works!

    // function to return correct answer string
    function correctAnswer(correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
        return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
    }

    // print correct answers only if wrong (calls correctAnswer function)
    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }

    // calculate "possible score" integer
    let questionCountArray = document.getElementsByClassName('question');

    let questionCounter = 0;
    for (let i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    // show score as "score/possible score"
    let showScore = "Your Score: " + calcScore + "/" + questionCounter;
    // if 4/4, "perfect score!"
    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function () {

    $('#submitButton').click(function () {
        $(this).addClass('hide');
    });

});




//////////////////////////////////////////7777
var img = ["assets/img/img.png", "assets/img/img1.png", "assets/img/img2.png"]

$(document).ready(mostrarImg);
function mostrarImg() {

    $(".collapsible-header").click(function (event) {
        console.log(event);
        $(".img-cont").empty();
        let nro = event.target.id;
        $(".img-cont").append(`<img class="img1 img-responsive" src="${img[nro-1]}" alt="">`);
    });
}
/*
$(document).ready(function(){
        $("ocultar2").click(function(){
                $(".img2").append();
        });
});

$(document).ready(function(){
    $("ocultar3").click(function(){
            $(".img3").append();
    });
});*/


