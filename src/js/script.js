document.addEventListener("DOMContentLoaded", function() {
    let preloader = document.getElementById("preloader");
    let mainContent = document.getElementById("main__content");
    let preloaderEndLink = document.querySelector(".preloader__end");

    
    preloaderEndLink.addEventListener("click", function(event) {
        event.preventDefault();
        preloader.style.display = "none";
        setTimeout(function() {
            mainContent.classList.add("fadeIn");
        }, 100);
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
                 } 
                // else {
                //     block.classList.add("hidden");
                //     block.classList.remove("visible");
                // }
            }
        });
    }

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility);
});

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
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



document.addEventListener("DOMContentLoaded", function() {
    let listItems = document.querySelectorAll('.list__item');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            listItems.forEach(function(otherItem) {
                otherItem.classList.remove('primary');
            });

            item.classList.add('primary');
        });
    });
});