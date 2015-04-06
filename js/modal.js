$( document ).ready(function() {
	$('input,textarea').focus(function(){
	  $(this).data('placeholder',$(this).attr('placeholder'))
	  $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	  $(this).attr('placeholder',$(this).data('placeholder'));
	});

	$('.enter-btn').click(function(){
		$('.form-mask').fadeIn(400);
		$('#enter').fadeIn(500);
	})
	$('.register').click(function(){
		$('.form-mask').fadeIn(400);
		$('#register').fadeIn(500);
	})
	$('.form-mask').click(function(){
		$(this).fadeOut(400);
		$('#enter,#register').fadeOut(500);
	})
});