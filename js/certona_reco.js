function certonaRecommendations(productsJson)
{
	try {
		$.ajax({
			type : "POST",
			cache	: false,
			processData : false,
			contentType : "application/json",
			url : app.urls.certonaReco,
			data : JSON.stringify(productsJson)
		}).success(function(data){
			var myDiv = document.getElementById('certona-recommendations');
			if(myDiv){
				$(myDiv).append(data);
				//checking if it's a product page
				var certonaPdpTab = $(".tab").hasClass('certona-pdp-tab');
				var certonanoresult = $(".swiper-wrapper").hasClass('noresult');
				if(certonaPdpTab){
					//Updating the div ID to avoid emptying it on other calls like mini-cart
					$("#certona-recommendations").attr("id", "updated-certona-recommendations");
					$("#updated-certona-recommendations").addClass("swiper-container lookbookPush lastProductsSeenPush certona-reco active product-tile-slider");
					if(data.indexOf("product/empty.isml") > -1){
						var tabParent = certonaPdpTab.parent();
						var dwRecommendationTab = $(".recommendation-tab");
						var lastViewedTab = $(".lastviewed-tab");
						
						//changing the class if it was only a two menu tab
						if(!dwRecommendationTab || !lastViewedTab){
							tabParent.attr("class","one-menu");
						}
						
						certonaPdpTab.remove();
						
						//Activating the next tab if there is one
						if(dwRecommendationTab){
							dwRecommendationTab.click();
						}
						else if(lastViewedTab){
							lastViewedTab.click();
						}
					}
				} else if(certonanoresult){
					$("#certona-recommendations").attr("id", "updated-certona-recommendations");
					$("#updated-certona-recommendations").addClass("swiper-container lookbookPush lastProductsSeenPush certona-reco active product-tile-slider");
					if($('#updated-certona-recommendations li.grid-tile').length <= 4){
						$('.swiper-wrapper.noresult').addClass('lessthen-four-tiles');
					}
					else{
						$('.swiper-wrapper.noresult').removeClass('lessthen-four-tiles');
					}
				}
				Maje.product.tileSlider();
				// Init event add to cart for the products slider
				Maje.cart.impulseSell();
				lazyLoading.update();
			}
		});
	}
	catch (e)
	{}
};
