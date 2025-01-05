function toggleLanguage() {
    const currentLanguage = document.body.getAttribute('lang');
    if (currentLanguage === 'en') {
        document.body.setAttribute('lang', 'fr');
        document.querySelector('.promo h1').innerText = 'Bienvenue à TreadMtl!';
        document.querySelector('.promo p').innerText = 'Obtenez une réduction de 12 % sur tout achat de 500 $ avant taxes pour 4 pneus!';
        document.querySelector('.tire-search h2').innerText = 'Trouvez vos pneus';
        document.querySelector('label').innerText = "Entrez votre modèle de voiture ou dimensions des pneus:";
        document.querySelector('button[type="submit"]').innerText = 'Rechercher';
        document.querySelector('footer p').innerText = 'TreadMtl - Situé à Laval';
    } else {
        document.body.setAttribute('lang', 'en');
        document.querySelector('.promo h1').innerText = 'Welcome to TreadMtl!';
        document.querySelector('.promo p').innerText = 'Get a 12% discount on any purchase over $500 before tax on 4 tires!';
        document.querySelector('.tire-search h2').innerText = 'Find Your Tires';
        document.querySelector('label').innerText = 'Enter your car model or tire dimensions:';
        document.querySelector('button[type="submit"]').innerText = 'Search';
        document.querySelector('footer p').innerText = 'TreadMtl - Located in Laval';
    }
}

// Array to hold tire data
const tires = [
    {
        name: "Winter Tire A",
        description: "Perfect for snowy conditions with excellent grip.",
        image: "tire1.jpg",
        price: "$150 each",
    },
    {
        name: "All-Season Tire B",
        description: "Versatile performance for all weather conditions.",
        image: "tire2.jpg",
        price: "$120 each",
    },
    {
        name: "Performance Tire C",
        description: "Designed for high-speed stability and cornering.",
        image: "tire3.jpg",
        price: "$200 each",
    },
    {
    name: "Off-Road Tire D",
    description: "Built tough for rugged terrain and heavy-duty use.",
    image: "tire4.jpg",
    price: "$180 each",
}
];

// Function to load tires dynamically
function loadTires() {
    const tireContainer = document.getElementById("tire-container");

    tires.forEach(tire => {
        // Create tire card
        const tireItem = document.createElement("div");
        tireItem.classList.add("tire-item");

        // Add tire content
        tireItem.innerHTML = `
            <img src="${tire.image}" alt="${tire.name}">
            <h3>${tire.name}</h3>
            <p>${tire.description}</p>
            <p><strong>${tire.price}</strong></p>
        `;

        // Append to container
        tireContainer.appendChild(tireItem);
    });
}

// Call the function to load tires when the page loads
document.addEventListener("DOMContentLoaded", loadTires);

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById('car-model').value;
    alert('Searching for: ' + searchQuery);
});
