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

var throwRock, stab, zealotHP, romanHP, acting;
zealotHP = 100;
romanHP = 50;
acting = false;

throwRock = function () {
if (!acting) {
acting = true;
flash('You threw a rock.');
romanHP -= 9;
$('romanHP').innerHTML = romanHP;
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-throw-1.png');", 50);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-return.png');", 100);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-throw-2.png');", 150);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-throw-3.png');", 200);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-return.png');", 500);
setTimeout("flash('Roman (' + romanHP + 'HP) took 9 damage.');", 500);
setTimeout("acting=false;", 500);
}
}

stab = function () {
if (!acting) {
acting = true;
flash('You stabbed him!');
romanHP -= 4;
$('romanHP').innerHTML = romanHP;
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-stab-1.png');", 33);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-stab-2.png');", 67);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-stab-1.png');", 100);
setTimeout("$('zealot').setAttribute('src', 'src/img/zealot-return.png');", 133);
setTimeout("flash('Roman (' + romanHP + 'HP) took 4 damage.');", 133);
setTimeout("acting=false;", 150);
}
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
setInterval('romanStab();', 500)
$('action').innerHTML += "<div id='HPbox'><div id='romanHPbox'>Roman (<span id='romanHP'>50</span>HP)</div><div id='zealotHPbox'>You (<span id='zealotHP'>100</span>HP)</div>";
$('action').innerHTML += "<img src='src/img/zealot-return.png' id='zealot'>";
$('action').innerHTML += "<img src='src/img/spqr-return-1.png' id='spqr'>";

  $("status").innerHTML += "<button onclick='throwRock();' id='rock' class='tb'>Throw rock</button>";
  $("status").innerHTML += "<button onclick='stab();' id='stab' class='tb'>Stab</button>";
  $("status").innerHTML += "<button onclick='surrender();' id='surrender' class='tb'>Surrender</button>";
}

var romanStab;

romanStab = function() {
  zealotHP -= 7;
  if(zealotHP <= 0) {
   $("newcrisis").innerHTML = "";
   $("newcrisis").style.background = 'url(src/img/dead.png)';
  }
  $('zealotHP').innerHTML = zealotHP;
  flash('You (' + zealotHP + ') took 7 damage.');
  setTimeout("$('spqr').setAttribute('src', 'src/img/spqr-stab.png');", 100);
  setTimeout("$('spqr').setAttribute('src', 'src/img/spqr-return-2.png');", 200);
}

var surrender;

surrender = function () {
$("newcrisis").innerHTML = "";
$("newcrisis").style.background = 'url(src/img/zealot-surrender.png)';
}

newGame = function(mode) {
  $('newgame').hide();
  if(mode == '1') { flash('You have joined the Sadducees.'); sadducees(); }
  if(mode == '2') { flash('You have joined the Pharisses.'); pharisses(); }
  if(mode == '3') { flash('You have joined the Monastics.'); monastics(); }
  if(mode == '4') { flash('You have joined the Zealots.'); zealots(); }
};
