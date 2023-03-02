// Получить модальный
var modal = document.getElementById("modal");

// Получение кнопки, открывающей модальное окно
var btn = document.querySelector(".modal_okno");

// Получение элемента <span>, который закрывает модальное окно
var span = document.querySelector(".close");

// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модала, закрываем его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
