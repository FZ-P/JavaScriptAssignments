function concat(arr) {
    let result = "";
    for (let str of arr) { // Iterate over each string in the array
        result += str; // Add each string to the result
    }
    return result; // Return the concatenated result
}

// Hardcoded array of strings
const words = ["Johnny", "DeeDee", "Joey", "Marky"];

// Call the concat function and display the result in HTML
document.getElementById("output").textContent = concat(words);
