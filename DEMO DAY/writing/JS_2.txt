function setup() {
// creating the random word generator
    var words=['conclusion','tooth','bedroom','opinion','math','engine','protection','courage','hair','celebration','reaction','assistance','desk','feedback','trainer','procedure','surgery','complaint','presentation','passion','message','actor','paper','law','basket','person','resolution','operation','police','manager','grandmother','goal','education','knowledge','director','mixture','equipment','activity','shopping','championship','midnight','football','elevator','arrival','data','direction','judgment','indication','professor','drama','reputation','moment','height','entry','farmer','population','device','singer','potato','sample','perspective','way','finding','version','church','member','event','wedding','extent','theory','opportunity','engineering','relationship','platform','article','anxiety','depression','negotiation','orange','reflection','computer','recipe','ladder','construction','cousin','injury','concept','unit','customer','efficiency','piano','girlfriend','addition','city','region','awareness','appearance','consequence','variation','topic']
    var rand = Math.floor(Math.random()*words.length);
    var randwords= words[rand]
    console.log(randwords)
    $('.word').append("<p>Your word is: " + randwords + "</p>")
}

$(document).ready(setup)