//table
$(document).ready(function() {	
	$(".tableindex td:last-child").addClass("lasttd");
	$(".tableindex tr:even").addClass("even");
});


//jquery 登入
$(function() {
	$('a.login-window').click(function() {
		
                //Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$(loginBox).fadeIn(500);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(500);
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() {
	  $('#mask , .login-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false; 
	});
});



/* 
<div id="fb-root"></div>

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1&appId=142661072538756";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

*/

/* 入口專區JQ*/

$(function(){
	var w = $("#mwt_slider_content").width();
	$('#mwt_slider_content').css('height', ($(window).height() - 20) + 'px' ); 
	
	$("#mwt_fb_tab").mouseover(function(){
		if ($("#mwt_mwt_slider_scroll").css('left') == '-'+w+'px')
		{
			$("#mwt_mwt_slider_scroll").animate({ left:'0px' }, 300 ,'swing');
		}
	});
	$("#mwt_slider_content").mouseleave(function(){
		$("#mwt_mwt_slider_scroll").animate( { left:'-'+w+'px' }, 300 ,'swing');	
	});	
});

/* END入口專區JQ*/
