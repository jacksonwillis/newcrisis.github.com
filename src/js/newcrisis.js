var hashTo, newGame, flash;

flash = function(s) {
  $('flash').innerHTML = s + "\n" + $('flash').innerHTML;
}

var pharisses, sadducees, monastics, zealots, sadduceesLose, runningOutOfTime;

pharisses = function () {
  
}

sadducees = function () {
  $('status').innerHTML = "<button onclick='sadduceesLose();' class='diss bb'>Diss the Romans</button>";
  $('action').innerHTML += "<img src='src/img/you.png' id='you'>";
}

sadduceesLose = function(){
  $('you').setAttribute('src', 'src/img/you-romans-suck.png');
  flash('What have you done?');
  setTimeout('$("action").innerHTML += "<img src=\'src/img/what-you-say.png\' id=\'what\'>";', 1500);
  setTimeout('$("newcrisis").innerHTML = ""; $("newcrisis").style.background = \'url(src/img/dead.png)\'', 3500);
}

monastics = function () {
  $('action').innerHTML = "<span class='running'>Time left: <span id='timeleft'>40</span></span>";
$('action').innerHTML += "<img src='src/img/pray-1.png' id='prayer'>";
  setInterval(runningOutOfTime, 500);
  $('status').innerHTML = "<button onclick='pray();' class='pray bb'>Pray!</button>";
}

var prayers=0;
var pray;

pray = function () {
setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/zoUVW.png');", 25);
setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/N1ekf.png');", 50);
setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/4x51L.png');", 75);
setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/N1ekf.png');", 100);
setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/zoUVW.png');", 125);

  prayers +=1;
  if(prayers >= 50) {
    monasticsWin();
  }
 flash('Prayer points: ' + prayers);
}

runningOutOfTime = function () {
  var time=parseInt($('timeleft').innerHTML);
  if(time <= 0) {
    if(prayers < 50) {monasticsLose();}
    else { monasticsWin(); }
  }
  $('timeleft').innerHTML = time - 1;
}

var monasticsWin, monasticsLose;

monasticsWin = function(){
$("newcrisis").innerHTML = ""; $("newcrisis").style.background = 'url(src/img/monastics-win.png)';
}

monasticsLose = function (){
$("newcrisis").innerHTML = ""; $("newcrisis").style.background = 'url(src/img/monastics-win.png)';
}

rebels = function () {

}

newGame = function(mode) {
  $('newgame').hide();
  if(mode == '1') { flash('You have joined the Sadducees.'); sadducees(); }
  if(mode == '2') { flash('You have joined the Pharisses.'); pharisses(); }
  if(mode == '3') { flash('You have joined the Monastics.'); monastics(); }
  if(mode == '4') { flash('You have joined the Zealots.'); zealots(); }
};
