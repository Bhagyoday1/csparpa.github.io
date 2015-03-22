jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}


$(document).ready(function(){

	//qr link
	$('#qr_code').on('click', function(){
		var qr = $('#qr_popup');
    $(qr).fadeIn('slow');
    qr.center();
    var overlay = $('#black_overlay');
    $(overlay).fadeIn('fast');
    $(overlay).on('click', function(){
      $(qr).fadeOut('slow');
      $(this).fadeOut('slow');
    });
	});

	//talks link
	$('#talks').on('click', function(){
    var talks = $('#talks_popup');
    $(talks).fadeIn('fast');
    talks.center();
    var overlay = $('#black_overlay');
    $(overlay).fadeIn('slow');
    $(overlay).on('click', function(){
      $(talks).fadeOut('slow');
      $(this).fadeOut('slow');
    });
	});

});
