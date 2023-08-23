jQuery(($) => {

    // Показать список товаров при первой загрузке
    showProducts();
});

// При нажатии кнопки
$(document).on("click", ".read-products-button", () => {
    showProducts();
});