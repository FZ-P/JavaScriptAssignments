let numbers = [];
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}
// Print the numbers in reverse order without using array.reverse()
console.log("Numbers in reverse order:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]); // Print each number from the end to the start
}
