// Gets the values based on the IDs and assigns it to a new variable.
let formRecieved = document.getElementById("inputForm");
let passRecieved = document.getElementById("password");
let numRecieved = document.getElementById("num");
let dateRecieved = document.getElementById("date");
let nameShown = document.getElementById("showName");
let passShown = document.getElementById("showPass");
let numShown = document.getElementById("showNum");
let dateShown = document.getElementById("showDate");
// Attaches an EventListener to the submit input and uses the function 
// getResults to print out the value from each input tag. 
formRecieved.addEventListener("submit", getResults);

// This function takes the results from the form and prints it out when the submit input is activated.
function getResults(event) {
    event.preventDefault();
    nameShown.innerHTML = event.target.nameCase.value;
    passShown.innerHTML = event.target.passCase.value;
    numShown.innerHTML = event.target.numCase.value;
    dateShown.innerHTML = event.target.dateCase.value;
}