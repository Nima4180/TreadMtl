// Simulated tire size data
const tireSizes = {
    "Toyota Corolla": ["205/55R16", "215/60R16"],
    "Honda Civic": ["195/65R15", "205/55R16"],
    "Ford Focus": ["205/50R17", "215/55R17"]
};

let cart = [];

// Display recommended tire sizes
function getTireSizes() {
    const carModel = document.getElementById("carModel").value;
    const sizes = tireSizes[carModel] || [];
    const tireSizesDiv = document.getElementById("tireSizes");

    tireSizesDiv.innerHTML = sizes.length
        ? sizes.map(size => `<p>Recommended Size: ${size}</p>`).join("")
        : "<p>No tire sizes available for this car model.</p>";
}

// Add to cart
function addToCart(tireName, quantity) {
    const existingItem = cart.find(item => item.name === tireName);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: tireName, quantity });
    }

    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("cart-count").innerText = count;
}
