var main = function(){

  $('.login p').click(function(){
    $('.login .dropdown-menu').toggle();
  });


  $('#accordion').accordion({
    collapsible: true,
    event: "mouseover",
    animate: {easing: "easeOutBounce", duration: 600},
  });
}

$(document).ready(main);
