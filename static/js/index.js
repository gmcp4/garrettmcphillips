var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;

mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.navbar').stop().fadeOut();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.navbar').stop().fadeIn();
        up = !up;
    }
    mypos = newscroll;
});

$(document).ready(function() {
});

function sidenavClicker(pageIn) {
    $('#intro').hide();
    $('#about').hide();
    $('#experience').hide();
    $('#projects').hide();
    $('#skills').hide();
    $('#awards').hide();
    $('#education').hide();
    $('#contact').hide();
    $('#resume').hide();
  
    $(pageIn).show();
  };