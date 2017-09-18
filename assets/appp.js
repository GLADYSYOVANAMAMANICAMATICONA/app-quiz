function submitQuiz() {
    console.log('submitted');

    function answerScore(qName) {
        let radiosNo = document.getElementsByName(qName);

        for (let i = 0, length = radiosNo.length; i < length; i++) {
            if (radiosNo[i].checked) {
                let answerValue = Number(radiosNo[i].value);
            }
        }
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    let calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3'));
    console.log("CalcScore: " + calcScore);

    function correctAnswer(correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);
        return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
    }

    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }

    let questionCountArray = document.getElementsByClassName('question');

    let questionCounter = 0;
    for (let i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    let showScore = "Your Score: " + calcScore + "/" + questionCounter;
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
var img = ["assets/img/img.jpg", "assets/img/img1.png", "assets/img/img2.png"]

$(document).ready(mostrarImg);
function mostrarImg() {

    $(".collapsible-header").click(function (event) {
        console.log(event);
        $(".img-cont").empty();
        let nro = event.target.id;
        $(".img-cont").append(`<img class="img1 img-responsive" src="${img[nro - 1]}" alt="">`);
    });
}

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
        }
    }
}



