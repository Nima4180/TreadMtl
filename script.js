let isFrench = false;

function toggleLanguage() {
    isFrench = !isFrench;

    // Update text content based on language
    if (isFrench) {
        document.getElementById("home-title").innerText = "Bienvenue chez TreadMTL";
        document.getElementById("home-description").innerText = "Trouvez les pneus parfaits pour votre véhicule avec livraison gratuite et rapide (24-72 heures)!";
        document.getElementById("search-title").innerText = "Recherchez par dimension de pneu:";
        document.getElementById("footer-quote").innerText = "\"Des pneus de qualité, un service de qualité - pour chaque voyage.\"";
        document.getElementById("home-link").innerText = "Accueil";
        document.getElementById("about-link").innerText = "À propos";
        document.getElementById("contact-link").innerText = "Contact";
        document.getElementById("tires-link").innerText = "Liste de pneus";
        document.getElementById("lang-toggle").innerText = "English";
    } else {
        document.getElementById("home-title").innerText = "Welcome to TreadMTL";
        document.getElementById("home-description").innerText = "Find the perfect tires for your vehicle with free shipping and fast delivery (24-72 hours)!";
        document.getElementById("search-title").innerText = "Search by Tire Dimension:";
        document.getElementById("footer-quote").innerText = "\"Quality tires, quality service - for every journey.\"";
        document.getElementById("home-link").innerText = "Home";
        document.getElementById("about-link").innerText = "About";
        document.getElementById("contact-link").innerText = "Contact";
        document.getElementById("tires-link").innerText = "Tire List";
        document.getElementById("lang-toggle").innerText = "Français";
    }
}
