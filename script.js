// Language Switcher
document.getElementById('language-switcher').addEventListener('change', (event) => {
    const language = event.target.value;
    const elementsToTranslate = document.querySelectorAll('[data-lang]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[language][key];
    });
});

// Translations
const translations = {
    en: {
        home: "Home",
        about: "About",
        contact: "Contact",
        blog: "Blog",
        policy: "Policy",
    },
    fr: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        blog: "Blog",
        policy: "Politique",
    },
};

// Tire Search
document.getElementById('search-btn').addEventListener('click', () => {
    const width = document.getElementById('search-width').value;
    const aspect = document.getElementById('search-aspect').value;
    const diameter = document.getElementById('search-diameter').value;

    if (width && aspect && diameter) {
        window.location.href = `search-results.html?width=${width}&aspect=${aspect}&diameter=${diameter}`;
    } else {
        alert('Please fill in all search fields.');
    }
});
