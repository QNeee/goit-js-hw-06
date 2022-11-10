function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const input = controls.querySelector('input');
const mainDiv = document.querySelector('#boxes');
const buttonCreate = document.querySelector("[data-create]")
const buttonDestroy = document.querySelector("[data-destroy]")
function createBoxes(amount) {
  let boxSizes = 30;
  let boxes = [];
  for (let i = 0; i < amount; i++) {
    const listDiv = document.createElement("div");
    listDiv.style.width = `${boxSizes}px`;
    listDiv.style.height = `${boxSizes}px`;
    listDiv.style.backgroundColor = getRandomHexColor();
    boxSizes += 10;
    boxes.push(listDiv);
  }
  mainDiv.append(...boxes);
}

function destroyBoxes() {
  mainDiv.innerHTML = "";
}
buttonCreate.addEventListener("click", () => {
  createBoxes(input.value);
});
buttonDestroy.addEventListener("click", destroyBoxes);
