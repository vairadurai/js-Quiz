

document.getElementsByClassName('question')[0].style.display = "block";

next_question = (question_number) => {
    document.getElementsByClassName('question')[question_number- 1].style.display = "none";
    document.getElementsByClassName('question')[question_number].style.display = "block";
}
let question1 = document.getElementById('answer1'),
    question2 = document.getElementById('answer2'),
    question3 = document.getElementById('answer3'),
    question4 = document.getElementById('answer4');

function result() {
    let score = 0;
    if (question1.checked) {
        score++;
    }
    if (question2.checked) {
        score++;
    }
    if (question3.checked) {
        score++;
    }
    if (question4.checked) {
        score++;
    }
    console.log(score);
    const answerElement = document.getElementById('answer');
    answerElement.innerHTML = 'Your Score Is :' + score;
}

document.getElementById('submit').addEventListener('click', result);













