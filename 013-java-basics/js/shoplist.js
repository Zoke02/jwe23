let myList = []; // It is empty and later it will be written

// myList.push('Bananas');

let newElement = document.querySelector('#newElement');

let addNewElement = function () {
    let newElementValue = newElement.value;
    console.log(newElementValue);
    myList.push(newElementValue);
    getAllElementsFromList();
};

let getAllElementsFromList = function () {
    let htmlOutput = '';
    myList.forEach((element) => {
        htmlOutput += element + '<br>';
    });
    document.querySelector('#myListOutput').innerHTML = htmlOutput;
};
