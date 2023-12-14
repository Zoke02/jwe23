let temp = 24;
let display = document.querySelector('#display');

display.innerHTML = temp;

let changeTemp = function (params) {
    if (params == 'up') {
        temp++;
    }

    if (params == 'down') {
        temp--;
    }
    console.log(temp);
    display.innerHTML = temp;
};
