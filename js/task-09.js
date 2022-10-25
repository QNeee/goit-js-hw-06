function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
button.addEventListener("click", function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = `${getRandomHexColor()}`;
});
