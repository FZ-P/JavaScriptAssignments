const startYear = parseInt(prompt("Enter start year:"));
const endYear = parseInt(prompt("Enter end year:"));
const leapYears = [];

// Loop through each year from startYear to endYear
for (let year = startYear; year <= endYear; year++) {
    // Check if the year is a leap year and add it to the leapYears array
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYears.push(year);
    }
}

// Generate HTML for each leap year in the leapYears array and display it
document.body.innerHTML = `<ul>${leapYears.map(y => `<li>${y}</li>`).join('')}</ul>`;


