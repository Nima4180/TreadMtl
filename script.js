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
    searchTitle: 'Search for Tires',
    searchVehicle: 'Search by Vehicle',
    searchDimension: 'Search by Dimension',
    footerContact: 'Contact Us: (438) 838-8480 | contact@treadmtl.com',
    footerQuote: '© 2025 TreadMtl - Your Tire Shop. All rights reserved.',
    footerShipping: 'Shipping within 24-72 business hours.',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    contact: 'Contact',
    tires: 'Liste de pneus',
    searchTitle: 'Rechercher des pneus',
    searchVehicle: 'Rechercher par véhicule',
    searchDimension: 'Rechercher par dimension',
    footerContact: 'Contactez-nous : (438) 838-8480 | contact@treadmtl.com',
    footerQuote: '© 2025 TreadMtl - Votre magasin de pneus. Tous droits réservés.',
    footerShipping: 'Expédition dans un délai de 24 à 72 heures ouvrables.',
  },
};

// Default language
let currentLanguage = 'en';

// Function to update the language
function updateLanguage(lang) {
  currentLanguage = lang;

  // Update all elements with data-lang attributes
  textElements.forEach((element) => {
    const key = element.getAttribute('data-lang');
    element.textContent = translations[lang][key];
  });
}

// Language switch event listener
languageSwitch.addEventListener('click', () => {
  const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  updateLanguage(newLanguage);
});

// Initialize the default language
updateLanguage(currentLanguage);
