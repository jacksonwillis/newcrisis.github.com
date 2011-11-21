var hashTo, newGame, flash;

document.observe("dom:loaded", function() {
  var i, _results;
  if (!window.location.hash) {
    _results = [];
    for (i = 1; i <= 4; i++) {
      _results.push($("choice-" + i).observe('click', function(e) {
	window.location.hash = Event.element(e).id.split('choice-')[1];
        newGame();
      }));
    }
    return _results;
  } else {
    return newGame();
  }
});

flash = function(s) {
  $('flash').innerHTML = s + "\n" + $('flash').innerHTML;
}

newGame = function() {
  var mode;
  $('newgame').hide();
  mode = window.location.hash.substring(1);
};
