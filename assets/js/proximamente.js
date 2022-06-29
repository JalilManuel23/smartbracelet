
(function() {
    "use strict";

    let conteo = $(".conteo");
  
    const conteoDate = function() {
      let timeleft = new Date(conteo.attr('data-count')).getTime() - new Date().getTime();
  
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      $(".dia").text(days);
      $(".hora").text(hours);
      $(".min").text(minutes);
      $(".seg").text(seconds);
  
    }
    conteoDate();
    setInterval(conteoDate, 1000);
  
  })()