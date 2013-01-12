'use strict';

(function(){
  var markerTmpl = $('#marker-tmpl').text();

  var makeLines = function(num){
    var htmlRaw = '';
    var lineTmpl = $('#line-tmpl').text();
    for(;num--;){
      htmlRaw += lineTmpl;
    }
    return htmlRaw;
  };

  var makeTestCanvas = function(lineHeight){
    var winHeight = document.body.scrollHeight;
    var halfLines = makeLines(Math.round(winHeight/lineHeight/2));

    return halfLines + markerTmpl + halfLines;
  };

  $('#wrapper').html(makeTestCanvas(10));

  window.app = {
    makeLines: makeLines,
    makeTestCanvas: makeTestCanvas
  }
})();