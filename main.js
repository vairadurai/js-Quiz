

document.getElementsByClassName('question')[0].style.display = "block";

next = (one) => {
    document.getElementsByClassName('question')[one - 1].style.display = "none";
    document.getElementsByClassName('question')[one].style.display = "block";
}
let q1 = document.getElementById('ans1'),
    q2 = document.getElementById('ans2'),
    q3 = document.getElementById('ans3'),
    q4 = document.getElementById('ans4');
document.getElementById('submit').addEventListener('click', result);


function result() {
    let score = 0;
    if (q1.checked) {
        score++;
    }
    if (q2.checked) {
        score++;
    }
    if (q3.checked) {
        score++;
    }
    if (q4.checked) {
        score++;
    }
    console.log(score);
    const answerEle = document.getElementById('answer');
    answerEle.innerHTML = 'Your Score Is :'+score;
}














