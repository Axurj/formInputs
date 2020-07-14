let formRecieved = document.getElementById("inputForm");
let passRecieved = document.getElementById("password");
let numRecieved = document.getElementById("num");
let dateRecieved = document.getElementById("date");
formRecieved.addEventListener("submit", getResults);
let nameShown = document.getElementById("showName");
let passShown = document.getElementById("showPass");
let numShown = document.getElementById("showNum");
let dateShown = document.getElementById("showDate");

function getResults(event) {
    event.preventDefault();
    nameShown.innerHTML = event.target.nameCase.value;
    passShown.innerHTML = event.target.passCase.value;
    numShown.innerHTML = event.target.numCase.value;
    dateShown.innerHTML = event.target.dateCase.value;
}