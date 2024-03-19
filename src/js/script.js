function showAnswer(questionNumber) {
    let answers = document.querySelectorAll('.answer');
    answers.forEach(function(answer) {
        answer.style.display = 'none';
    });

    let selectedAnswer = document.getElementById('answer' + questionNumber);
    if (selectedAnswer) {
        selectedAnswer.style.display = 'block';
    }
}