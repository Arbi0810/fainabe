/**
 * This script triggers ShopRunner specific actions 
 */
(function(srApp, $, undefined) {
	var $cache;
	
    function initSRCache() {
    	$cache = {
    			blockFrm : $("#dwfrm_ineligiblecart"),
    			keepItemsBtn : $("button[name='dwfrm_ineligiblecart_keepitems']"),
    			srCartDiv : $('div[name="sr_payRunnerCartDiv"]')
    		};
	}
	
	function initSREvents() {
		/**
		 * This script is used to prevent the default ShopRunner signout behaviour
		 * when the "Keep all items and sign out" button is pushed.
		 */
		$cache.keepItemsBtn.on("click", function (e) {
			e.preventDefault();
			sr_$.signOut();
			if ($cache.blockFrm) {
		    	// set the timeout 
		    	setTimeout(function() {
		    		$cache.blockFrm.submit();
		        }, 900);
		   }
		});
		
		/**
		 *  Refresh the page after sign in to / sign out of SopRunner account
		 */
		refreshSRCart(); 
	}

	/**
	 * Refresh cart details page after exit from SR modal
	 */
	function refreshSRCart() {
		if ($cache.srCartDiv.length) {
			setTimeout(function() {
				 // setup sr_pageRefreshes true
	   		     sr_pageRefreshes = true;
			 }, 800);
		}
	}
	
	/**
	 * Initialize SR specific cache
	 */
	initSRCache();
	
	/**
	 * Initialize SR specific events
	 */
	initSREvents();
	
}(window.srApp = window.srApp || {}, jQuery));