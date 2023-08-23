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
    // HTML для списка товаров
    let read_products_html = `

    <!-- При нажатии загружается форма создания товара -->
    <div id="create-product" class="btn btn-primary pull-right m-b-15px create-product-button">
        <span class="glyphicon glyphicon-plus"></span> Создание товара
    </div>
    <!-- Таблица товаров -->
<table class="table table-bordered table-hover">

    <!-- Создание заголовков таблицы -->
    <tr>
        <th class="w-15-pct">Название</th>
        <th class="w-10-pct">Цена</th>
        <th class="w-15-pct">Категория</th>
        <th class="w-25-pct text-align-center">Действие</th>
    </tr>\`;

    // Здесь будут строки

read_products_html += \`</table>\`;
}
