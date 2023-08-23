jQuery($ => {

    // Обрабатываем нажатие кнопки «Просмотр товара»
    $(document).on("click", ".read-one-product-button", function () {

        // Получаем ID товара
        const id = $(this).attr("data-id");
    });

});
// Чтение записи товара на основе данного идентификатора
$.getJSON("http://rest-api/api/product/read_one.php?id=" + id, data => {

    // Здесь будет кнопка для просмотра всех товаров
});
