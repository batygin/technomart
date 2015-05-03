// Окно добавлен в корзину
var cartAdd = document.querySelector(".cart");
var cartAddButtons = document.querySelectorAll(".buy");
var cartClose = cartAdd.querySelector(".popup-close");
var cartCanel = cartAdd.querySelector(".cancel");


var i;
for (i = 0; i < cartAddButtons.length; i++) {
  cartAddButtons[i].addEventListener("click", function(event) {
  event.preventDefault();
  cartAdd.classList.add("cart-show");
});
}

cartClose.addEventListener("click", function(event) {
event.preventDefault();
cartAdd.classList.remove("cart-show");
});

cartCanel.addEventListener("click", function(event) {
event.preventDefault();
cartAdd.classList.remove("cart-show");
});