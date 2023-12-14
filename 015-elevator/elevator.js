let currentFloor = 0;

let floors = ['ug', 0, 1, 2, 3];

let elevator = document.querySelector('#elevator');

// elevator.classList.add('floor-1');

let goToFloor = function (floor) {
    elevator.classList.replace('floor-' + currentFloor, 'floor-' + floor);
    currentFloor = floor;
    console.log(currentFloor);
};

let showControls = function () {
    let htmlOutput = '';

    floors.forEach((floor) => {
        htmlOutput += `
        <button class="btn btn-primary" onclick="goToFloor('${floor}')">
        ${floor}
        </button>
        `;
        document.querySelector('#controls').innerHTML = htmlOutput;
        console.log(htmlOutput);
    });
};
showControls();
