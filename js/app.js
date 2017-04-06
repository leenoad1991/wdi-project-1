$(init);

var countriesAndCapitals = {
  Afghanistan:	'Kabul',
  Albania:	'Tirana',
  Algeria:	'Algiers',
  Andorra:	'Andorra la Vella',
  Angola:	'Luanda',
  'Antigua and Barbuda':	'Saint John\'s',
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
  'Bosnia and Herzegovina':	'Sarajevo',
  Botswana:	'Gaborone',
  Brazil:	'Brasilia',
  Brunei:	'Bandar Seri Begawan',
  Bulgaria:	'Sofia',
  'Burkina Faso':	'Ouagadougou',
  Burundi: 'Bujumbura',
  'Cabo Verde':	'Praia',
  Cambodia:	'Phnom Penh',
  Cameroon:	'Yaounde',
  Canada:	'Ottawa',
  'Central African Republic':	'Bangui',
  Chad:	'N\'Djamena',
  Chile:	'Santiago',
  China:	'Beijing',
  Colombia:	'Bogotá',
  Comoros:	'Moroni',
  'Democratic Republic of the Congo':	'Kinshasa',
  'Republic of the Congo':	'Brazzaville',
  'Costa Rica':	'San Jose',
  'Cote dI\'voire':	'Yamoussoukro',
  Croatia:	'Zagreb',
  Cuba:	'Havana',
  Cyprus:	'Nicosia',
  'Czech Republic':	'Prague',
  Denmark:	'Copenhagen',
  Djibouti:	'Djibouti (city)',
  Dominica:	'Roseau',
  'Dominican Republic':	'Santo Domingo',
  Ecuador:	'Quito',
  Egypt:	'Cairo',
  'El Salvador':	'San Salvador',
  'Equatorial Guinea':	'Malabo ',
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
  'Guinea Bissau':	'Bissau',
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
  'Marshall Islands':	'Majuro',
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
  'New Zealand':	'Wellington',
  Nicaragua:	'Managua',
  Niger:	'Niamey',
  Nigeria:	'Abuja',
  'North Korea':	'Pyongyang',
  Norway:	'Oslo',
  Oman:	'Muscat',
  Pakistan:	'Islamabad',
  Palau:	'Ngerulmud',
  Palestine:	'Jerusalem',
  Panama:	'Panama City',
  'Papua New Guinea':	'Port Moresby',
  Paraguay:	'Asunción',
  Peru:	'Lima',
  Philippines:	'Manila',
  Poland:	'Warsaw',
  Portugal:	'Lisbon',
  Qatar:	'Doha',
  Romania:	'Bucharest',
  Russia:	'Moscow',
  Rwanda:	'Kigali',
  'Saint Kitts and Nevis':	'Basseterre',
  'Saint Lucia':	'Castries',
  'Saint Vincent and the Grenadines':	'Kingstown',
  Samoa:	'Apia',
  'San Marino':	'San Marino',
  'Sao Tome and Principe':	'São Tomé',
  'Saudi Arabia':	'Riyadh',
  Senegal:	'Dakar',
  Serbia:	'Belgrade',
  Seychelles:	'Victoria',
  'Sierra Leone':	'Freetown',
  Singapore:	'Singapore',
  Slovakia:	'Bratislava',
  Slovenia:	'Ljubljana',
  'Solomon Islands':	'Honiara',
  Somalia:	'Mogadishu',
  'South Africa':	'Pretoria',
  'South Korea':	'Seoul',
  'South Sudan':	'Juba',
  Spain:	'Madrid',
  'Sri Lanka':	'Colombo',
  Sudan:	'Khartoum',
  Suriname:	'Paramaribo',
  Swaziland:	'Mbabane',
  Sweden:	'Stockholm',
  Switzerland:	'Bern',
  Syria:	'Damascus',
  Taiwan:	'Taipei',
  Tajikistan:	'Dushanbe',
  Tanzania:	'Dodoma',
  Thailand:	'Bangkok',
  'Timor Leste':	'Dili',
  Togo:	'Lomé',
  Tonga:	'Nukuʻalofa',
  'Trinidad and Tobago':	'Port of Spain',
  Tunisia:	'Tunis',
  Turkey:	'Ankara',
  Turkmenistan:	'Ashgabat',
  Tuvalu:	'Funafuti',
  Uganda:	'Kampala',
  Ukraine:	'Kiev',
  'United Arab Emirates':	'Abu Dhabi',
  'United Kingdom':	'London',
  'United States of America':	'Washington DC',
  Uruguay:	'Montevideo',
  Uzbekistan:	'Tashkent',
  Vanuatu:	'Port Vila',
  'Vatican City':	'Vatican City',
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
let time  = 60;

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
  time = 60;
  $main.show();
  $start.hide();
  $controls.show();
  $message.hide();

  counter = setInterval(timer, 1000);
  pickRandomCountry();
}

function compareAnswers(e) {
  e.preventDefault();

  const inputValue = $answer.val();
  const userAnswer = inputValue;

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score++;
    $scoreboard.text(score);
  }

  $answer.val('');
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
  var size = findSize(countriesAndCapitals);
  if (size > 0) {
    selectedCountry = Object.keys(countriesAndCapitals)[randomnumber()];
    answer = countriesAndCapitals[selectedCountry];
    delete countriesAndCapitals[selectedCountry];
    $question.html(`What's the capital of ${selectedCountry}?`);
  } else {
    $question.html(`No more countries! You're a genius!`);
  }
}

function findSize(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
}

function randomnumber() {
  var size = findSize(countriesAndCapitals);
  return Math.floor(Math.random() * size);
}

function checkWin() {
  if (time === 0) {
    $main.hide();
    $start.show();
    $controls.hide();
    $message.show();
    $message.html(`You scored ${score}. Try again?`);
  }
}
