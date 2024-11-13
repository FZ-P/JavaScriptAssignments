// Define the even function that filters even numbers from an array
function even(arr) {
    let evens = []; // Initialize an array to store even numbers
    for (let num of arr) { // Iterate through each number in the array
        if (num % 2 === 0) { // Check if the number is even
            evens.push(num); // Add even numbers to the evens array
        }
    }
    return evens; // Return the array of even numbers
}

// Example array with a mix of even and odd numbers
const numbers = [2, 7, 4, 5, 10, 13, 18];
const evenNumbers = even(numbers); // Call the even function

// Clearer logging options
console.log("Original array:", ...numbers); // Expanded output
console.log("Array of even numbers:", ...evenNumbers);

