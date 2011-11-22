var hashTo, newGame, flash;

flash = function(s) {
  $('flash').innerHTML = s + "\n" + $('flash').innerHTML;
}

var pharisses, sadducees, monastics, zealots, sadduceesLose;

pharisses = function () {
  
}

sadducees = function () {
  $('status').innerHTML = "<button onclick='sadduceesLose();' class='diss'>Diss the Romans</button>";
  $('action').innerHTML += "<img src='src/img/you.png' id='you'>";
}

sadduceesLose = function(){
  $('you').setAttribute('src', 'src/img/you-romans-suck.png');
  flash('What have you done?');
  setTimeout('$("action").innerHTML += "<img src=\'src/img/what-you-say.png\' id=\'what\'>";', 1500);
  setTimeout('$("newcrisis").innerHTML = ""; $("newcrisis").style.background = \'url(src/img/dead.png)\'', 3500);
}

monastics = function () {

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
