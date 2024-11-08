// Ask the user if they want to calculate the square root
const shouldCalculate = confirm("Should I calculate the square root?");

// Reference to the result element in HTML
const resultElement = document.getElementById("result");

if (shouldCalculate) {
    // If the user selected OK, prompt for a number
    const number = parseFloat(prompt("Enter a number:"));

    // Check if the number is non-negative and calculate the square root
    if (number >= 0) {
        const squareRoot = Math.sqrt(number);
        resultElement.innerHTML = `The square root of ${number} is ${squareRoot.toFixed(2)}.`;
    } else {
        // If the number is negative, display an error message
        resultElement.innerHTML = "The square root of a negative number is not defined.";
    }
} else {
    // If the user selected Cancel, display a message
    resultElement.innerHTML = "The square root is not calculated.";
}
