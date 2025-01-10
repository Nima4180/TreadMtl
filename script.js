// Toggle between languages (en/fr)
function toggleLanguage() {
    var lang = document.getElementById("toggle-lang").textContent;
    if (lang === "EN") {
        document.getElementById("toggle-lang").textContent = "FR";
        // Change text to French (example, you should do this for all pages)
    } else {
        document.getElementById("toggle-lang").textContent = "EN";
        // Change text back to English
    }
}

// Example search function (redirect to a result page)
function searchTires() {
    var width = document.getElementById("width").value;
    var aspect = document.getElementById("aspect").value;
    var diameter = document.getElementById("diameter").value;
    // Redirect to a page with the tire search results
    window.location.href = "search-results.html?width=" + width + "&aspect=" + aspect + "&diameter=" + diameter;
}
