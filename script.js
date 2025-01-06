<script>
    // Fetch car makes, models, and years from an API
    function getCarData() {
        const apiUrl = "https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes"; // Example API to fetch car makes
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const yearSelect = document.getElementById("year");
                const makeSelect = document.getElementById("make");
                const modelSelect = document.getElementById("model");

                // Populate the make select dropdown
                data.Makes.forEach(make => {
                    const option = document.createElement("option");
                    option.value = make.make_id;
                    option.textContent = make.make_display;
                    makeSelect.appendChild(option);
                });

                // Listen for the change of make to fetch models dynamically
                makeSelect.addEventListener("change", function () {
                    const selectedMakeId = makeSelect.value;
                    modelSelect.innerHTML = ''; // Clear existing options

                    if (selectedMakeId) {
                        // Fetch models for the selected make
                        fetchModels(selectedMakeId);
                    }
                });
            })
            .catch(error => console.error('Error fetching car makes:', error));
    }

    // Fetch models for the selected make
    function fetchModels(makeId) {
        const modelApiUrl = `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make_id=${makeId}`;
        fetch(modelApiUrl)
            .then(response => response.json())
            .then(data => {
                const modelSelect = document.getElementById("model");

                // Populate the model select dropdown
                data.Models.forEach(model => {
                    const option = document.createElement("option");
                    option.value = model.model_id;
                    option.textContent = model.model_name;
                    modelSelect.appendChild(option);
                });

                // Populate the year select based on the selected make
                fetchYears(makeId);
            })
            .catch(error => console.error('Error fetching models:', error));
    }

    // Fetch years for the selected make
    function fetchYears(makeId) {
        const yearApiUrl = `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears&make_id=${makeId}`;
        fetch(yearApiUrl)
            .then(response => response.json())
            .then(data => {
                const yearSelect = document.getElementById("year");

                // Clear existing year options
                yearSelect.innerHTML = '';

                // Populate the year select dropdown
                data.Years.forEach(year => {
                    const option = document.createElement("option");
                    option.value = year;
                    option.textContent = year;
                    yearSelect.appendChild(option);
                });
            })
            .catch(error => console.error('Error fetching years:', error));
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
        // Here, you would call an actual API to get tire sizes, but for now, we simulate with a fixed response
        const tireSize = "225/45R17"; // Placeholder tire size

        alert(`Suggested tire size for ${make} ${model} (${year}): ${tireSize}`);
        document.getElementById("tire-size").textContent = `Recommended Tire Size: ${tireSize}`;
    }
</script>
