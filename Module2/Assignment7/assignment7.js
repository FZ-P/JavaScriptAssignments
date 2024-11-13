let sides = parseInt(prompt("Enter number of sides on the dice:"));
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
let result;
do {
    result = rollDice(sides);
    document.getElementById("output").innerHTML += `<li>Rolled: ${result}</li>`;
} while (result !== sides);
