// Create and connect 3 functions to one button:
// - 1 when you click the button, the background becomes red.
// - 2 when you hover the button, the button becomes blue.
// - 3 when you click the button, the text becomes white.





var body = document.getElementById("body");
var button = document.getElementById("button") 
var text = document.getElementById("text")

function changeColor() {
    body.style.backgroundColor="red";
    text.style.color="blue"    
}
function changeBack() {
    button.style.backgroundColor="blue"
}


button.addEventListener("mouseover",changeBack)
button.addEventListener("click", changeColor) 