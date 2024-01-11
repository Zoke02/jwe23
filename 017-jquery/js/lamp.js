const settings = {
    states: [
        '0', //Red
        '01', //Red+Yellow
        '2', //Green
        '1', //Yellow
    ],
    state: '2',
    duration: {
        red: 10,
        green: 5,
    },
};

const fromGreenToRed = function () {
    window.setTimeout(function () {
        settings.state = settings.states[3];
        window.setTimeout(function () {
            settings.state = settings.states[0];
            window.setTimeout(function () {
                window.setTimeout(fromRedToGreen, settings.duration.red * 1000);
            });
        }, 1000);
    }, 1000);
};

const fromRedToGreen = function () {
    window.setTimeout(function () {
        settings.state = settings.states[1];
        window.setTimeout;
        (function () {
            settings.state = settings.states[2];
            window.setTimeout(fromGreenToRed, settings.duration.red * 1000);
        }),
            1000;
    }, 1000);
};

window.setInterval(function () {
    $('#lamp').text(settings.state);
}, 1000);

$('#lamp').css('background-color', 'red');
