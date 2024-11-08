// Ask the user for the number of dice rolls
const numOfRolls = parseInt(prompt("Enter the number of dice rolls:"), 10);

// Initialize sum variable to store the total
let sum = 0;

// Loop to roll the dice the specified number of times
for (let i = 0; i < numOfRolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
    sum += roll;
}

// Display the sum in the HTML document
document.getElementById("result").innerHTML = `The sum of ${numOfRolls} dice rolls is ${sum}.`;
