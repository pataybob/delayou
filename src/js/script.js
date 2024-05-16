document.addEventListener("DOMContentLoaded", function() {
    // Найти элементы прелоадера и основного контента
    var preloader = document.getElementById("preloader");
    var mainContent = document.getElementById("main__content");

    // Найти элемент с классом preloader__end
    var preloaderEndLink = document.querySelector(".preloader__end");

    // Добавить обработчик события клика на элемент preloader__end
    preloaderEndLink.addEventListener("click", function(event) {
        // Отменить стандартное действие ссылки (не переходить по адресу)
        event.preventDefault();

        // Скрыть прелоадер
        preloader.style.display = "none";

        // Добавить класс fadeIn для основного контента с задержкой
        setTimeout(function() {
            mainContent.classList.add("fadeIn");
        }, 100); // Задержка для просмотра анимации

        // Показать основное содержимое
        mainContent.style.opacity = "1";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    let blocks = document.querySelectorAll(".block");

    function toggleVisibility() {
        let screenWidth = window.innerWidth;
        blocks.forEach(function(block) {
            if (screenWidth <= 901) {
                block.classList.add("visible");
                block.classList.remove("hidden");
            } else {
                if (isElementInViewport(block)) {
                    block.classList.add("visible");
                    block.classList.remove("hidden");
                } else {
                    block.classList.add("hidden");
                    block.classList.remove("visible");
                }
            }
        });
    }

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility);
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



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


let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);