const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function newInput(n) {
    if (n.currentTarget.value === "") {
        return nameOutput.textContent = "Anonymous";
    }
    return nameOutput.textContent = n.currentTarget.value;
});
