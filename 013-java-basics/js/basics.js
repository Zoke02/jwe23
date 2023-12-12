console.log('Hier wird debugged!');

let myName = 'Alin1911'; // String: ""
let myAge = 32; // Integer: does not need ""
let myWeight = 70.1; // Float: does not need ""
let organicFood = false; // Boolean value = false/true

let myList = ['Brot', 'Milch', 'Wein']; // List/Aray

let dynamicHTML = 'If u use double quote'; // "<p style= \"\"></p>"";
let dynamicHTML2 = '<p style="color: red">Alin Nedelcu</p>';

document.body.innerHTML = dynamicHTML2;

let myShopList = function () {
    console.log(myList);
};



let getTextFromHtmlInput = function () {
    console.log(document.querySelector('input#newItem').value);
};
