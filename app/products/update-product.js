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

            // Загрузка списка категорий
            $.getJSON("http://rest-api/api/category/read.php", data => {

                // Строим список выбора
                // Перебор полученного списка данных
                let categories_options_html = `<select name="category_id" class="form-control">`;

                $.each(data.records, (key, val) => {

                    // Опция предварительного выбора - это идентификатор категории
                    if (val.id == category_id) {
                        categories_options_html += `<option value="` + val.id + `" selected>` + val.name + `</option>`;
                    } else {
                        categories_options_html += `<option value="` + val.id + `">` + val.name + `</option>`;
                    }
                });

                categories_options_html += `</select>`;

                // Здесь будет HTML для обновления товара
            });
        });
    });

    // Здесь будет обработчик для обновления товара
});
