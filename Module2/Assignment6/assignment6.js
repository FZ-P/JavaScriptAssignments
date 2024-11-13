function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
let result;
do {
    result = rollDice();
    document.getElementById("output").innerHTML += `<li>Rolled: ${result}</li>`;
} while (result !== 6);
