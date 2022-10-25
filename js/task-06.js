const input = document.querySelector("#validation-input");
input.addEventListener('blur', function rightSymbols(r) {
    const input1 = r.currentTarget;
    const inputLength = Number(input1.dataset.length);
    if (input1.value.length === inputLength) {
        input1.classList.add("valid");
        input1.classList.remove("invalid");
    } else {
        input1.classList.remove("valid");
        input1.classList.add("invalid");
    }
});