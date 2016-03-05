$(document).ready(function(){
var divs = $('p').hide(),
    i = 0;

  (function cycle() { 
      divs.eq(i).fadeIn(600)
                .delay(5000)
                .fadeOut(600, cycle);
      i = ++i % divs.length;
  })();
});