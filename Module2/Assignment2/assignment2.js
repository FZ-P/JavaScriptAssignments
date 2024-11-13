let participants = [];
let numParticipants = parseInt(prompt("Enter the number of participants:"));
for (let i = 0; i < numParticipants; i++) {
    let name = prompt(`Enter name for participant ${i + 1}:`);
    participants.push(name);
}
participants.sort();
document.getElementById("output").innerHTML = "<ol>" + participants.map(name => `<li>${name}</li>`).join('') + "</ol>";
