let myVaiable;

myVaiable = 'Monday';

const MY_CONST = 5;

console.log(myVaiable);
console.log(MY_CONST);

let myArray = ['Milch', 'Zucker'];
console.log(myArray[0]);
myArray[0] = 'Bier';
console.log(myArray[0]);

const MY_ARRAY2 = ['Butter,', 'Honeig', 'Brot'];
MY_ARRAY2[0] = 'Senf';
// MY_ARRAY2 = 1; u cant change a constant array into a int/string/etc
MY_ARRAY2[3] = 'Majo';
MY_ARRAY2[1] = 1;

let myObject = {
    name: 'Nedelcu Alin',
    alter: 32,
    langueges: ['Deutsch', 'English', 'JavaScript', 'PHP', 'Python'],
    greet: function () {
        window.alert('Hi!');
    },
};

console.log(myObject.name);

let myCart = [
    {
        artNumber: '0123123',
        name: 'Drink',
        price: 1.5,
        ammount: 25,
    },
    {
        artNumber: '0123123',
        name: 'Sandwitch',
        price: 2.5,
        ammount: 25,
    },
];

console.log(myCart);

const PRODUCT_DATA = {
    id: 234,
    artNr: 989898,
    title: 'T-Shirt',
    variants: {
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'Red', 'Green', 'White'],
    },
    price: 79.99,
    productImage: 'ProductImage123.jpg',
};

console.lot();
