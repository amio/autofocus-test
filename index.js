'use strict';

(function(){
  var crossSizeLoop = {
//    'focus-cross-10': 'focus-cross-20',
    'focus-cross-20': 'focus-cross-30',
    'focus-cross-30': 'focus-cross-40',
    'focus-cross-40': 'focus-cross-20'
  };

  var $cross = $('#focus-cross');
  $(document.body).on('click',function(){
    $cross.attr('class',crossSizeLoop[$cross.attr('class')])
  });
})();