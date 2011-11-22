var hashTo, newGame, flash;

flash = function(s) {
  $('flash').innerHTML = s + "\n" + $('flash').innerHTML;
}

var pharisses, sadducees, monastics, zealots, sadduceesLose, runningOutOfTime;

pharisses = function () {
  $("newcrisis").innerHTML = ""; $("newcrisis").style.background = 'url(http://i.imgur.com/yu3t7.png)';
}

sadducees = function () {
  $('status').innerHTML = "<button onclick='sadduceesLose();' class='diss bb'>Diss the Romans</button>";
  $('action').innerHTML += "<img src='src/img/you.png' id='you'>";
}

sadduceesLose = function(){
  $('you').setAttribute('src', 'src/img/you-romans-suck.png');
  flash('You said, "Romans suck!"');
  setTimeout('$("action").innerHTML += "<img src=\'src/img/what-you-say.png\' id=\'what\'>";', 1500);
  setTimeout('flash("Looks like a Roman soldier has noticed!");', 1500);
  setTimeout('flash("The Roman is trying to execute you!");', 2500);
  setTimeout('$("newcrisis").innerHTML = ""; $("newcrisis").style.background = \'url(src/img/dead.png)\'', 3500);
}

monastics = function () {
  $('action').innerHTML = "<span class='running'>Time left: <span id='timeleft'>40</span></span>";
$('action').innerHTML += "<img src='http://i.imgur.com/qanJs.jpg' id='prayer' style='position:relative;'>";
  setInterval(runningOutOfTime, 500);
  $('status').innerHTML = "<button onclick='pray();' class='pray bb'>Pray!</button>";
}

var prayers=0;
var pray;

pray = function () {
setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/qanJs.jpg');", 100);
setTimeout("$('prayer').style.left = 0;", 100);

setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/WGgyA.jpg');", 200);
setTimeout("$('prayer').style.left = '10px';", 200);

setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/PXtMQ.jpg');", 300);
setTimeout("$('prayer').style.left = '20px';", 300);

setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/WGgyA.jpg');", 400);
setTimeout("$('prayer').style.left = '10px';", 400);

setTimeout("$('prayer').setAttribute('src', 'http://i.imgur.com/qanJs.jpg');", 500);
setTimeout("$('prayer').style.left = 0;", 500);

  prayers +=1;
  if(prayers >= 50) {
    monasticsWin();
  }
 flash('Prayer points: ' + prayers);
}

var throwRock;

throwRock = function () {
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-throw-1.png');", 50);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-return.png');", 100);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-throw-2.png');", 150);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-throw-3.png');", 200);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-return.png');", 500);

 flash('You threw a rock.');
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
$("newcrisis").innerHTML = ""; $("newcrisis").style.background = 'url(src/img/monastics-lose.png)';
}

zealots = function () {
$('action').innerHTML += "<img src='src/img/zealot-return.png' id='zealot'>";

  $("status").innerHTML += "<button onclick='throwRock();' id='rock' class='tb'>Throw rock</button>";
  $("status").innerHTML += "<button onclick='stab();' id='stab' class='tb'>Stab</button>";
  $("status").innerHTML += "<button onclick='surrender();' id='surrender' class='tb'>Surrender</button>";
}

newGame = function(mode) {
  $('newgame').hide();
  if(mode == '1') { flash('You have joined the Sadducees.'); sadducees(); }
  if(mode == '2') { flash('You have joined the Pharisses.'); pharisses(); }
  if(mode == '3') { flash('You have joined the Monastics.'); monastics(); }
  if(mode == '4') { flash('You have joined the Zealots.'); zealots(); }
};
