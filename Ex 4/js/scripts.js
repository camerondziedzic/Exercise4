var head1 = '<img src="imgs/head1.png">'
var head2 = '<img src="imgs/head2.png">'
var head3 = '<img src="imgs/head3.png">'
var body1 = '<img src="imgs/body1.png">'
var body2 = '<img src="imgs/body2.png">'
var body3 = '<img src="imgs/body3.png">'
var legs1 = '<img src="imgs/legs1.png">'
var legs2 = '<img src="imgs/legs2.png">'
var legs3 = '<img src="imgs/legs3.png">'

//array
var heads = [head1, head2, head3]
var body = [body1, body2, body3]
var legs = [legs1, legs2, legs3]
var defaultskins = [organizeChad, organizePlankton, organizeElmo]
var randomNum = 1
var colors = ["#FFBC67", "#DA727E", "#AC6C82", "#685C79", "#455C7B"]
//counters

var counterhead = 0;
var counterbody = 0;
var counterlegs = 0;

$('#top').on('click', updateHead)

function updateHead() {

  $('#top').html(heads[counterhead]);
  counterhead++;

  if (counterhead == heads.length) {
    counterhead = 0;
  }
}

$('#middle').on('click', updateBody)

function updateBody() {

  $('#middle').html(body[counterbody]);
  counterbody++;

  if (counterbody == body.length) {
    counterbody = 0;
  }
}

$('#bottom').on('click', updateLegs)

function updateLegs() {

  $('#bottom').html(legs[counterlegs]);
  counterlegs++;

  if (counterlegs == legs.length) {
    counterlegs = 0;
  }
}

$(document).on("keypress", function (e) {
  console.log(e)
  if (e.key == '1') {
    organizeAll();
  }
})

function organizeAll() {
  var randomNum = Math.floor(Math.random() * defaultskins.length);
  if (randomNum == 0) {
    organizeChad();
  } else if (randomNum == 1) {
    organizePlankton();
  } else {
    organizeElmo();
  }
}

function organizeChad() {
  counterhead = 0
  counterbody = 0
  counterlegs = 0
  $('#top').html(heads[counterhead]);
  $('#middle').html(body[counterbody]);
  $('#bottom').html(legs[counterlegs]);
}

function organizePlankton() {
  counterhead = 1
  counterbody = 1
  counterlegs = 1
  $('#top').html(heads[counterhead]);
  $('#middle').html(body[counterbody]);
  $('#bottom').html(legs[counterlegs]);
}

function organizeElmo() {
  counterhead = 2
  counterbody = 2
  counterlegs = 2
  $('#top').html(heads[counterhead]);
  $('#middle').html(body[counterbody]);
  $('#bottom').html(legs[counterlegs]);
}

$(document).on("keypress", function (e) {
  console.log(e)
  if (e.key == '2') {
    updateColour();
  }
})

function updateColour() {
  var randomNum = Math.floor(Math.random() * colors.length);
  console.log(randomNum)

  $("#top").css("background-color", colors[randomNum]);
  $("#middle").css("background-color", colors[randomNum + 1]);
  $("#bottom").css("background-color", colors[randomNum + 2]);


}

$('#top').html("<img src='imgs/head1.png'>");
$('#middle').html("<img src='imgs/body1.png'>");
$('#bottom').html("<img src='imgs/legs1.png'>");

