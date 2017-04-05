$(init);

var countriesAndCapitals = {
  Afghanistan:	'Kabul',
  Albania:	'Tirana',
  Algeria:	'Algiers',
  Andorra:	'Andorra la Vella',
  Angola:	'Luanda',
  Antigua_and_Barbuda:	'Saint John\'s',
  Argentina:	'Buenos Aires',
  Armenia:	'Yerevan',
  Australia:	'Canberra',
  Austria:	'Vienna',
  Azerbaijan:	'Baku',
  Bahamas:	'Nassau',
  Bahrain:	'Manama',
  Bangladesh:	'Dhaka',
  Barbados:	'Bridgetown',
  Belarus:	'Minsk',
  Belgium:	'Brussels',
  Belize:	'Belmopan',
  Benin:	'Porto-Novo',
  Bhutan:	'Thimphu',
  Bolivia:	'Sucre',
  Bosnia_and_Herzegovina:	'Sarajevo',
  Botswana:	'Gaborone',
  Brazil:	'Brasilia',
  Brunei:	'Bandar Seri Begawan',
  Bulgaria:	'Sofia',
  Burkina_Faso:	'Ouagadougou',
  Burundi:	'Bujumbura',
  Cabo_Verde:	'Praia',
  Cambodia:	'Phnom Penh',
  Cameroon:	'Yaounde',
  Canada:	'Ottawa',
  Central_African_Republic:	'Bangui',
  Chad:	'N\'Djamena',
  Chile:	'Santiago',
  China:	'Beijing',
  Colombia:	'Bogotá',
  Comoros:	'Moroni',
  Democratic_Republic_of_the_Congo:	'Kinshasa',
  Republic_of_the_Congo:	'Brazzaville',
  Costa_Rica:	'San Jose',
  Cote_dIvoire:	'Yamoussoukro',
  Croatia:	'Zagreb',
  Cuba:	'Havana',
  Cyprus:	'Nicosia',
  Czech_Republic:	'Prague',
  Denmark:	'Copenhagen',
  Djibouti:	'Djibouti (city)',
  Dominica:	'Roseau',
  Dominican_Republic:	'Santo Domingo',
  Ecuador:	'Quito',
  Egypt:	'Cairo',
  El_Salvador:	'San Salvador',
  Equatorial_Guinea:	'Malabo ',
  Eritrea:	'Asmara',
  Estonia:	'Tallinn',
  Ethiopia:	'Addis Ababa',
  Fiji:	'Suva',
  Finland:	'Helsinki',
  France:	'Paris',
  Gabon:	'Libreville',
  Gambia:	'Banjul',
  Georgia:	'Tbilisi',
  Germany: 'Berlin',
  Ghana:	'Accra',
  Greece:	'Athens',
  Grenada:	'Saint George\'s',
  Guatemala:	'Guatemala City',
  Guinea:	'Conakry',
  Guinea_Bissau:	'Bissau',
  Guyana:	'Georgetown',
  Haiti:	'Port-au-Prince',
  Honduras:	'Tegucigalpa',
  Hungary:	'Budapest',
  Iceland:	'Reykjavik',
  India:	'New Delhi',
  Indonesia:	'Jakarta',
  Iran:	'Tehran',
  Iraq:	'Baghdad',
  Ireland:	'Dublin',
  Israel:	'Jerusalem',
  Italy:	'Rome',
  Jamaica:	'Kingston',
  Japan:	'Tokyo',
  Jordan:	'Amman',
  Kazakhstan:	'Astana',
  Kenya:	'Nairobi',
  Kiribati:	'Tarawa',
  Kosovo:	'Pristina',
  Kuwait:	'Kuwait City',
  Kyrgyzstan:	'Bishkek',
  Laos:	'Vientiane',
  Latvia:	'Riga',
  Lebanon:	'Beirut',
  Lesotho:	'Maseru',
  Liberia:	'Monrovia',
  Libya:	'Tripoli',
  Liechtenstein:	'Vaduz',
  Lithuania:	'Vilnius',
  Luxembourg:	'Luxembourg City',
  Macedonia:	'Skopje',
  Madagascar:	'Antananarivo',
  Malawi:	'Lilongwe',
  Malaysia:	'Kuala Lumpur',
  Maldives:	'Male',
  Mali:	'Bamako',
  Malta:	'Valletta',
  Marshall_Islands:	'Majuro',
  Mauritania:	'Nouakchott',
  Mauritius:	'Port Louis',
  Mexico:	'Mexico City',
  Micronesia:	'Palikir',
  Moldova:	'Chisinau',
  Monaco:	'Monaco',
  Mongolia:	'Ulaanbaatar',
  Montenegro:	'Podgorica',
  Morocco:	'Rabat',
  Mozambique:	'Maputo',
  Myanmar:	'Naypyidaw',
  Namibia:	'Windhoek',
  Nauru:	'Yaren District ',
  Nepal:	'Kathmandu',
  Netherlands:	'Amsterdam',
  New_Zealand:	'Wellington',
  Nicaragua:	'Managua',
  Niger:	'Niamey',
  Nigeria:	'Abuja',
  North_Korea:	'Pyongyang',
  Norway:	'Oslo',
  Oman:	'Muscat',
  Pakistan:	'Islamabad',
  Palau:	'Ngerulmud',
  Palestine:	'Jerusalem ',
  Panama:	'Panama City',
  Papua_New_Guinea:	'Port Moresby',
  Paraguay:	'Asunción',
  Peru:	'Lima',
  Philippines:	'Manila',
  Poland:	'Warsaw',
  Portugal:	'Lisbon',
  Qatar:	'Doha',
  Romania:	'Bucharest',
  Russia:	'Moscow',
  Rwanda:	'Kigali',
  Saint_Kitts_and_Nevis:	'Basseterre',
  Saint_Lucia:	'Castries',
  Saint_Vincent_and_the_Grenadines:	'Kingstown',
  Samoa:	'Apia',
  San_Marino:	'San Marino',
  Sao_Tome_and_Principe:	'São Tomé',
  Saudi_Arabia:	'Riyadh',
  Senegal:	'Dakar',
  Serbia:	'Belgrade',
  Seychelles:	'Victoria',
  Sierra_Leone:	'Freetown',
  Singapore:	'Singapore',
  Slovakia:	'Bratislava',
  Slovenia:	'Ljubljana',
  Solomon_Islands:	'Honiara',
  Somalia:	'Mogadishu',
  South_Africa:	'Pretoria',
  South_Korea:	'Seoul',
  South_Sudan:	'Juba',
  Spain:	'Madrid',
  Sri_Lanka:	'Colombo',
  Sudan:	'Khartoum',
  Suriname:	'Paramaribo',
  Swaziland:	'Mbabane ',
  Sweden:	'Stockholm',
  Switzerland:	'Bern',
  Syria:	'Damascus',
  Taiwan:	'Taipei',
  Tajikistan:	'Dushanbe',
  Tanzania:	'Dodoma',
  Thailand:	'Bangkok',
  Timor_Leste:	'Dili',
  Togo:	'Lomé',
  Tonga:	'Nukuʻalofa',
  Trinidad_and_Tobago:	'Port of Spain',
  Tunisia:	'Tunis',
  Turkey:	'Ankara',
  Turkmenistan:	'Ashgabat',
  Tuvalu:	'Funafuti',
  Uganda:	'Kampala',
  Ukraine:	'Kiev',
  United_Arab_Emirates:	'Abu Dhabi',
  United_Kingdom:	'London',
  United_States_of_America:	'Washington DC',
  Uruguay:	'Montevideo',
  Uzbekistan:	'Tashkent',
  Vanuatu:	'Port Vila',
  Vatican_City:	'Vatican City',
  Venezuela:	'Caracas',
  Vietnam:	'Hanoi',
  Yemen:	'Sana\'a',
  Zambia:	'Lusaka',
  Zimbabwe:	'Harare'
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
  $scoreboard = $('.scoreboard');

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
  $question.html(`What's the capital of ${selectedCountry}?`);
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
  return Math.floor(Math.random() * 197);
}

function checkWin() {
  if (time === 0) {
    $main.hide();
    $start.show();
    $controls.hide();
    $message.show();
    $message.text('You\'re out of time. Play again?');
  }
}
