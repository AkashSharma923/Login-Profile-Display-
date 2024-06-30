document.addEventListener("DOMContentLoaded", () => {
//login page
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signup = document.getElementById("signup");
const login = document.getElementById("login");


//profile page
const fullName = document.getElementById("username");
const userEmail = document.getElementById("useremail");
const userPassword = document.getElementById("userpassword");
const isLogin = document.getElementsByClassName("islogin");
const logtext = document.getElementsByClassName("logtext");
const wrong = document.getElementsByClassName("wrong");
const check = document.getElementsByClassName("check");
wrong[0].style.display = "inline";
check[0].style.display = "none";

console.log(isLogin)
login.addEventListener("click",()=>{
      fullName.innerHTML = firstName.value + " " + lastName.value;
      userEmail.innerHTML = email.value;
      userPassword.innerHTML = password.value;
      isLogin[0].style.borderColor = "#00ff73";
      logtext[0].style.color = "#00ff73";
      wrong[0].style.display = "none";
      check[0].style.display = "inline";
      logtext[0].innerText = "Log In Successfully";
});
})