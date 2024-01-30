const myArray = [
    {
        q: 'What is the capital of Austria?',
        a: ['Salzburg', 'Vienna', 'Graz', 'Berlin'],
        correct: 1,
    },
    {
        q: 'What is the capital of Romania?',
        a: ['Bucharest', 'Salzburg', 'Graz', 'Berlin'],
        correct: 0,
    },
    {
        q: 'What is the capital of Germany?',
        a: ['Bucharest', 'Salzburg', 'Graz', 'Berlin'],
        correct: 3,
    },
];

// Show Question
let showQuestion = function (index) {
    let question = myArray[index].q;
    $('#question').text(question);
};
showQuestion(0);

// Show Answers
let showAnswers = function (index) {
    let answers = myArray[index].a;
    $(answers).each(function (index, value) {
        $('#answers').append(
            `<button type="button" class="btn btn-primary" answer-nr=${index}>${value}</button><br>`
        );
    });
};
showAnswers(0);

// Check if correct

let checkIfCorrect = function () {};
