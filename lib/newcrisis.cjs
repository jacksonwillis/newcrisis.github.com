document.observe("dom:loaded", function() {
  var i, _results;
  if (!window.location.hash) {
    _results = [];
    for (i = 1; i <= 4; i++) {
      _results.push($("choice-" + i).observe('click', function(e) {
        hashTo(e);
        return newGame();
      }));
    }
    return _results;
  } else {
    return newGame();
  }
});

hashTo = function(e) {
  return window.location.hash = Event.element(e).id.split('choice-')[1];
};

newGame = function() {
  var mode;
  $('newgame').hide();
  mode = window.location.hash.substring(1);
  return alert(mode);
};
