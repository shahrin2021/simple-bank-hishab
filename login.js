// click button and go another page

document.getElementById('submit__btn').addEventListener("click", function () {

    const emailField = document.getElementById('input__email');

    const emailInputValue = emailField.value;

    const passwordField = document.getElementById('input__password')
    const inputPasswordValue = passwordField.value;
    if (emailInputValue == "baapkabank@gmail.com" && inputPasswordValue == "money") {
        window.location.href = "bank.html"
    }

})

//  if (emailInputValue != "baapkabank@gmail.com" && inputPasswordValue != "money") {
//     console.log("invalid email and pass")
// } else if (emailInputValue != "baapkabank@gmail.com") {
//     const invalid__email = document.getElementById('invalid-email');
//     invalid__email.classList.add('active')
// }
// else if (inputPasswordValue != "money") {
//     console.log("invalid pass")
// }


document.getElementById('submit__btn').addEventListener('click', function () {
    const emailInvalid = document.getElementById('input__email');

    const invalidemailValue = emailInvalid.value;


    if (emailInvalid.value != "baapkabank@gmail.com") {
        const invalid__email = document.getElementById('invalid-email');
        invalid__email.classList.add('active')
    }
})

document.getElementById('email__btn').addEventListener('click', function () {
    document.getElementById('invalid-email').classList.remove('active');

});

document.getElementById('submit__btn').addEventListener("click", function () {

    const passwordInvalid = document.getElementById('input__password')

    const inputPasswordValue = passwordInvalid.value;
    // console.log("clickeddd")

    if (inputPasswordValue != "money") {

        document.getElementById('invalid-password').classList.add("show");
    }
});

document.getElementById('password__btn').addEventListener('click', function () {
    document.getElementById('invalid-password').classList.remove("show");
})


document.getElementById('submit__btn').addEventListener('click', function () {
    const invalidpasswordField = document.getElementById('input__password')

    const invalidpasswordFieldvalue = invalidpasswordField.value;
    // console.log(invalidpasswordFieldvalue)
    const invalidemailField = document.getElementById('input__email');

    const invalidemailFieldValue = invalidemailField.value;
    // console.log(invalidemailFieldValue)

    if (invalidemailFieldValue != "baapkabank@gmail.com" && invalidpasswordField != "money") {
        document.getElementById("invalid-emailpassword ").classList.add('visible')
    }
});


document.getElementById('emailpassword __btn').addEventListener('click', function () {
    document.getElementById("invalid-emailpassword ").classList.remove('visible')
})