// Get the form and results container
const form = document.getElementById('searchForm');
const results = document.getElementById('results');

// Listen to form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get the search query
    const query = document.getElementById('query').value;

    // Clear previous results
    results.innerHTML = '';

    try {
        // Fetch data from TVMaze API
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch TV shows');
        }

        const data = await response.json();

        // Display results in the console
        console.log(data);

        // Display results on the page
        if (data.length === 0) {
            results.innerHTML = '<p>No results found.</p>';
        } else {
            data.forEach((item) => {
                const show = item.show;

                // Handle missing images with a default placeholder
                const imageSrc = show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';

                // Create a container for each show
                const article = document.createElement('article');
                article.innerHTML = `
                    <h2>${show.name}</h2>
                    <img src="${imageSrc}" alt="${show.name}">
                    <p>${show.summary || 'No summary available.'}</p>
                    <a href="${show.url}" target="_blank">More details</a>
                `;

                // Append article to results
                results.appendChild(article);
            });
        }
    } catch (error) {
        console.error(error);
        results.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
});
