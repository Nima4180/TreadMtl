// Example of a cart array to store items
let cart = [];

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is currently empty.</p>';
        document.getElementById('cart-summary').innerHTML = '<p><strong>Total: $0</strong></p>';
    } else {
        let total = 0;

        // Loop through each cart item and add it to the display
        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Size: ${item.size}</p>
                    <p>Price: $${item.price}</p>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);

            total += item.price * item.quantity; // Calculate total price
        });

        // Update the cart total
        document.getElementById('cart-summary').innerHTML = `<p><strong>Total: $${total}</strong></p><button id="checkout-btn">Proceed to Checkout</button>`;
    }
}

// Function to update item quantity
function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    updateCart();
}

// Example of adding a sample item to the cart (replace with actual data)
function loadSampleItems() {
    addToCart({name: 'Tire Model A', size: '205/55R16', price: 100, image: 'tire1.jpg', quantity: 1});
    addToCart({name: 'Tire Model B', size: '225/45R17', price: 120, image: 'tire2.jpg', quantity: 2});
}

// Function to load tire data from JSON and add it to cart
function loadTiresFromJSON(tiresData) {
    tiresData.forEach(tire => {
        addToCart({
            name: tire.name,
            size: tire.size,
            price: tire.price,
            image: tire.image,
            quantity: 1
        });
    });
}

// Example tire data (replace with data from your tires.json or database)
const tiresData = [
    {name: 'Tire Model A', size: '205/55R16', price: 100, image: 'tire1.jpg'},
    {name: 'Tire Model B', size: '225/45R17', price: 120, image: 'tire2.jpg'},
    {name: 'Tire Model C', size: '235/50R18', price: 130, image: 'tire3.jpg'}
];

// Load sample items on page load
window.onload = function() {
    loadTiresFromJSON(tiresData); // You can replace this with dynamic loading from your tires.json
};
