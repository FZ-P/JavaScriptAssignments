// Sample data in picArray
const picArray = [
    {
        title: "Beautiful Mountain",
        mediumImage: "mountain.jpg",
        caption: "A breathtaking mountain view.",
        description: "This photo captures the serene beauty of the mountains during sunset."
    },
    {
        title: "Golden Beach",
        mediumImage: "beach.jpg",
        caption: "Relaxing beach vibes.",
        description: "The golden sands and turquoise waters of this beach provide a perfect getaway."
    },
    {
        title: "Serene Forest",
        mediumImage: "forest.jpg",
        caption: "Nature's tranquility.",
        description: "Wander through the lush greenery and feel at peace in this tranquil forest."
    }
];

// Get the section element where the articles will be added
const gallery = document.getElementById("gallery");

// Iterate over the picArray and create an article for each item
picArray.forEach(pic => {
    // Create <article> element
    const article = document.createElement("article");
    article.className = "card";

    // Create and add <h2> element
    const heading = document.createElement("h2");
    heading.textContent = pic.title;
    article.appendChild(heading);

    // Create and add <figure> element
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = pic.mediumImage; // Image source
    img.alt = pic.title;       // Alt text
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = pic.caption; // Caption text
    figure.appendChild(img);
    figure.appendChild(figcaption);
    article.appendChild(figure);

    // Create and add <p> element
    const paragraph = document.createElement("p");
    paragraph.textContent = pic.description;
    article.appendChild(paragraph);

    // Append the <article> to the gallery section
    gallery.appendChild(article);
});
