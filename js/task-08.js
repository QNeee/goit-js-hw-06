const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", function checkSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all fields");
    }
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
});