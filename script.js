// Toggle between languages (English / French)
function toggleLanguage() {
    const currentLang = document.getElementById('toggle-lang').innerText;
    if (currentLang === 'EN') {
        document.getElementById('toggle-lang').innerText = 'FR';
        updateContentLanguage('fr');
    } else {
        document.getElementById('toggle-lang').innerText = 'EN';
        updateContentLanguage('en');
    }
}

function updateContentLanguage(lang = 'en') {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const langKey = element.getAttribute('data-lang');
        element.innerText = translations[lang][langKey] || element.innerText;
    });
}

// Example translations for English and French
const translations = {
    en: {
        "home-title": "TreadMTL",
        "home-nav-home": "Home",
        "home-nav-about": "About",
        "home-nav-contact": "Contact",
        "home-nav-cart": "Cart",
        "search-tires-title": "Search by Tire Dimension",
        "search-tires-button": "Search Tires",
        "footer-contact": "Contact Us",
        "footer-email": "Email: info@treadmtl.com",
        "footer-phone": "Phone: (438)-838-8480",
        "footer-address": "Address: Laval, QC, Canada",
        "footer-quote": "\"Quality tires, quality service - for every journey.\"",
        "results-title": "Available Tires",
        "results-no-match": "No tires found for the selected dimensions.",
        "add-to-cart": "Add to Cart",
        "cart-title": "Your Cart",
        "cart-empty": "Your cart is empty."
    },
    fr: {
        "home-title": "TreadMTL",
        "home-nav-home": "Accueil",
        "home-nav-about": "À propos",
        "home-nav-contact": "Contact",
        "home-nav-cart": "Panier",
        "search-tires-title": "Rechercher par dimensions des pneus",
        "search-tires-button": "Rechercher des pneus",
        "footer-contact": "Contactez-nous",
        "footer-email": "E-mail: info@treadmtl.com",
        "footer-phone": "Téléphone: (438)-838-8480",
        "footer-address": "Adresse: Laval, QC, Canada",
        "footer-quote": "\"Des pneus de qualité, un service de qualité - pour chaque trajet.\"",
        "results-title": "Pneus disponibles",
        "results-no-match": "Aucun pneu trouvé pour les dimensions sélectionnées.",
        "add-to-cart": "Ajouter au panier",
        "cart-title": "Votre panier",
        "cart-empty": "Votre panier est vide."
    }
};
