/*
$(document).ready(function(){
    var $wndw = $(window);
    
    var pos = $("#parallax1").offset().top;
    pos -= $(window).height();
    
    $(window).scroll(function() {
      console.log($(window).scrollTop());
      if ( ($(window).scrollTop() > pos) & ($(window).scrollTop() < pos + $('#parallax1').height()) ) {
        //alert(pos);
        
        $('#parallax1').each(function(){
            var scroll_speed = 1; // modified value
            var $this = $(this);
            $(window).scroll(function() {
                var bgScroll = -(($wndw.scrollTop() - $this.offset().top)/ scroll_speed);
                var bgPosition = 'center '+ bgScroll + 'px';
                $this.css({ backgroundPosition: bgPosition });
            });
        });
      } else { } 
    });
});
*/

$(document).ready(function(){
  var $wndw = $(window);
    $('#parallax1').each(function(){
        var scroll_speed = 1; // modified value
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($wndw.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});