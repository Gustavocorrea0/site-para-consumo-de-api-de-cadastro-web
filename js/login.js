var body = document.querySelector("body")
var singUpButton = document.querySelector("#singUp")
var singInButton = document.querySelector("#singIn")

body.onload = function(){
    body.className = "on-load";
}

singUpButton.addEventListener("click", function(){
    body.className = "sing-up"
});

singInButton.addEventListener("click", function(){
    body.className = "sing-in"
});