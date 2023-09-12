// script.js
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    const selectedChocolates = document.getElementById("selected-chocolates");
    const totalPrice = document.getElementById("total-price");
    const addToCartButton = document.getElementById("add-to-cart");

    let totalPriceValue = 0;

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", () => {
            const quantity = parseInt(quantityInputs[index].value);
            const pricePerItem = 2.50; // Replace with actual prices
            const itemTotalPrice = quantity * pricePerItem;

            if (checkbox.checked && itemTotalPrice > 0 && totalPriceValue + itemTotalPrice <= 20) {
                const listItem = document.createElement("li");
                listItem.textContent = `Chocolate ${index + 1} x${quantity}`;
                selectedChocolates.appendChild(listItem);
                totalPriceValue += itemTotalPrice;
            } else {
                checkbox.checked = false;
            }

            totalPrice.textContent = totalPriceValue.toFixed(2);
        });
    });

    addToCartButton.addEventListener("click", () => {
        // Send the selected items and their quantities to the server for processing and cart management.
        // You'll need server-side logic for this part.
    });
});
