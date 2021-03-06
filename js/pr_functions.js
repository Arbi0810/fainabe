function getPRCart() {
	delete Array.prototype.remove;
	var val;
	var pid = jQuery('#pid').val();
	var qty = jQuery('#Quantity').val();
	var endpoint = '';
	if( pid != null && qty != null ) { 
		endpoint = _shoprunner_com.checkout.partnerAPIEndPoint + '?method=getPRCart&pid=' + pid + '&Quantity=' + qty;
	} else {
		endpoint = _shoprunner_com.checkout.partnerAPIEndPoint + '?method=getPRCart';
	}
	
	jQuery.ajax({
		url : endpoint,
		async: false,
		type: "POST",
		data: {
				'Quantity':qty,
				'pid':pid
			},
		success: function( msg ){
			val = msg
		}
	});

	return jQuery.parseJSON( val );
}

function startPRCheckout() {
	delete Array.prototype.remove;
	var val;
	
	jQuery.ajax({
		url : 'ShopRunner-StartPRCheckout',
		async: false,
		type: "POST",
		success: function( msg ){
			val = msg
		}
	});
	
	return jQuery.parseJSON( val );
}