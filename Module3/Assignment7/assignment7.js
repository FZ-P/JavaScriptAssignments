// Select the elements
const trigger = document.getElementById("trigger");
const target = document.getElementById("target");

// Define the hover effect
trigger.addEventListener("mouseover", () => {
    target.src = "https://via.placeholder.com/300x200?text=Hovered"; // Change to hovered image
});

// Revert to the original image
trigger.addEventListener("mouseout", () => {
    target.src = "https://via.placeholder.com/300x200?text=Original"; // Revert to the original image
});
