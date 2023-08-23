jQuery(($) => {

    // Показать html форму при нажатии кнопки «создать товар»
    $(document).on("click", ".create-product-button", () => {

        // Загрузка списка категорий
        $.getJSON("http://rest-api/api/category/read.php", (data) => {

        });
    });

    // Здесь будет обработчик «Создать форму товара»
});