
// creating the random word generator
    var words=['conclusion','tooth','bedroom','opinion','math','engine','protection','courage','hair','celebration','reaction','assistance','desk','feedback','trainer','procedure','surgery','complaint','presentation','passion','message','actor','paper','law','basket','person','resolution','operation','police','manager','grandmother','goal','education','knowledge','director','mixture','equipment','activity','shopping','championship','midnight','football','elevator','arrival','data','direction','judgment','indication','professor','drama','reputation','moment','height','entry','farmer','population','device','singer','potato','sample','perspective','way','finding','version','church','member','event','wedding','extent','theory','opportunity','engineering','relationship','platform','article','anxiety','depression','negotiation','orange','reflection','computer','recipe','ladder','construction','cousin','injury','concept','unit','customer','efficiency','piano','girlfriend','addition','city','region','awareness','appearance','consequence','variation','topic']
    var rand = Math.floor(Math.random()*words.length);
    var randwords= words[rand]
function setup() {
    console.log(randwords)
    $('.word').append("<p>Your word is: " + randwords + "</p>")

$('.userName').append(`<p>Signed in as ${name}.</p>`);



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
        clearInterval(timeinterval);
        $('.timer').append(`<h1> TIME IS UP!</h1>`);
        alert("Your time is up and your story looks great! Would you like to view it?")
        console.log($('#story').val())
        wordInString($('#story').val(), randwords)
        $('.story').hide()
        $('.sdi').append($('#story').val())
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) +  /* 60 */ 15000);
initializeClock('clockdiv', deadline);

}
function wordInString(s, word){
  var a= new RegExp( '\\b' + word + '\\b', 'i').test(s);
  if (a === false) {
      alert("OH!It seems you didnt use the word. Looks like you are going to have to restart 3:) .");
      location.reload(true);
  }
//updateDB()
}

console.log(randwords)

$(document).ready(setup);


//button executes this function
function updateDB(){


   // var email= user.email;
    var story = $('#story').val()
    var word = randwords;
    //var name;
    
    console.log(word + " : " + story);
    console.log(name)
    //Set database object
    var database = firebase.database().ref(name);
    var value={
       "NAME": name,
        "WORD": word,
        "STORY": story,
        //  "LIKES": likes,
    }

    //Update database here
    database.push(value);


database.on('child_added', function(rowData) {
    var row = rowData.val();
   var name = row.NAME;
    var word= row.WORD
    var story = row.STORY;
    //  var likes = row.LIKES;
    //$('.allMessages').append('<p>'+name +": "+ message+'</p>');
})}
