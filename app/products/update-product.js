jQuery($ => {

    // Показывать HTML форму при нажатии кнопки «Обновить товар»
    $(document).on("click", ".update-product-button", function () {

        // Получаем ID товара
        const id = $(this).attr("data-id");
        // Читаем одну запись на основе данного идентификатора товара
        $.getJSON("http://rest-api/api/product/read_one.php?id=" + id, data => {

            // Значения будут использоваться для заполнения нашей формы
            const name = data.name;
            const price = data.price;
            const description = data.description;
            const category_id = data.category_id;
            const category_name = data.category_name;

            // Здесь будет загрузка списка категорий
        });
    });

    // Здесь будет обработчик для обновления товара
});
