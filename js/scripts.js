var menu = $('#sidebar-menu-icon');
var canvasMenu = $('#canvas-menu');
var closeCanvasMenu = $('#close-sidebar-menu');
menu.on('click', function(e) {
    canvasMenu.addClass('open');
    $('body').css('overflow', 'hidden'); 
});
closeCanvasMenu.on('click', function(e){
    canvasMenu.removeClass('open');
    $('body').css('overflow', 'scroll'); 
});
