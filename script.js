// script.js

// Handle the search form submission (example behavior)
document.getElementById('search').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values of car info and tire dimensions
    const carInfo = document.getElementById('car-info').value;
    const tireDimensions = document.getElementById('tire-dimensions').value;
    
    // For now, we'll just log the values to the console.
    // In a real application, this would send the data to a backend or filter the tires.
    console.log('Car Info:', carInfo);
    console.log('Tire Dimensions:', tireDimensions);

    // You can perform any actions you want with the data here.
    alert('Searching for tires...');
});

// Language Switch (for demonstration purposes)
const languageSwitch = document.querySelectorAll('.language-switch a');
languageSwitch.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior
        
        // Toggle language (this is just an example, you'd implement actual language switching here)
        const currentLang = event.target.textContent;
        if (currentLang === 'EN') {
            alert('Switching to English');
        } else {
            alert('Switching to French');
        }
    });
});
