document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;
    const resultsContainer = document.getElementById('jokeResults');

    // Clear previous results
    resultsContainer.innerHTML = '';

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`);
        const data = await response.json();

        if (data.result.length === 0) {
            resultsContainer.innerHTML = '<p>No jokes found for your search term.</p>';
            return;
        }

        data.result.forEach((joke) => {
            const article = document.createElement('article');
            const paragraph = document.createElement('p');
            paragraph.textContent = joke.value;
            article.appendChild(paragraph);
            resultsContainer.appendChild(article);
        });
    } catch (error) {
        resultsContainer.innerHTML = `<p>Failed to fetch jokes: ${error.message}</p>`;
    }
});
