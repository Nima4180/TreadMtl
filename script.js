// Simulated tire size data based on car model
const tireSizes = {
    'Toyota Corolla': ['205/55R16', '215/60R16'],
    'Honda Civic': ['195/65R15', '205/55R16'],
    'Ford Focus': ['205/50R17', '215/55R17']
};

// Add tire to the cart
let cart = [];

function addToCart(tireName, quantity) {
    // Check if tire already in the cart
    const existingTire = cart.find(item => item.name === tireName);

    if (existingTire) {
        existingTire.quantity += quantity;
    } else {
        cart.push({ name: tireName, quantity });
    }
    updateCartCount();
}

// Update the cart count in the header
function updateCartCount() {
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Function to fetch tire sizes based on car model selection
function getTireSizes() {
    const carModel = document.getElementById('carModel').value;

    const sizes = tireSizes[carModel] || [];
    const tireSizesDiv = document.getElementById('tireSizes');
    tireSizesDiv.innerHTML = ''; // Clear previous results

    if (sizes.length > 0) {
        sizes.forEach(size => {
            const sizeItem = document.createElement('p');
            sizeItem.innerText = `Recommended Size: ${size}`;
            tireSizesDiv.appendChild(sizeItem);
        });
    } else {
        tireSizesDiv.innerHTML = '<p>No tire sizes available for this car model.</p>';
    }
}
