// Step 1: Ask for the number of candidates
const numCandidates = parseInt(prompt("Enter the number of candidates:").trim());
const candidates = [];

// Step 2: Collect each candidate's name and initialize their votes to 0
for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Enter name for candidate ${i + 1}:`).trim();
    candidates.push({ name: name, votes: 0 });
}

// Log candidates to verify they were added correctly
console.log("Candidates:", candidates);

// Step 3: Ask for the number of voters
const numVoters = parseInt(prompt("Enter the number of voters:").trim());

// Step 4: Collect votes from each voter, showing numbered options
for (let i = 0; i < numVoters; i++) {
    // Show candidate options as a numbered list
    let candidateOptions = "Choose a candidate by number:\n";
    candidates.forEach((candidate, index) => {
        candidateOptions += `${index + 1}. ${candidate.name}\n`;
    });

    const voteIndex = parseInt(prompt(candidateOptions).trim()) - 1;

    // Check if the input is a valid number and within the range of candidates
    if (voteIndex >= 0 && voteIndex < candidates.length) {
        candidates[voteIndex].votes++;
        console.log(`Vote registered for: ${candidates[voteIndex].name}`); // Debugging line
    } else {
        console.log("Invalid selection. Vote not counted.");
    }
}

// Step 5: Sort candidates by votes in descending order
candidates.sort((a, b) => b.votes - a.votes);

// Step 6: Display the winner and voting results
if (candidates[0].votes > 0) {
    console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
} else {
    console.log("No valid votes were cast.");
}

console.log("Results:");
for (let candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}


