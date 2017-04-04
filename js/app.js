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
var $time = 30;


$(init);

function init() {
  $question = $('#question');
  $answer   = $('#answer');


  $('.start').on('click', () => pickRandomCountry());
  $('form').on('submit', compareAnswers);
}

function pickRandomCountry(countries=countriesAndCapitals) {
  selectedCountry = Object.keys(countries)[randomnumber()];
  answer = countries[selectedCountry];
  delete countries[selectedCountry];
  $('.question').html(selectedCountry);
}

function compareAnswers(e) {
  e.preventDefault();

  const inputValue = $('#answer').val();
  const userAnswer = inputValue[0].toUpperCase() + inputValue.slice(1);

  if (userAnswer === answer) {
    console.log('correct');
    score++;
    $('#scoreboard span').text(score);
    $('#answer').val('');

    checkUserScore();
  } else {
    console.log('wrong');
    $('#answer').val('');

    checkUserScore();
  }
}

function checkUserScore() {
  if (score === 5) {
    const $levelUp = $('<div class="levelUp">Level Up</div>');
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
  $('timer').text($time);
  $time -= 1;
  console.log(time);
  if ($time === 0) {
    clearInterval(counter);
  }
}
