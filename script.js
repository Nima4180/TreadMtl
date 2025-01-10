function switchLanguage() {
    const currentLanguage = document.documentElement.lang;
    if (currentLanguage === 'en') {
        document.documentElement.lang = 'fr';
    } else {
        document.documentElement.lang = 'en';
    }
}

function searchTires() {
    const size = document.getElementById('tire-size-search').value;
    window.location.href = `searchResults.html?tireSize=${size}`;
}
