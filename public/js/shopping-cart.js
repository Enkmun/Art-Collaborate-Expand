
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the product list and cart items elements
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');

    // Mock products data
    const products = [
        { id: 1, name: 'Product 1', price: 10 }
    ];

    // Display products
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(li);
    });

    // Add event listener for add to cart buttons
    productList.addEventListener('click', function (event) {
        // Check if the clicked element has the class 'add-to-cart-btn'
        if (event.target.classList.contains('add-to-cart-btn')) {
            // Get the product ID from the data-id attribute
            const productId = parseInt(event.target.getAttribute('data-id'));
            // Find the product with the corresponding ID
            const product = products.find(p => p.id === productId);
            // If the product exists, add it to the cart
            if (product) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${product.name} - $${product.price}</span>
                    <button class="remove-from-cart-btn" data-id="${product.id}">Remove</button>
                `;
                cartItems.appendChild(li);
            }
        }
    });

    // Add event listener for remove from cart buttons
    cartItems.addEventListener('click', function (event) {
        // Check if the clicked element has the class 'remove-from-cart-btn'
        if (event.target.classList.contains('remove-from-cart-btn')) {
            // Get the product ID from the data-id attribute
            const productId = parseInt(event.target.getAttribute('data-id'));
            // Get the parent element (list item) of the clicked button
            const liToRemove = event.target.parentElement;
            // Remove the list item from the cart
            liToRemove.remove();
        }
    });

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', function () {
        // Get all cart items
        const cartItemsList = cartItems.querySelectorAll('li');
        // If the cart is empty, display an alert message
        if (cartItemsList.length === 0) {
            alert('Your cart is empty. Add some items before checking out.');
        } else {
            // If the cart is not empty, display a thank you message and clear the cart
            alert('Thank you for your purchase!');
            cartItems.innerHTML = ''; // Clear cart after checkout
        }
    });
});
