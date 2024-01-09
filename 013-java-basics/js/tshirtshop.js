const PRODUCT_DATA = {
    id: 234,
    artNr: 989898,
    title: 'T-Shirt',
    variants: {
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Red', 'Green', 'White'],
    },
    price: 79.9,
    productImage: 'img/ProductImage123.jpg',
    description: 'A small text to describe the product',
};

document.querySelector('#artNr').innerHTML = PRODUCT_DATA.artNr;
document.querySelector('#titleProduct').innerHTML = PRODUCT_DATA.title;
document.querySelector('#price').innerHTML = PRODUCT_DATA.price
    .toFixed(2)
    .toString()
    .replace('.', ',');
// document.querySelector('#price').innerHTML = PRODUCT_DATA.price
//     .toFixed(2)              79.9 => 79.90
//     .toString()              79.90 => "79.90"
//     .replace('.', ',');      "79.90" => "79,90"
document.querySelector('#descriptionProduct').innerHTML =
    PRODUCT_DATA.description;
document
    .querySelector('#imageProduct')
    .setAttribute('src', PRODUCT_DATA.productImage);
// document.querySelector('#imageProduct').attributes() = PRODUCT_DATA.productImage;

let htmlOutput = '';
PRODUCT_DATA.variants.sizes.forEach((size) => {
    htmlOutput += `<option value="${size}">${size}</option>`;
});
document.querySelector('#prod-size').innerHTML = htmlOutput;

htmlOutput = '';
PRODUCT_DATA.variants.colors.forEach((color) => {
    htmlOutput += `<option value="${color}">${color}</option>`;
});
document.querySelector('#prod-color').innerHTML = htmlOutput;
