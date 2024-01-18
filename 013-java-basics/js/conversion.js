let myNumber = 123;
let myString = '5 22 2024'; // Works if it is - or , or . or even just space
let myArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

let myObject = {
    type: 'Car',
    brand: 'Audi',
    kw: '334',
    color: 'Red',
    price: '120.000,0',
};

let myObject2 = {
    type: 'Car',
    brand: 'Opel',
    kw: '90.00',
    color: 'Blue',
    price: '20.000,05',
};

console.log(
    'Transaction succes from Credit Card with number:' + ' ' + myNumber
);

console.log('The bill has been paid on', myArray[3]);

console.log(
    'My car has ' + myObject.kw + ' kw and the brand is ' + myObject.brand
);

console.log('Kw diference is', myObject.kw - myObject2.kw);

// Teacher Solution
myObject.price = Number(myObject.price.replace('.', '').replace(',', '.'));
myObject2.price = Number(myObject2.price.replace('.', '').replace(',', '.'));
console.log(
    'Teacher solution price diference is',
    myObject.price - myObject2.price,
    '€'
);

console.log(new Date(myString));

let price = '€ 1.433,08';
console.log(price.substring(2, price.length));

let price2 = 'Euro 7.247,00 Euro';
// console.log(price2.search('euro'));
console.log(price2.replaceAll('Euro', '').replaceAll(' ', ''));

let stringToInfo = 'Name;Alin;Land;AT;Phone;0655690';
console.log(stringToInfo.split(';'));

let serverResponse = '["Monday","Tuesday","Wednesday"]';
console.log(JSON.parse(serverResponse));

let serverResponse2 = '{"test": 1, "email": "test@test.com", "zip": 5600}';
console.log(JSON.parse(serverResponse2));

serverResponse2 = JSON.parse(serverResponse2);

console.log(serverResponse2.email);
