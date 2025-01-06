function switchLanguage(language) {
    const englishSections = document.querySelectorAll('.en');
    const frenchSections = document.querySelectorAll('.fr');

    if (language === 'en') {
        englishSections.forEach(section => section.style.display = 'block');
        frenchSections.forEach(section => section.style.display = 'none');
    } else if (language === 'fr') {
        englishSections.forEach(section => section.style.display = 'none');
        frenchSections.forEach(section => section.style.display = 'block');
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

switchLanguage('en');
showSection('home');
