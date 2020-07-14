let formRecieved = document.getElementById("inputForm");
let passRecieved = document.getElementById("password");
let numRecieved = document.getElementById("num");
let dateRecieved = document.getElementById("date");
formRecieved.addEventListener("submit", getResults);
let showName = document.getElementById("show");

function getResults(event) {
    event.preventDefault();
    showName.innerHTML = event.target.nameCase.value;
}