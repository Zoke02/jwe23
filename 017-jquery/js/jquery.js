// document.querySelector('#idname').innerHTML = 'Test - Plain JavaScript';

// $('#idname').html('Test - Jquery powered javaScript');

// $('ul > li').eq(3);
// $('ul > li').eq(3).text('Ziele 4')

let myInterval = window.setInterval(function () {
    const ticketSaleStart = new Date('2024-01-11T20:36:00');
    const now = new Date();

    console.log(now >= ticketSaleStart);
    console.log(new Date().getSeconds());

    if (now >= ticketSaleStart) {
        $('#tickets').show();
        clearInterval(myInterval);
    } else {
        $('#tickets').hide();
    }
}, 1000);
