jQuery($ => {

    // Будет работать, если была нажата кнопка удаления
    $(document).on("click", ".delete-product-button", function () {

        // Получение ID товара
        const product_id = $(this).attr("data-id");
    });
});