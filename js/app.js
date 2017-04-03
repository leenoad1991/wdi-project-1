//make first category of countries
//randomly select one when page loads
//.text in to question box
//switch statement to compare answer and question



// let timeRemaining = 20;
//  let timerIsRunning = false;
//  function startStopTimer() {
//    if(timerIsRunning) {
//      timerIsRunning = false;
//      return clearInterval(timerId);
//    }
//    timerIsRunning = true;
//    timerId = setInterval(() => {
//      timeRemaining--;
//      $timerScreen.text(timeRemaining);
//      if (timeRemaining === 0) {
//        console.log('stop');
//        clearInterval(timerId);
//        $timer.addClass('ringing');
//        setTimeout(() => {
//          $timer.removeClass('ringing');
//        }, 3000);
//      }
//    },1000);

// window.alert('Round 1. You must answer 3 questions correctly in 20 seconds to progress to round 2!. Good luck...');

var countriesAndCapitals = {
  'England': 'London',
  'Spain': 'Madrid'
  'France': 'Paris'
  'USA': 'Washington DC'
  'Germany': 'Berlin'
  'Australia': 'Canberra'
  'Italy': 'Rome'
  'Holland': 'Amsterdam'
  'Brazil': 'Brasilia'
  'Canada': 'Ottawa'
};

$(function() {

  const countries1 =  ['England', 'Spain', 'France', 'USA', 'Germany', 'Australia',  'Italy', 'Hollland', 'Brazil', 'Canada'];

  const $innerBox =   $('.innerBox');
  const answer =      ('$answerBox')

  function randomnumber () {
    return Math.floor(Math.random() * countries1.length);
  }
  $innerBox.text(countries1[randomnumber()]);

  //answer box text
  $('#textInput').keyup(function(){
    console.log($('#textInput').val());


    if ($('#textInput').val() === var pair = countriesAndCapitals["England"]) {
      console.log('winner');
    }
  });


// check value against a key value pair in an object
// var pair = countriesAndCapitals["England"]





});
