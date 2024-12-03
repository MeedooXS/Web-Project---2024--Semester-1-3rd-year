const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        const productId = this.closest(".product").dataset.id;
        addToCart(productId);
    });
});

function addToCart(productId) {
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Cart page
if (document.getElementById("cart-items-container")) {
    const cartItemsContainer = document.getElementById("cart-items-container");
    cartItemsContainer.innerHTML = cart.map(id => {
        return `<div class="cart-item">Product ID: ${id}</div>`; 
    }).join('');
}

// Checkout page
if (document.querySelector(".checkout-form")) {
    document.querySelector(".checkout-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Purchase Complete!");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    });
}
