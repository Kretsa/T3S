





window.addEventListener('scroll', function(e) {
  var el = document.querySelector('#counters');
  if (window.scrollY + window.outerHeight - 352 > el.offsetTop) {


    function scroll(val, el, timeout, step) {
        var i = 0;
        (function() {
          if (i <= val) {
            setTimeout(arguments.callee, timeout);
            document.getElementById(el).innerHTML = i;
            i = i + step;
          } else {
            document.getElementById(el).innerHTML = val;
          }
        })();
      }
      scroll(23567, 'counter_Recipes',  10, 10);
      scroll(431729, 'counter_Users',  10, 160);
      scroll(892173, 'counter_Reviews',  1, 160);
      scroll(56581, 'counter_Photos',  10, 10);
      scroll(3182, 'counter_Spices',  10, 1);
      


  }
});

