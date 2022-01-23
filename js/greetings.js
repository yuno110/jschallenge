const loginForm = document.getElementsByClassName("login-form")[0];
const loginInput = document.querySelector(".login-form input");
const greetings = document.querySelector(".greetings")

const HIDDEN_CLASSNAME = "hidden";
const KEY_NAME = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const VALUE_NAME = loginInput.value;
    localStorage.setItem(KEY_NAME, VALUE_NAME);
    paintGreetings(VALUE_NAME);
}

function paintGreetings(name) {
    greetings.innerText = `Hello ${name}`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}





const savedUsername = localStorage.getItem(KEY_NAME);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings(savedUsername);

}







