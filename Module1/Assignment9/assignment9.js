const num = parseInt(prompt("Enter an integer:"));
let isPrime = num > 1;  // Initialize isPrime to true for numbers greater than 1

// Loop to check divisibility up to the square root of num
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false; // Set isPrime to false if a divisor is found
        break; // Exit the loop early if num is not prime
    }
}

// Display the result directly in the HTML document
document.body.innerHTML = isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`;
