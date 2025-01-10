// Language content for EN and FR
const translations = {
    en: {
        "home-title": "TreadMTL",
        "home-nav-home": "Home",
        "home-nav-about": "About",
        "home-nav-contact": "Contact",
        "home-nav-cart": "Cart",
        "home-welcome": "Welcome to TreadMTL",
        "home-description": "Find the perfect tires for your vehicle with free shipping and fast delivery!",
        "search-tires-title": "Search by Tire Dimension",
        "search-tires-width": "Width (e.g., 205)",
        "search-tires-aspect": "Aspect Ratio (e.g., 55)",
        "search-tires-diameter": "Diameter (e.g., 16)",
        "search-tires-button": "Search Tires",
        "footer-contact": "Contact Us",
        "footer-email": "Email: info@treadmtl.com",
        "footer-phone": "Phone: (438)-838-8480",
        "footer-address": "Address: Laval, QC, Canada",
        "footer-quote": "\"Quality tires, quality service - for every journey.\""
    },
    fr: {
        "home-title": "TreadMTL",
        "home-nav-home": "Accueil",
        "home-nav-about": "À propos",
        "home-nav-contact": "Contact",
        "home-nav-cart": "Panier",
        "home-welcome": "Bienvenue chez TreadMTL",
        "home-description": "Trouvez les pneus parfaits pour votre véhicule avec livraison gratuite et rapide!",
        "search-tires-title": "Rechercher par dimension de pneu",
        "search-tires-width": "Largeur (ex. : 205)",
        "search-tires-aspect": "Rapport d'aspect (ex. : 55)",
        "search-tires-diameter": "Diamètre (ex. : 16)",
        "search-tires-button": "Rechercher des pneus",
        "footer-contact": "Contactez-nous",
        "footer-email": "Email : info@treadmtl.com",
        "footer-phone": "Téléphone : (438)-838-8480",
        "footer-address": "Adresse : Laval, QC, Canada",
        "footer-quote": "\"Pneus de qualité, service de qualité - pour chaque voyage.\""
    }
};

let currentLanguage = 'en';  // Default language is English

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    document.getElementById("toggle-lang").textContent = currentLanguage === 'en' ? 'FR' : 'EN';
    updateContentLanguage();
}

function updateContentLanguage() {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
        const langKey = element.getAttribute("data-lang");
        element.textContent = translations[currentLanguage][langKey] || element.textContent;
    });
}
