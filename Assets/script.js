var timeEl = document.getElementsByClassName("time");
var hours = moment.duration(1, "hour");
var currentTime = moment().hour();

var format = "hh";
var timeNineAm = moment("09:00:00", format);
var timeTenAm = moment("10:00:00", format);
var timeElevenAm = moment("11:00:00", format);
var timeTwelvePm = moment("12:00:00", format);
var timeOnePm = moment("13:00:00", format);
var timeTwoPm = moment("14:00:00", format);
var timeThreePm = moment("15:00:00", format);
var timeFourPm = moment("16:00:00", format);
var timeFivePm = moment("17:00:00", format);


//function to initiliaze planner
$(document).ready(function() {
   checkNineAm();
   checkTenAm();
   checkElevenAm();
   checkTwelvePm();
   checkOnePm();
   checkTwoPm();
   checkThreePm();
   checkFourPm();
   checkFivePm();
});


//function to check for new hour




//time checker functions
function checkNineAm(){
   if (moment().isAfter(timeNineAm)){
    $(".nineAm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeNineAm)) {
      $(".nineAm").css("background-color", "#cecdce");
   }
   else {
      $(".nineAm").css("background-color", "#ff7151");
   }
};

function checkTenAm(){
   if (moment().isAfter(timeTenAm)){
    $(".tenAm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeTenAm)) {
      $(".tenAm").css("background-color", "#cecdce");
   }
   else {
      $(".tenAm").css("background-color", "#ff7151");
   }
};

function checkElevenAm(){
   if (moment().isAfter(timeElevenAm)){
    $(".ElevenAm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeElevenAm)) {
      $(".ElevenAm").css("background-color", "#cecdce");
   }
   else {
      $(".ElevenAm").css("background-color", "#ff7151");
   }
};

function checkTwelvePm(){
   if (moment().isAfter(timeTwelvePm)){
    $(".TwelvePm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeTwelvePm)) {
      $(".TwelvePm").css("background-color", "#cecdce");
   }
   else {
      $(".TwelvePm").css("background-color", "#ff7151");
   }
};

function checkOnePm(){
   if (moment().isAfter(timeOnePm)){
    $(".OnePm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeOnePm)) {
      $(".OnePm").css("background-color", "#cecdce");
   }
   else {
      $(".OnePm").css("background-color", "#ff7151");
   }
};

function checkTwoPm(){
   if (moment().isAfter(timeTwoPm)){
    $(".TwoPm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeTwoPm)) {
      $(".TwoPm").css("background-color", "#cecdce");
   }
   else {
      $(".TwoPm").css("background-color", "#ff7151");
   }
};

function checkThreePm(){
   if (moment().isAfter(timeThreePm)){
    $(".ThreePm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeThreePm)) {
      $(".ThreePm").css("background-color", "#cecdce");
   }
   else {
      $(".ThreePm").css("background-color", "#ff7151");
   }
};

function checkFourPm(){
   if (moment().isAfter(timeFourPm)){
    $(".FourPm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeFourPm)) {
      $(".FourPm").css("background-color", "#cecdce");
   }
   else {
      $(".FourPm").css("background-color", "#ff7151");
   }
};

function checkFivePm(){
   if (moment().isAfter(timeFivePm)){
    $(".FivePm").css("background-color", "#00ba6e");
   }

   else if (moment().isBefore(timeFivePm)) {
      $(".FivePm").css("background-color", "#cecdce");
   }
   else {
      $(".FivePm").css("background-color", "#ff7151");
   }
};


console.log(currentTime);
