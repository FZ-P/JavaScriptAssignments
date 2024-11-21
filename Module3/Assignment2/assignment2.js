const target = document.getElementById("target");

const items = ["First item", "Second item", "Third item"];
items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    if (index === 1) li.classList.add("my-item");
    target.appendChild(li);
});
