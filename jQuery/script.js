// jQuery & Bootstrap

$(function () {
    const $input = $('#input');
    const $buttonAdd = $('#button-addon2');
    const $list = $('.list-items');
    let deleteItem;

    // console.log($checkbox.length);

    $buttonAdd.click(function () {
        addItem();
    });

    $input.keydown(function (e) {
        if (e.keyCode === 13) {
            addItem();
        }
    });

    function addItem() {
        if ($input.val().length > 0) {
            $list.append(
                `<div class="input-group mb-1">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <input type="checkbox" class="set-done">
                  </div>
                </div>
                <input type="text" class="input-item form-control" readonly value="${$input.val()}">
                <div class="input-group-append">
                    <button class="js_button-delete btn btn-outline-secondary" type="button" data-toggle="modal">Erase</button>
                </div>
              </div>
              `
            );
            $input.val('');
        }
    }

    $(document).on('change', '.set-done', function () {  //можно через родителя "body" или .list-item
        $(this).parents('.input-group').toggleClass('done'); //класс toggle добавляет или удаляет, это нужно что бы применить класс только к одному объекту
    });

    $(document).on('click', '.js_button-delete', function (e) {
        //console.log(e.target);
        deleteItem = e.target;
        $('#confirmModal').modal();
        //$(this).parents('.input-group').remove();
    });

    $('.confirmDelete').click(function () {
        if (deleteItem) {
            $(deleteItem).parents('.input-group').remove(); //если не найти родителя то функция удалит кнопку удалить
        }

        $('#confirmModal').modal('hide');
    });

    $('.list-items').sortable(
        {
            cursor: "all-scroll",
            cancel: null,
        }
    );
});