jQuery($ => {

    // Обрабатываем нажатие кнопки «Просмотр товара»
    $(document).on("click", ".read-one-product-button", function () {

        // Получаем ID товара
        const id = $(this).attr("data-id");
    });

});