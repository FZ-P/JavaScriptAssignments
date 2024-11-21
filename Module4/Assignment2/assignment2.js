document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.getElementById('query').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const results = await response.json();
    displayResults(results);
});

function displayResults(shows) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    shows.forEach(show => {
        const { name, url, image, summary } = show.show;

        const article = document.createElement('article');
        const title = document.createElement('h2');
        const link = document.createElement('a');
        const img = document.createElement('img');
        const summaryDiv = document.createElement('div');

        title.textContent = name;
        link.href = url;
        link.textContent = 'More Info';
        link.target = '_blank';
        img.src = image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
        img.alt = name;
        summaryDiv.innerHTML = summary || 'No summary available';

        article.appendChild(title);
        article.appendChild(link);
        article.appendChild(img);
        article.appendChild(summaryDiv);
        resultsDiv.appendChild(article);
    });
}
