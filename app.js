
//Task 2: Add event listener for Product Selection
document.addEventListener(' () => {
    const productSelect = document.getElementById('productSelect');
    const quantityInput = document.getElementById('quantityInput');
    const priceDisplay = document.getElementById('priceDisplay');

    function updatePrice() {
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const quantity = parseInt(quantityInput.value, 10);
    }
        productSelect.addEventListener('change', updatePrice);
        quantityInput.addEventListener('input', updatePrice);
});
