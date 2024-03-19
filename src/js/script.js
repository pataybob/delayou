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


let selectedElement = null;

function toggleColor(element) {
    if (selectedElement) {
        selectedElement.classList.remove('selected');
    }
    if (element !== selectedElement) {
        element.classList.add('selected');
        selectedElement = element;
    } else {
        selectedElement = null;
    }
}