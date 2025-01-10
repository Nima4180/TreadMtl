// Handle language toggle
document.getElementById("english-btn").addEventListener("click", () => {
    alert("Switching to English (Feature not fully implemented)");
});

document.getElementById("french-btn").addEventListener("click", () => {
    alert("Basculer en français (fonctionnalité non entièrement implémentée)");
});

// Handle tire search
async function fetchTires() {
    const response = await fetch("tires.json");
    return response.json();
}

async function searchTiresBySize() {
    const searchSize = document.getElementById("search-size").value.trim();
    const resultsDiv = document.getElementById("search-results");
    resultsDiv.innerHTML = "Searching...";

    try {
        const tires = await fetchTires();
        const filteredTires = tires.filter(tire => tire.size.includes(searchSize));

        if (filteredTires.length > 0) {
            resultsDiv.innerHTML = filteredTires
                .map(tire => `
                    <div class="tire-item">
                        <h4>${tire.name}</h4>
                        <p>Size: ${tire.size.join(", ")}</p>
                        <p>Price: $${tire.price}</p>
                        <button onclick="addToCart('${tire.name}', 1)">Add to Cart</button>
                    </div>
                `)
                .join("");
        } else {
            resultsDiv.innerHTML = "<p>No tires found for the selected size.</p>";
        }
    } catch (error) {
        console.error("Error fetching tires:", error);
        resultsDiv.innerHTML = "<p>Error loading tires. Please try again later.</p>";
    }
}
