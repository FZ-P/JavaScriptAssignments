const numDice = parseInt(prompt("Enter number of dice:"));
const desiredSum = parseInt(prompt("Enter desired sum:"));
let matchCount = 0;
const simulations = 10000;

for (let i = 0; i < simulations; i++) {
    let currentSum = 0;
    for (let j = 0; j < numDice; j++) {
        currentSum += Math.floor(Math.random() * 6) + 1;
    }
    if (currentSum === desiredSum) matchCount++;
}

const probability = ((matchCount / simulations) * 100).toFixed(2);
document.body.innerHTML = `Probability to get sum ${desiredSum} with ${numDice} dice is ${probability}%`;
