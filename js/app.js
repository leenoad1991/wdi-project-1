// TO DO
//
// timer
// Show that player progresses to level 2 when score hits 5
// Reset/show that player loses when time runs out.
// push countries in to another array so the don't re-appear
// Get cursor to start in box.
// timer to start on 'go'
// start level 2 - display something to say it's level 2, reset timer, play (countries and capitals2)
// press enter rather than click button (attempted on line 42)

$(init);

var countriesAndCapitals = {
  'England': 'London',
  'Spain': 'Madrid',
  'France': 'Paris',
  'USA': 'Washington DC',
  'Germany': 'Berlin',
  'Australia': 'Canberra',
  'Italy': 'Rome',
  'Holland': 'Amsterdam',
  'Brazil': 'Brasilia',
  'Canada': 'Ottawa',
  'China': 'Beijing',
  'Japan': 'Tokyo',
  'Switerland': 'Bern',
  'Denmark': 'Copenhagen',
  'Greece': 'Athens',
  'Ireland': 'Dublin',
  'Jamaica': 'Kingston',
  'Mexico': 'Mexico City',
  'Norway': 'Oslo',
  'Sweden': 'Stockholm'
};

let $main;
let $start;
let $form;
let $controls;
let $question;
let $answer;
let $message;
let $timer;
let $scoreboard;

let counter;
let answer;
let selectedCountry;
let score = 0;
let time  = 10;

function init() {
  $main       = $('main');
  $question   = $('.question');
  $start      = $('.start');
  $form       = $('form');
  $controls   = $('.controls');
  $answer     = $('input');
  $message    = $('.message');
  $timer      = $('.timer span');
  $scoreboard = $('.scoreboard n');

  $start.on('click', start);
  $form.on('submit', compareAnswers);
}

function start() {
  $main.show();
  $start.hide();
  $controls.show();
  $message.hide();

  counter = setInterval(timer, 1000);
  pickRandomCountry();
}

function timer() {
  time -= 1;
  checkWin();

  if (time === 0) {
    clearInterval(counter);
  }

  $timer.html(time);
}

function pickRandomCountry() {
  selectedCountry = Object.keys(countriesAndCapitals)[randomnumber()];
  answer = countriesAndCapitals[selectedCountry];

  // Used for debugging the game
  console.log(selectedCountry, answer);

  delete countriesAndCapitals[selectedCountry];
  $question.html(`What is the captal of ${selectedCountry}?`);
}

function compareAnswers(e) {
  e.preventDefault();

  const inputValue = $answer.val();
  const userAnswer = inputValue;

  if (userAnswer === answer) {
    score++;
    $scoreboard.text(score);
  }

  $answer.val('');
  pickRandomCountry();
}

function randomnumber() {
  return Math.floor(Math.random() * 10);
}

function checkWin() {
  if ((time === 0) && (score <= 4)) {
    $main.hide();
    $start.show();
    $controls.hide();
    $message.show();
    $message.text('Unlucky, time ran out. Play again?');
  }
}
