
//Task 2:Configure the JavaScript for Drawing Context
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

//Task 3:Implement Shape Drawing Logic
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    canvas.addEventListener('mousedown', (event) => {
        drawing = true;
        [lastX, lastY] = getMousePosition(event);
    });