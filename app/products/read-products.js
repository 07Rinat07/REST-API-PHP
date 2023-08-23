jQuery(($) => {

    // Показать список товаров при первой загрузке
    showProducts();
});
// При нажатии кнопки
$(document).on("click", ".read-products-button", () => {
    showProducts();
});

// Функция для показа списка товаров
function showProducts() {
    // Получить список товаров из API
    $.getJSON("http://rest-api/api/product/read.php", data => {

    });
}
