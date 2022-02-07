let form = document.getElementById("form")
let email = document.getElementById("email")
let error=document.getElementById("error-symbol")
let errormsg=document.getElementById("error-message")

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!emailRegex.test(email.value)|| (email.value=="")) {
        email.style.border = "2px solid red"
        error.style.display="block"
        errormsg.style.visibility="visible"
    }
    else {
        email.style.border = "2px solid green"
        error.style.display="none"
        errormsg.style.visibility="hidden"
    }
})