jQuery($ => {

    // Показывать HTML форму при нажатии кнопки «Обновить товар»
    $(document).on("click", ".update-product-button", function () {

        // Получаем ID товара
        const id = $(this).attr("data-id");
    });

    // Здесь будет обработчик для обновления товара
});
