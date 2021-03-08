// var password = prompt('please type your password');
// function myFunction() {
//     var x = document.getElementById("myPsw").value;
//     document.getElementById("demo").innerHTML = x,


// function user() {
//     var password = document.createElement("INPUT");
//     password.setAttribute("type", "password");
//     password.setAttribute("value", "pswtext");
//     document.body.appendChild(password);
// }

// console.log(user);
// password();

// var password

// function login(){
// var a=prompt("Enter your user ID");
// var b=prompt("Enter your password");
// if(a=="abcd" && b=="abcd1234"){
//     alert("Thank you for visiting");
// }
// else{
//     alert("Wrong ID or password!!");
// }
// }
// login();


var text = prompt("Please provide your password?")
var p = document.getElementById("p");

if(text == "Exert") {
    function checkP() {
        p.removeAttribute("class");
        p.setAttribute("class", "purple");
   }
}       

window.addEventListener("load",checkP);