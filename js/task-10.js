function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const input = document.querySelector('input');
const mainDiv = document.querySelector('#boxes');
const buttonCreate = document.querySelector("[data-create]")
const buttonDestroy = document.querySelector("[data-destroy]")
let destroyed = [];
let boxes = [];
let boxSizes = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const listDiv = document.createElement("div");
    listDiv.style.width = `${boxSizes}px`;
    listDiv.style.height = `${boxSizes}px`;
    listDiv.style.backgroundColor = getRandomHexColor();
    boxSizes += 10;
    boxes.push(listDiv);
  }
}
function pushBoxes() {
  createBoxes(Number(input.value));
  mainDiv.append(...boxes);
}
function destroyBoxes() {
  location.reload();
}
buttonCreate.addEventListener("click", pushBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

