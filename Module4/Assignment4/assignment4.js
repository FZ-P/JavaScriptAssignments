document.getElementById("search-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const query = document.getElementById("query").value.trim();
    const resultsContainer = document.getElementById("results");

    if (!query) return;

    resultsContainer.innerHTML = ''; // Clear previous results

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();

        if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
            return;
        }

        data.forEach(tvShow => {
            let imageSrc;

            // Use if/else to handle missing images
            if (tvShow.show.image) {
                imageSrc = tvShow.show.image.medium;
            } else {
                imageSrc = 'https://via.placeholder.com/210x295?text=Not%20Found';
            }

            const article = document.createElement("article");

            article.innerHTML = `
                <h2>${tvShow.show.name}</h2>
                <a href="${tvShow.show.url}" target="_blank">More Details</a>
                <img src="${imageSrc}" alt="${tvShow.show.name}">
                <div>${tvShow.show.summary || 'No summary available.'}</div>
            `;

            resultsContainer.appendChild(article);
        });
    } catch (error) {
        resultsContainer.innerHTML = '<p>There was an error fetching the data.</p>';
        console.error(error);
    }
});
