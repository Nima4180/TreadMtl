// Function to retrieve tire dimensions from the URL
function getSearchParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        width: urlParams.get('width'),
        aspect: urlParams.get('aspect'),
        diameter: urlParams.get('diameter')
    };
}

// Function to display the search results based on dimensions
function displayResults() {
    const { width, aspect, diameter } = getSearchParams();
    const dimDisplay = document.getElementById('dim-display');
    const resultsDiv = document.getElementById('results');

    if (!width || !aspect || !diameter) {
        dimDisplay.textContent = 'No dimensions provided.';
        resultsDiv.innerHTML = '<p>No matching tires found.</p>';
        return;
    }

    dimDisplay.textContent = `${width} / ${aspect} R${diameter}`;

    // Example tire data (in real use, this would come from a database or API)
    const tires = [
        { name: 'All-Season Tire', dimensions: '205/55 R16', description: 'Great for year-round driving.' },
        { name: 'Winter Tire', dimensions: '205/55 R16', description: 'Ideal for icy conditions.' },
        { name: 'Performance Tire', dimensions: '205/55 R16', description: 'Enhanced handling for sporty vehicles.' },
        // You can add more tire data here based on dimensions
    ];

    // Filter tires based on the dimensions
    const matchingTires = tires.filter(tire => tire.dimensions === `${width}/${aspect} R${diameter}`);

    if (matchingTires.length > 0) {
        matchingTires.forEach(tire => {
            const tireElement = document.createElement('div');
            tireElement.classList.add('tire-item');
            tireElement.innerHTML = `
                <h4>${tire.name}</h4>
                <p>${tire.description}</p>
            `;
            resultsDiv.appendChild(tireElement);
        });
    } else {
        resultsDiv.innerHTML = '<p>No matching tires found for your search.</p>';
    }
}

// Call displayResults when the page loads
window.onload = displayResults;
