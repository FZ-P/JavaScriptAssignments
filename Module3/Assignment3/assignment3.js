const target = document.getElementById("target");
const names = ["John", "Paul", "Jones"];

target.innerHTML = names.map(name => `<li>${name}</li>`).join('');
