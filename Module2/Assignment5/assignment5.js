let numbers = [];
while (true) {
    let input = parseInt(prompt("Enter a number (or duplicate to stop):"), 10);
    if (numbers.includes(input)) break;
    numbers.push(input);
}
numbers.sort((a, b) => a - b);
console.log("Numbers in ascending order:");
for (let number of numbers) {
    console.log(number);
}
