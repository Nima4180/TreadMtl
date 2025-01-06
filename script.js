<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TreadMTL - Your Tire Shop</title>
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f3f3f3;
            color: #333;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Header Styles */
        header {
            background-color: #002855; /* Navy Blue */
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
        }

        .logo {
            font-size: 1.5em;
            font-weight: bold;
        }

        nav {
            display: flex;
            gap: 20px;
        }

        nav a {
            color: white;
            font-weight: bold;
        }

        .language-switcher {
            display: flex;
            gap: 10px;
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 50px 20px;
            background-color: #e9ecef;
        }

        .hero h1 {
            color: #002855;
        }

        .search-section {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
        }

        .search-section input,
        .search-section select,
        .search-section button {
            padding: 10px;
            font-size: 1em;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .search-section button {
            background-color: #002855;
            color: white;
            cursor: pointer;
        }

        /* Footer Styles */
        footer {
            background-color: #002855;
            color: white;
            padding: 20px;
            text-align: center;
        }

        footer .contact-info {
            margin-bottom: 10px;
        }

        footer .quote {
            margin-top: 10px;
            font-style: italic;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">TreadMTL</div>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#tires">Tire List</a>
        </nav>
        <div class="language-switcher">
            <button onclick="switchLanguage('en')">English</button>
            <button onclick="switchLanguage('fr')">Français</button>
        </div>
    </header>

    <section class="hero" id="home">
        <h1>Welcome to TreadMTL</h1>
        <p>Find the perfect tires for your vehicle.</p>
        <div class="search-section">
            <h3>Search by Car Information:</h3>
            <select id="year">
                <option value="">Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
            <select id="make">
                <option value="">Make</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
            </select>
            <select id="model">
                <option value="">Model</option>
                <option value="Corolla">Corolla</option>
                <option value="Civic">Civic</option>
                <option value="F-150">F-150</option>
            </select>
            <h3>Search by Tire Dimension:</h3>
            <input type="text" id="width" placeholder="Width (e.g., 205)">
            <input type="text" id="aspect" placeholder="Aspect Ratio (e.g., 55)">
            <input type="text" id="diameter" placeholder="Diameter (e.g., 16)">
            <button onclick="searchTires()">Search Tires</button>
        </div>
    </section>

    <footer>
        <div class="contact-info">
            <p>Email: info@treadmtl.com</p>
            <p>Phone: (438)-838-8480</p>
        </div>
        <p class="quote">Our shipping delay is 24-72 business hours.</p>
        <p>© 2025 TreadMTL - Your Tire Shop. All rights reserved.</p>
    </footer>

    <script>
        // Switch language function
        function switchLanguage(lang) {
            if (lang === 'en') {
                alert('Switched to English');
                // Add code to dynamically change content to English
            } else if (lang === 'fr') {
                alert('Passé au français');
                // Add code to dynamically change content to French
            }
        }

        // API call to get tire size based on vehicle make, model, and year
        function getCarTireSize(make, model, year) {
            const apiUrl = `https://api.tiredata.com/tire-size?make=${make}&model=${model}&year=${year}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data && data.tireSize) {
                        alert(`Suggested tire size for ${make} ${model} (${year}): ${data.tireSize}`);
                    } else {
                        alert("No tire size data available for this vehicle.");
                    }
                })
                .catch(error => {
                    console.error("Error fetching tire size:", error);
                    alert("There was an error fetching tire data. Please try again.");
                });
        }

        // Search tires by vehicle info
        function searchTires() {
            const year = document.getElementById("year").value;
            const make = document.getElementById("make").value;
            const model = document.getElementById("model").value;
            const width = document.getElementById("width").value;
            const aspect = document.getElementById("aspect").value;
            const diameter = document.getElementById("diameter").value;

            if (!make || !model || !year) {
                alert("Please fill in the car's make, model, and year.");
                return;
            }

            // Fetch tire size from the API based on the car info
            getCarTireSize(make, model, year);

            // Handle tire search by dimensions (if available)
            if (width && aspect && diameter) {
                alert(`Searching for tires with dimensions: ${width}/${aspect}R${diameter}`);
                // Implement logic for tire search based on these dimensions
            }
        }
    </script>
</body>
</html>
