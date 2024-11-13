let dogNames = [];
for (let i = 0; i < 6; i++) {
    let name = prompt(`Enter name for dog ${i + 1}:`);
    dogNames.push(name);
}
dogNames.sort().reverse();
document.getElementById("output").innerHTML = "<ul>" + dogNames.map(name => `<li>${name}</li>`).join('') + "</ul>";
