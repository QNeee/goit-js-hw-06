let counterValue = document.querySelector("#value");
const buttonDecrement = document.querySelector("[data-action='decrement']")
buttonDecrement.addEventListener('click', () => {
    counterValue.textContent--;
});
const buttonIncrement = document.querySelector("[data-action='increment']")
buttonIncrement.addEventListener('click', () => {
    counterValue.textContent++;
});