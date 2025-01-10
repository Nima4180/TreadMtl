// Language Switch
document.getElementById("en-btn").addEventListener("click", () => {
    alert("Switching to English...");
    // Implement language switch logic (e.g., dynamically load content in English)
});

document.getElementById("fr-btn").addEventListener("click", () => {
    alert("Passer au français...");
    // Implement language switch logic (e.g., dynamically load content in French)
});

// Tire Search Form Submission
document.getElementById("tire-search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const carModel = document.getElementById("car-model").value.trim();

    if (carModel) {
        window.location.href = `search-results.html?car=${encodeURIComponent(carModel)}`;
    } else {
        alert("Please enter a car model.");
    }
});
