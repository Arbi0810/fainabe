$(document).ready(function(){

	if($.cookie('cookieacceptance'))
	{
		$('.cookieBar').css('display', 'none');
	}
	else
	{
		$('.cookieBar').css('display', 'block');
	}
	$('#btn_cookiesOK').on('click', setCookie);
});


function setCookie(){
	$.cookie('cookieacceptance', 'OK', {expires : 365, path: '/'});
	$('.cookieBar').css('display', 'none');
}