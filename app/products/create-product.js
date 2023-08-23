jQuery(($) => {

    // Показать html форму при нажатии кнопки «создать товар»
    $(document).on("click", ".create-product-button", () => {
        // Перебор возвращаемого списка данных и создание списка выбора
        let categories_options_html=`<select name="category_id" class="form-control">`;

        $.each(data.records, (key, val) => {
            categories_options_html+=`<option value="` + val.id + `">` + val.name + `</option>`;
        });

        categories_options_html += `</select>`;

        // Загрузка списка категорий
        $.getJSON("http://rest-api/api/category/read.php", (data) => {

        });
    });

    // Здесь будет обработчик «Создать форму товара»
});