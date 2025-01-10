// Language Switch
document.getElementById("en-btn").addEventListener("click", () => {
    alert("Switching to English...");
    // Implement language switch logic
});

document.getElementById("fr-btn").addEventListener("click", () => {
    alert("Passer au français...");
    // Implement language switch logic
});

// Tire Search
document.getElementById("tire-search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const carModel = document.getElementById("car-model").value.trim();
    if (carModel) {
        window.location.href = `search-results.html?car=${encodeURIComponent(carModel)}`;
    } else {
        alert("Please enter a car model.");
    }
});
