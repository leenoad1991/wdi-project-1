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
  'Canada': 'Ottawa'
};

var countriesAndCapitals2 = {
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


let $question;
let answer;
let selectedCountry;
let count = 1;
let score = 0;
const countryArray = [];
var $time = 40;


function init() {
  let $question = $('#question');
  let $answer   = $('#answer');


  $('.start').on('click', () => pickRandomCountry());
  $('#submit').on('submit', compareAnswers);
}

function pickRandomCountry(countries=countriesAndCapitals) {
  selectedCountry = Object.keys(countries)[randomnumber()];
  answer = countries[selectedCountry];
  console.log(answer);
  delete countries[selectedCountry];
  console.log(countries);
  $('.question').html(selectedCountry);
}

function compareAnswers(e) {
  console.log('clicked');
  e.preventDefault();

  const inputValue = $('#answer').val();
  const userAnswer = inputValue;

  // [0].toUpperCase() + inputValue.slice(1);

  if (userAnswer === answer) {
    score++;
    $('#scoreboard span').text(score);
    $('#answer').val('');

    checkUserScore();
  } else {
    $('#answer').val('');

    checkUserScore();
  }
}

function checkUserScore() {
  if (score === 1) {
    const $levelUp = $('.levelUp');
    console.log($levelUp);
    const $body = $('body');
    $body.append($levelUp);
    pickRandomCountry(countriesAndCapitals2);

  } else {
    pickRandomCountry();
  }
}

function randomnumber() {
  return Math.floor(Math.random() * 10);
}

var counter = setInterval(timer, 1000);
function timer() {
  $time -= 1;
  $checkWin();
  if ($time === 0) {
    clearInterval(counter);
  }
  $('.timer').html($time);
}

function $checkWin() {
  if (($time === 0) && (score <= 4)) {
    $('#alert-loser').text('Unlucky, time ran out. Play again?');
  }
}



// /to do
// timer
// Show that player progresses to level 2 when score hits 5
// Reset/show that player loses when time runs out.
// push countries in to another array so the don't re-appear
// Get cursor to start in box.
// timer to start on 'go'
// start level 2 - display something to say it's level 2, reset timer, play (countries and capitals2)
// press enter rather than click button (attempted on line 42)
