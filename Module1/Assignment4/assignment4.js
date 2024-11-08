// Prompt the user for their name
const userName = prompt("What's your name?");

// Generate a random number between 1 and 4
const randomValue = Math.floor(Math.random() * 4) + 1;

// Determine the house based on the random number
let house;
if (randomValue === 1) {
    house = "Gryffindor";
} else if (randomValue === 2) {
    house = "Slytherin";
} else if (randomValue === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}
// Display the result on the HTML page
document.getElementById("result").innerHTML = `${userName}, you are ${house}.`;
