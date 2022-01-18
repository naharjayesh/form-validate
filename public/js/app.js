const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let validUsername = false;
let validEmail = false;
let validPhone = false;

$("#success").hide();
$("#failure").hide();

userName.addEventListener("blur", () => {
    let regex = /^[a-zA-Z][0-9a-zA-z]{1,14}$/;
    let str = userName.value;
    if (regex.test(str)) {
        userName.classList.remove("is-invalid");
        validUsername = true;
    } else {
        userName.classList.add("is-invalid");
        validUsername = false;
    }
});

email.addEventListener("blur", () => {
    let regex = /^[_\-0-9a-z]{1,}@[a-z]{1,}\.[a-z]{2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove("is-invalid");
        validEmail = true;
    } else {
        email.classList.add("is-invalid");
        validPhone = false;
    }
});

phone.addEventListener("blur", () => {
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove("is-invalid");
        validPhone = true;
    } else {
        phone.classList.add("is-invalid");
        validPhone = false;
    }
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (validUsername && validEmail && validPhone) {
        // Submit form through fetch api
        let successMsg = document.getElementById("success");
        successMsg.classList.add("show");
        // failure.classList.remove("show");
        $("#success").show();
        $("#failure").hide();
    } else {
        let failure = document.getElementById("failure");
        failure.classList.add("show");
        // successMsg.classList.remove("show");
        $("#failure").show();
        $("#success").hide();
    }
});
