<script>
    // Fetch car makes, models, and years from an API
    function getCarData() {
        const apiUrl = "https://api.example.com/cars"; // Replace with actual API endpoint
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const yearSelect = document.getElementById("year");
                const makeSelect = document.getElementById("make");
                const modelSelect = document.getElementById("model");

                // Populate the year, make, and model selects
                data.years.forEach(year => {
                    const option = document.createElement("option");
                    option.value = year;
                    option.textContent = year;
                    yearSelect.appendChild(option);
                });

                data.makes.forEach(make => {
                    const option = document.createElement("option");
                    option.value = make;
                    option.textContent = make;
                    makeSelect.appendChild(option);
                });

                // Listen for the change of make to fetch models dynamically
                makeSelect.addEventListener("change", function() {
                    const selectedMake = makeSelect.value;
                    modelSelect.innerHTML = ''; // Clear existing options

                    if (selectedMake) {
                        const models = data.models[selectedMake];
                        models.forEach(model => {
                            const option = document.createElement("option");
                            option.value = model;
                            option.textContent = model;
                            modelSelect.appendChild(option);
                        });
                    }
                });
            })
            .catch(error => console.error('Error fetching car data:', error));
    }

    // Call this function when the page loads
    window.onload = getCarData;

    // Search for tire size based on car information
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

        // Get tire size for the selected vehicle
        getCarTireSize(make, model, year);

        // If the user has entered tire dimensions, show them as well
        if (width && aspect && diameter) {
            alert(`Searching for tires with dimensions: ${width}/${aspect}R${diameter}`);
            // Implement logic for tire search based on these dimensions
        }
    }

    // Fetch tire size for the selected vehicle
    function getCarTireSize(make, model, year) {
        const apiUrl = `https://api.tiredata.com/tire-size?make=${make}&model=${model}&year=${year}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.tireSize) {
                    alert(`Suggested tire size for ${make} ${model} (${year}): ${data.tireSize}`);
                    document.getElementById("tire-size").textContent = `Recommended Tire Size: ${data.tireSize}`;
                } else {
                    alert("No tire size data available for this vehicle.");
                }
            })
            .catch(error => {
                console.error("Error fetching tire size:", error);
                alert("There was an error fetching tire data. Please try again.");
            });
    }
</script>
