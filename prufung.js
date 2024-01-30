const myArray = [
    {
        q: 'What is the capital of Austria?',
        a: ['Salzburg', 'Vienna', 'Graz', 'Berlin'],
        correct: 2,
    },
    {
        q: 'What is the capital of Romania?',
        a: ['Bucharest', 'Salzburg', 'Graz', 'Berlin'],
        correct: 1,
    },
    {
        q: 'What is the capital of Germany?',
        a: ['Bucharest', 'Salzburg', 'Graz', 'Berlin'],
        correct: 4,
    },
];

let currentQuestion = 1;

// Show Question
let showQuestion = function (qNumber) {
    let question = myArray[qNumber - 1].q;
    // console.log(question);
    $('.question').append(question);
};

// Show Answers
let showAnswers = function (index) {
    let answers = myArray[index - 1].a;
    // console.log(answer);
    $(answers).each(function (index, answer) {
        // console.log(index + 1); // answer is just a number
        // console.log(answer);
        $('.answers').append(
            `<button type="button" class="btn btn-primary" corect-answer=${
                index + 1
            } >${answer}</button><br>`
        );
    });
};

// Check Q+A
const checkAnswer = function (value) {
    let clickedAnswer = $(this).attr('corect-answer');
    let answerToCheck = myArray[value].correct;
    if (parseInt(clickedAnswer) === answerToCheck) console.log('Correct');
    else console.log('False');
};

const entryOne = function (number) {
    showQuestion(number);
    showAnswers(number);
};

$('.answers').delegate('button', 'click', checkAnswer(currentQuestion));
entryOne(currentQuestion);
