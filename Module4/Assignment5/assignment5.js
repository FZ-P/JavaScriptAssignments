document.getElementById('getJoke').addEventListener('click', async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    document.getElementById('joke').textContent = data.value;
});
