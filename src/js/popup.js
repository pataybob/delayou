const openPopupButton = document.getElementById("openPopUp");
const closePopupButton = document.getElementById("closePopUp");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

openPopupButton.addEventListener("click", function() {
  popup.style.display = "block";
  overlay.style.display = "block"; // Показываем overlay
  document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы
});

closePopupButton.addEventListener("click", function() {
  popup.style.display = "none";
  overlay.style.display = "none"; // Скрываем overlay
  document.body.style.overflow = "auto"; // Разблокируем прокрутку страницы
});