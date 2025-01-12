document.getElementById("tireSearchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const carModel = document.getElementById("carModel").value;
  alert("Searching for tires for: " + carModel);
  // You can later link this to your tire database logic.
});
