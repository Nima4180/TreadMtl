// Simple script for handling the search form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('search-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const carModel = document.getElementById('car-model').value;
        const tireSize = document.getElementById('tire-size').value;

        if (carModel || tireSize) {
            alert(`Searching for tires for: ${carModel || tireSize}`);
            // You can add logic to filter or redirect to a results page based on the input values.
        } else {
            alert('Please enter a car model or tire size.');
        }
    });
});
