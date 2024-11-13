let numbers = [];
while (true) {
    let input = parseInt(prompt("Enter a number (or 0 to finish):"), 10);
    if (input === 0) break;
    numbers.push(input);
}
numbers.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
for (let number of numbers) {
    console.log(number);
}
