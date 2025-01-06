// script.js

const languageSwitch = document.getElementById('language-switch');
const textElements = document.querySelectorAll('[data-lang]');

// Language content mapping
const translations = {
  en: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    tires: 'Tire List',
    searchTitle: 'Find the Perfect Tire for Your Vehicle',
    searchVehicle: 'Search by Vehicle',
    searchDimension: 'Search by Dimension',
    searchButton: 'Search',
    footerContact: 'Contact Us: (438) 838-8480 | contact@treadmtl.com',
    footerQuote: '© 2025 TreadMtl - Your Tire Shop. All rights reserved.',
    footerShipping: 'Shipping within 24-72 business hours.',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    contact: 'Contactez-nous',
    tires: 'Liste de pneus',
    searchTitle: 'Trouvez le pneu parfait pour votre véhicule',
    searchVehicle: 'Rechercher par véhicule',
    searchDimension: 'Rechercher par dimension',
    searchButton: 'Rechercher',
    footerContact: 'Contactez-nous : (438) 838-8480 | contact@treadmtl.com',
    footerQuote: '© 2025 TreadMtl - Votre magasin de pneus. Tous droits réservés.',
    footerShipping: 'Expédition dans un délai de 24 à 72 heures ouvrables.',
  },
};

// Default language
let currentLanguage = 'en';

// Update language function
function updateLanguage(lang) {
  currentLanguage = lang;
  textElements.forEach((element) => {
    const key = element.getAttribute('data-lang');
    element.textContent = translations[lang][key];
  });
  languageSwitch.textContent = lang === 'en' ? 'Français' : 'English';
}

// Language switch event
languageSwitch.addEventListener('click', () => {
  const newLang = currentLanguage === 'en' ? 'fr' : 'en';
  updateLanguage(newLang);
});

// Initialize language
updateLanguage(currentLanguage);
