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
var timeSixPm = moment("18:00:00", format);

var nineAmInputKey = "9 am Input: "
var tenAmInputKey = "10 am Input: "
var elevenAmInputKey = "11 am Input: "
var twelvePmInputKey = "12 pm Input: "
var onePmInputKey = "1 pm Input: "
var twoPmInputKey = "2 pm Input: "
var threePmInputKey = "3 pm Input: "
var fourPmInputKey = "4 pm Input: "
var fivePmInputKey = "5 pm Input: "

$('.currentTime').html('<p class="p2">'+moment().format("dddd,MMMM do")+'</p>');

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
   nineAmDataLoad();
   tenAmDataLoad ();
   elevenAmDataLoad ();
   twelvePmDataLoad ();
   onePmDataLoad ();
   twoPmDataLoad ();
   threePmDataLoad ();
   fourPmDataLoad ();
   fivePmDataLoad ();
});

//functions to set local storage
$(".nineAmSaveButton").click(function(){
   var formInput= document.getElementById("formNineAm");
   localStorage.setItem(nineAmInputKey , (formInput.value));
});

$(".tenAmSaveButton").click(function(){
   var formInput= document.getElementById("formTenAm");
   localStorage.setItem(tenAmInputKey, (formInput.value));
});

$(".elevenAmSaveButton").click(function(){
   var formInput= document.getElementById("formElevenAm");
   localStorage.setItem(elevenAmInputKey, (formInput.value));
});

$(".twelvePmSaveButton").click(function(){
   var formInput= document.getElementById("formTwelvePm");
   localStorage.setItem(twelvePmInputKey, (formInput.value));
});

$(".onePmSaveButton").click(function(){
   var formInput= document.getElementById("formOnePm");
   localStorage.setItem(onePmInputKey, (formInput.value));
});

$(".twoPmSaveButton").click(function(){
   var formInput= document.getElementById("formTwoPm");
   localStorage.setItem(twoPmInputKey, (formInput.value));
});

$(".threePmSaveButton").click(function(){
   var formInput= document.getElementById("formThreePm");
   localStorage.setItem(threePmInputKey, (formInput.value));
});

$(".fourPmSaveButton").click(function(){
   var formInput= document.getElementById("formFourPm");
   localStorage.setItem(fourPmInputKey, (formInput.value));
});

$(".fivePmSaveButton").click(function(){
   var formInput= document.getElementById("formFivePm");
   localStorage.setItem(fivePmInputKey, (formInput.value));
});

//functions to get local storage
function nineAmDataLoad () {
   if (localStorage.getItem(nineAmInputKey) !== null){
      $("#formNineAm").attr("value", (localStorage.getItem(nineAmInputKey)));
   }
   else {
      $("#formNineAm").attr("value", "");
   }
}

function tenAmDataLoad () {
   if (localStorage.getItem(tenAmInputKey) !== null){
      $("#formTenAm").attr("value", (localStorage.getItem(tenAmInputKey)));
   }
   else {
      $("#formTenAm").attr("value", "");
   }
}

function elevenAmDataLoad () {
   if (localStorage.getItem(elevenAmInputKey) !== null){
      $("#formElevenAm").attr("value", (localStorage.getItem(elevenAmInputKey)));
   }
   else {
      $("#formElevenAm").attr("value", "");
   }
}

function twelvePmDataLoad () {
   if (localStorage.getItem(twelvePmInputKey) !== null){
      $("#formTwelvePm").attr("value", (localStorage.getItem(twelvePmInputKey)));
   }
   else {
      $("#formTwelvePm").attr("value", "");
   }
}

function onePmDataLoad () {
   if (localStorage.getItem(onePmInputKey) !== null){
      $("#formOnePm").attr("value", (localStorage.getItem(onePmInputKey)));
   }
   else {
      $("#formOnePm").attr("value", "");
   }
}

function twoPmDataLoad () {
   if (localStorage.getItem(twoPmInputKey) !== null){
      $("#formTwoPm").attr("value", (localStorage.getItem(twoPmInputKey)));
   }
   else {
      $("#formTwoPm").attr("value", "");
   }
}

function threePmDataLoad () {
   if (localStorage.getItem(threePmInputKey) !== null){
      $("#formThreePm").attr("value", (localStorage.getItem(threePmInputKey)));
   }
   else {
      $("#formThreePm").attr("value", "");
   }
}

function fourPmDataLoad () {
   if (localStorage.getItem(fourPmInputKey) !== null){
      $("#formFourPm").attr("value", (localStorage.getItem(fourPmInputKey)));
   }
   else {
      $("#formFourPm").attr("value", "");
   }
}

function fivePmDataLoad () {
   if (localStorage.getItem(fivePmInputKey) !== null){
      $("#formFivePm").attr("value", (localStorage.getItem(fivePmInputKey)));
   }
   else {
      $("#formFivePm").attr("value", "");
   }
}
//function to check for new hour


//time checker functions
function checkNineAm(){
   if (moment().isAfter(timeTenAm)){
    $(".nineAm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeNineAm)) {
      $(".nineAm").css("background-color", "#00ba6e");
   }
   else {
      $(".nineAm").css("background-color", "#ff7151");
   }
};

function checkTenAm(){
   if (moment().isAfter(timeElevenAm)){
    $(".tenAm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeTenAm)) {
      $(".tenAm").css("background-color", "#00ba6e");
   }
   else {
      $(".tenAm").css("background-color", "#ff7151");
   }
};

function checkElevenAm(){
   if (moment().isAfter(timeTwelvePm)){
    $(".ElevenAm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeElevenAm)) {
      $(".ElevenAm").css("background-color", "#00ba6e");
   }
   else {
      $(".ElevenAm").css("background-color", "#ff7151");
   }
};

function checkTwelvePm(){
   if (moment().isAfter(timeOnePm)){
    $(".TwelvePm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeTwelvePm)) {
      $(".TwelvePm").css("background-color", "#00ba6e");
   }
   else {
      $(".TwelvePm").css("background-color", "#ff7151");
   }
};

function checkOnePm(){
   if (moment().isAfter(timeTwoPm)){
    $(".OnePm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeOnePm)) {
      $(".OnePm").css("background-color", "#00ba6e");
   }
   else {
      $(".OnePm").css("background-color", "#ff7151");
   }
};

function checkTwoPm(){
   if (moment().isAfter(timeThreePm)){
    $(".TwoPm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeTwoPm)) {
      $(".TwoPm").css("background-color", "#00ba6e");
   }
   else {
      $(".TwoPm").css("background-color", "#ff7151");
   }
};

function checkThreePm(){
   if (moment().isAfter(timeFourPm)){
    $(".ThreePm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeThreePm)) {
      $(".ThreePm").css("background-color", "#00ba6e");
   }
   else {
      $(".ThreePm").css("background-color", "#ff7151");
   }
};

function checkFourPm(){
   if (moment().isAfter(timeFivePm)){
    $(".FourPm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeFourPm)) {
      $(".FourPm").css("background-color", "#00ba6e");
   }
   else {
      $(".FourPm").css("background-color", "#ff7151");
   }
};

function checkFivePm(){
   if (moment().isAfter(timeSixPm)){
    $(".FivePm").css("background-color", "#cecdce");
   }

   else if (moment().isBefore(timeFivePm)) {
      $(".FivePm").css("background-color", "#00ba6e");
   }
   else {
      $(".FivePm").css("background-color", "#ff7151");
   }
};


console.log(currentTime);
