document.getElementById("nameForm").addEventListener("submit", event => {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    document.getElementById("target").textContent = `Your name is ${firstName} ${lastName}`;
});
