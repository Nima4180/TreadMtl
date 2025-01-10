// Function to load cart items from localStorage
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    displayCartItems(cart);
}

// Function to display cart items on the cart page
function displayCartItems(cart) {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear existing items

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <p>${item.name} - ${item.size}</p>
                <p>Price: $${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            `;
            cartList.appendChild(itemElement);
        });
    }

    // Update cart count in the header
    updateCartLink(cart);
}

// Function to remove an item from the cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart)); // Update cart in localStorage
    displayCartItems(cart); // Reload the cart
}

// Function to update the cart count in the cart link (header)
function updateCartLink(cart) {
    document.getElementById("cartLink").innerText = `Cart (${cart.length})`;
}

// Function to add an item to the cart
function addToCart(name, size, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: name, size: size, price: price });
    localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart in localStorage

    // Update cart count in the header
    updateCartLink(cart);
}

// Function to proceed to checkout (for now just a placeholder)
function proceedToCheckout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length > 0) {
        alert("Proceeding to checkout...");
        // Here you would redirect to a checkout page
    } else {
        alert("Your cart is empty.");
    }
}

// Call loadCart when the page is loaded to display the current cart items
window.onload = loadCart;

// Example: Adding a tire to the cart (you would call this function when the user clicks on 'Add to Cart' button)
function exampleAddToCart() {
    addToCart('All-Season Tire', '205/55R16', 120.99); // Sample data: name, size, price
}
