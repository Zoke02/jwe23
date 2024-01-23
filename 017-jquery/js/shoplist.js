let myList = [];

if (typeof Cookies.get('product_list') !== 'undefined') {
    myList = Cookies.get('product_list').split(',');
}

// if (localStorage.getItem()) {
// }

/*
$(myList).each(function (i, product) {
    console.log(product);
});
*/
const addNewProduct = function () {
    let value = $('#new-product').val();

    let filteredList = myList.filter(function (article) {
        return article.toLowerCase().includes(value.toLowerCase());
    });

    if (!filteredList.length) {
        myList.push(value);
        Cookies.set('product_list', myList, { expires: 365 });
        localStorage.setItem('product-list', JSON.stringify(myList));
        prependNewProduct(myList.length - 1, myList[myList.length - 1]);
    } else {
        $('#new-product').val('');
    }
    $('#new-product').val('').focus();
};

const addNewProductOnEnter = function (event) {
    if (event.keyCode == 13) {
        addNewProduct();
    }
};

$('#add-product').on('click', addNewProduct);
$('#new-product').on('keyup', addNewProductOnEnter);

const prependNewProduct = function (key, value) {
    // if (value !== '')
    $('#product-list').prepend(`

        <div class="form-check" data-product-id="${key}">
            <input
                class="form-check-input"
                type="checkbox"
                value="${value}"
                id="product-${key}"
            />
            <label class="form-check-label" for="product-${key}">
                ${value}
            </label>
        </div>
        `);
};

const createProductList = function () {
    $(myList).each(prependNewProduct);
};

createProductList(myList);

const showFilteredList = function (list) {
    $('#product-list').empty();
    $(list).each(prependNewProduct);
};

const filterList = function () {
    let value = $(this).val().toLowerCase();
    let filteredList = myList.filter(function (article) {
        return article.toLowerCase().includes(value);
    });

    showFilteredList(filteredList);
};

$('#add-product').on('click', filterList);
$('#new-product').on('keyup', filterList);

$('input.form-check-input').on('click', function () {
    let checkbox = $(this);
    console.log(checkbox.prop('checked'));

    if (checkbox.prop('checked') == true) {
    }
});

// Cookies.set('product_bought', [false, false, false, false]);

// $('[data-product-id]').each(function (index, product) {
//     let element = $(this);

//     if (element.attr('data-product-id') == 1) {
//         element.find('input.form-check-input').prop('checked', true);
//     }
// });

// $('input.form-check-input').each(function (index, input) {
//     if ($(input).attr('id') == 'product-' + 2) $(input).prop('checke0d', true);
// });

document.cookie = product_bought;
function setCookesToBought() {
    Cookes.set(product_bought);
}
