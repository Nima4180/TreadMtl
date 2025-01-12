// Fetch car data and populate dropdown
fetch('assets/cars.json')
  .then(response => response.json())
  .then(data => {
    const carModelSelect = document.getElementById('carModel');

    // Populate car models dropdown
    data.forEach(car => {
      const option = document.createElement('option');
      option.value = car.carModel;
      option.textContent = car.carModel;
      carModelSelect.appendChild(option);
    });
  });

// Handle form submission to show tire options
document.getElementById("tireSearchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const carModel = document.getElementById("carModel").value;
  
  if (carModel) {
    fetch('assets/cars.json')
      .then(response => response.json())
      .then(cars => {
        const car = cars.find(car => car.carModel === carModel);
        if (car) {
          const tireSize = car.tireSize;
          displayTireOptions(tireSize);
        }
      });
  }
});

// Display tire options based on selected tire size
function displayTireOptions(tireSize) {
  fetch('assets/tires.json')
    .then(response => response.json())
    .then(tires => {
      const tireResultsDiv = document.getElementById('tireResults');
      tireResultsDiv.innerHTML = '';

      const filteredTires = tires.filter(tire => tire.size === tireSize);

      if (filteredTires.length > 0) {
        const tireList = document.createElement('ul');
        filteredTires.forEach(tire => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `${tire.tireModel} - ${tire.type} - ${tire.price}`;
          tireList.appendChild(listItem);
        });
        tireResultsDiv.appendChild(tireList);
      } else {
        tireResultsDiv.innerHTML = `<p>No tires found for size ${tireSize}.</p>`;
      }
    });
}
