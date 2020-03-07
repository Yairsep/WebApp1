
// alert("This is an alert");
// console.log("hello world");

var button = document.getElementById("send-button");

function buttonClicked() {
  console.log("button is clicked")
  button.removeEventListener("click",buttonClicked);
  document.getElementById("text").innerHTML = "Sent!";

}

button.addEventListener("click",buttonClicked);
