function searchTires() {
    const width = document.getElementById('width').value;
    const aspect = document.getElementById('aspect').value;
    const diameter = document.getElementById('diameter').value;

    if (!width || !aspect || !diameter) {
        alert('Please enter all tire dimensions!');
        return;
    }

    // Redirect to the results page with search parameters
    window.location.href = `results.html?width=${width}&aspect=${aspect}&diameter=${diameter}`;
}
