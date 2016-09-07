$(document).ready(function() {
	/* MENU */
	/*$(".menu-item").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});*/
	
	$("#btn-demo").click(function(){
		goToByScroll('demo');
	});
	
	$("#btn-download").click(function(){
		goToByScroll('download');
	});
	
	$("#btn-support").click(function(){
		goToByScroll('support');
	});
	
	$("#btn-author").click(function(){
		window.open("http://promatik.pt");
	});
	
	/* DEMO */ 
	$("button").attr("disabled", true);
	$("button").first().attr("disabled", false);
	
	$("#action-rend").click(function(){
		$("button").attr("disabled", true);
		$("button").first().attr("disabled", false);
		renderSocialPlugins();
	});
	
	$("#action-ajax").click(function(){
		$("button").attr("disabled", false);
		$("button").first().attr("disabled", true);
		
		$("#ajax-results").html("").append(
			'<div class="soc"><div class="fb-like" data-href="http://promatik.pt" data-send="false" data-layout="button_count" data-width="450" data-show-faces="true" data-font="arial"></div></div>' +
			'<div class="soc"><script type="IN/Share" data-url="http://promatik.pt" data-counter="right"></script></div>' +
			'<div class="soc"><a style="width:100%; height:100%" href="https://twitter.com/share" class="twitter-share-button" data-url="http://promatik.pt" data-lang="en"></a></div>' +
			'<div class="soc"><div class="g-plusone" data-size="medium" data-annotation="none" href="http://promatik.pt"></div></div>'
		);
	});

	function goToByScroll(id){
		$('html,body').animate({scrollTop: $("#"+id).offset().top-80},'slow');
	}
	
	socialInit({
		fbAppId: "346759598747625",
		facebook: true,
		google: true,
		twitter: true,
		linkedin: true
	});
});