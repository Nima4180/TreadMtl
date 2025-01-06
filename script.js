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

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById('car-model').value;
    alert('Searching for: ' + searchQuery);
});
