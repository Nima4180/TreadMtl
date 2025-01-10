// Redirect to the search results page
async function searchTiresBySize() {
    const searchSize = document.getElementById("search-size").value.trim();

    if (searchSize) {
        localStorage.setItem("searchSize", searchSize);
        window.location.href = "results.html";
    } else {
        alert("Please enter a tire size to search.");
    }
}

// Fetch tires and display search results on results.html
async function displaySearchResults() {
    const searchSize = localStorage.getItem("searchSize");
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "Loading...";

    try {
        const response = await fetch("tires.json");
        const tires = await response.json();

        const filteredTires = tires.filter(tire => tire.size.includes(searchSize));

        if (filteredTires.length > 0) {
            resultsDiv.innerHTML = filteredTires
                .map(tire => `
                    <div class="tire-item">
                        <img src="${tire.photo}" alt="${tire.name}">
                        <h4>${tire.name}</h4>
                        <p>Size: ${tire.size.join(", ")}</p>
                        <p>Price: $${tire.price}</p>
                        <p>Performance: ${tire.performance}</p>
                        <p>Compatible Cars: ${tire.compatibleCars.join(", ")}</p>
                        <button onclick="addToCart('${tire.name}', 1)">Add to Cart</button>
                    </div>
                `)
                .join("");
        } else {
            resultsDiv.innerHTML = `<p>No tires found for size: ${searchSize}</p>`;
        }
    } catch (error) {
        console.error("Error fetching tire data:", error);
        resultsDiv.innerHTML = `<p>Could not load tire data. Please try again later.</p>`;
    }
}

// Handle cart addition (reuse existing functionality)
function addToCart(tireName, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.name === tireName);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: tireName, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${tireName} added to cart.`);
}
