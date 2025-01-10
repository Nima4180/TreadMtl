// Function to add tire to cart
function addToCart(tireId) {
    const tireData = {
        1: { id: 1, name: "All-Season Tire", size: "205/55R16", price: 120, image: "tire1.jpg", availableQuantity: 100 },
        2: { id: 2, name: "Winter Tire", size: "215/60R16", price: 150, image: "tire2.jpg", availableQuantity: 80 },
        3: { id: 3, name: "Summer Tire", size: "225/50R17", price: 180, image: "tire3.jpg", availableQuantity: 60 }
    };

    const tire = tireData[tireId];
    const quantity = document.getElementById(`quantity-${tireId}`).value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.id === tireId);
    if (existingItem) {
        existingItem.quantity += parseInt(quantity);
    } else {
        cart.push({ ...tire, quantity: parseInt(quantity) });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${tire.name} added to your cart.`);
    updateCartCount();
}

// Function to update the cart count in the header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to render cart items on the cart page
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>Size: ${item.size}</p>
            <p>Price: $${item.price}</p>
            <p>Quantity: <input type="number" value="${item.quantity}" min="1" max="${item.availableQuantity}" onchange="updateQuantity(${item.id}, this.value)"></p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    cartTotalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
}

// Function to update the quantity of an item in the cart
function updateQuantity(tireId, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === tireId);
    if (item) {
        item.quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

// Function to remove an item from the cart
function removeFromCart(tireId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== tireId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function for checkout (simplified placeholder)
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before proceeding.');
    } else {
        // Placeholder for actual checkout logic
        alert('Proceeding to checkout...');
    }
}

// Function to switch language
function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = languages[language][key];
    });
}

// Language dictionary
const languages = {
    en: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        tireList: 'Tire List',
        searchTires: 'Search Tires',
        addToCart: 'Add to Cart',
        checkout: 'Checkout',
    },
    fr: {
        home: 'Accueil',
        about: 'À propos',
        contact: 'Contact',
        tireList: 'Liste des pneus',
        searchTires: 'Rechercher des pneus',
        addToCart: 'Ajouter au panier',
        checkout: 'Passer à la caisse',
    }
};

// Initialize the cart count and render cart on page load
window.onload = function () {
    updateCartCount();
    if (document.getElementById('cart-items')) {
        renderCart();
    }
};
