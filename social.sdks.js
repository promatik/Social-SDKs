/**
 * Social SDKs Plugin
 * version: 1.0 (2013-02-11)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Toni Almeida wrote this plugin, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK."
 *
 * Copyrighted 2013 by Toni Almeida, promatik.
 */

// Global
var socialsdk = { "fbAppId": "", "facebook": false, "google": false, "twitter": false, "linkedin": false };

function socialInit(data){
	if(data.fbAppId != undefined) fbAppId = data.fbAppId;
	if(data.facebook != undefined) socialsdk.facebook = data.facebook;
	if(data.linkedin != undefined) socialsdk.linkedin = data.linkedin;
	if(data.twitter != undefined) socialsdk.twitter = data.twitter;
	if(data.google != undefined) socialsdk.google = data.google;
	
	if(data.fbAppId == undefined && data.facebook == true)
		console.error("Facebook App ID must be provided!");
	
	// Facebook SDK
	if(socialsdk.facebook)
		(function(d, s, id) {
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) return;
		    js = d.createElement(s); js.id = id;
		    js.src = "//connect.facebook.net/pt_PT/all.js#xfbml=1&appId="+socialsdk.fbAppId;
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	
	// Google SDK
	if(socialsdk.google)
		(function() {
		    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		    po.src = 'https://apis.google.com/js/plusone.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();

	// Twitter API
	if(socialsdk.twitter)
		!function(d,s,id){
		    var js,fjs=d.getElementsByTagName(s)[0];
		    if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
		    js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}
		}(document,"script","twitter-wjs");

	// Linked In
	if(socialsdk.linkedin)
		(function() {
		    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		    po.src = '//platform.linkedin.com/in.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();
}

function renderSocialPlugins(){
	setTimeout(function(){
		if(socialsdk.facebook) try{ FB.XFBML.parse(); }catch(e){}
		if(socialsdk.linkedin) try{ IN.parse(); }catch(e){}
		if(socialsdk.twitter)  try{ twttr.widgets.load(); }catch(e){}
		if(socialsdk.google)   try{ gapi.plusone.go(""); }catch(e){}
	}, 400);
}