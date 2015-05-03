// Окно Напишите нам
var link = document.querySelector(".write-us");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".popup-close");
var cancel = popup.querySelector(".cancel");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
});

cancel.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
});