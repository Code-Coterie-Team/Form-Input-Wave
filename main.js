const email = document.querySelector("#email");
const password = document.querySelector("#password");

const lettersEmail = document.querySelectorAll("label[for=email] > .letter");
const lettersPassword = document.querySelectorAll("label[for=password] > .letter");


email.addEventListener("focus", (event) => {
    email.classList.add("active");

    for (let i = 0; i < 5; i++) {
        console.log(lettersEmail[i]);
        lettersEmail[i].classList.remove("letterActiveBottom");
        lettersEmail[i].classList.add("letterActive");
        lettersEmail[i].style.top = "18px";
    }
});
email.addEventListener("blur", (event) => {
    if (email.value == "") {
        email.classList.remove("active");
        for (let i = 0; i < 5; i++) {
            lettersEmail[i].classList.remove("letterActive");
            lettersEmail[i].classList.add("letterActiveBottom");
            lettersEmail[i].style.top = "34px";
        }
    }
});

password.addEventListener("focus", (event) => {
    password.classList.add("active");

    for (let i = 0; i < 8; i++) {
        lettersPassword[i].classList.remove("letterActiveBottom");
        lettersPassword[i].classList.add("letterActive");
        lettersPassword[i].style.top = "18px";
    }
});
password.addEventListener("blur", (event) => {
    if (password.value == "") {
        password.classList.remove("active");
        for (let i = 0; i < 8; i++) {
            lettersPassword[i].classList.remove("letterActive");
            lettersPassword[i].classList.add("letterActiveBottom");
            lettersPassword[i].style.top = "34px";
        }
    }
});