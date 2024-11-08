// Prompt the user to enter a year
const year = parseInt(prompt("Enter a year:"), 10);

// Check if the year is a leap year
const isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

// Display the result on the HTML page
document.getElementById("result").innerHTML =
    `${year} is ${isLeap ? '' : 'not '}a leap year.`;
