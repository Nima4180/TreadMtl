// Tire data stored as an array of objects (You can also fetch this from a JSON file)
const tireData = [
    {
        "id": 1,
        "name": "All-Season Tire",
        "size": "205/55R16",
        "image": "tire1.jpg",
        "price": 120,
        "compatibleCars": ["Toyota Corolla", "Honda Civic", "Ford Focus"],
        "performance": "Great for year-round driving, offering a balance of performance and longevity."
    },
    {
        "id": 2,
        "name": "Winter Tire",
        "size": "215/60R16",
        "image": "tire2.jpg",
        "price": 150,
        "compatibleCars": ["BMW 3 Series", "Audi A4", "Mercedes-Benz C-Class"],
        "performance": "Designed for cold, icy conditions, providing maximum grip during the winter months."
    },
    {
        "id": 3,
        "name": "Summer Tire",
        "size": "225/50R17",
        "image": "tire3.jpg",
        "price": 180,
        "compatibleCars": ["Nissan Altima", "Honda Accord", "Hyundai Sonata"],
        "performance": "High-performance tire for sporty vehicles, offering enhanced handling and speed."
    }
];

// Function to search tires based on size entered by the user
function searchTires() {
    const width = document.getElementById('width').value.trim();
    const aspect = document.getElementById('aspect').value.trim();
    const diameter = document.getElementById('diameter').value.trim();

    // Construct the search size in the format: width/aspectRdiameter
    const searchSize = `${width}/${aspect}R${diameter}`;

    // Filter tires based on the entered size
    const matchingTires = tireData.filter(tire => tire.size === searchSize);

    // Render the matching tires or show a message if none are found
    const tireList = document.getElementById('tire-list');
    tireList.innerHTML = ''; // Clear any previous results

    if (matchingTires.length === 0) {
        tireList.innerHTML = "<p>No tires found for the specified size.</p>";
    } else {
        matchingTires.forEach(tire => {
            const tireItem = document.createElement('div');
            tireItem.classList.add('tire-item');
            tireItem.innerHTML = `
                <img src="${tire.image}" alt="${tire.name}">
                <h4>${tire.name}</h4>
                <p>Size: ${tire.size}</p>
                <p>Price: $${tire.price}</p>
                <p>Compatible Cars: ${tire.compatibleCars.join(', ')}</p>
                <p>Performance: ${tire.performance}</p>
                <button onclick="addToCart(${tire.id})">Add to Cart</button>
            `;
            tireList.appendChild(tireItem);
        });
    }
}

// Function to add tire to the shopping cart
function addToCart(tireId) {
    const tire = tireData.find(tire => tire.id === tireId);
    if (tire) {
        const quantity = 1; // Default quantity for adding to cart
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === tireId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...tire, quantity: quantity });
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${tire.name} added to your cart.`);
        updateCartCount();
    }
}

// Function to update the cart item count in the header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Initialize the cart count when the page loads
window.onload = function () {
    updateCartCount();
};

// Optionally, create a function to handle the checkout page
function viewCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDetails = document.getElementById('cart-details');
    cartDetails.innerHTML = ''; // Clear any existing cart details

    if (cart.length === 0) {
        cartDetails.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>Size: ${item.size}</p>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartDetails.appendChild(cartItem);
        });
    }
}

// Function to remove an item from the cart
function removeFromCart(tireId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== tireId);

    // Update localStorage with the new cart
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartCount();
    viewCart(); // Refresh the cart details page
}
