# Social SDks v1.0

## Description
With Social SDks plugin, you can easily update, after an ajax request, buttons of social plugins like "Facebook Like", "g+", "Linked in Share", "Tweet"...
You don't need any additional Javascript code from Facebook or Google, its all packed in with this plugin.
You are able to choose witch plugins you are using to get a better performance.

## Demo
[Demo Social SDks](http://promatik.no.sapo.pt/github/social-sdks/)

## Download
* [Master branch](https://github.com/promatik/Social-SDKs/archive/master.zip)

## Setup
* How to setup the plugin on your website:

```javascript
<script type="text/javascript" src="social.sdks.js"></script>
<script type="text/javascript">
socialInit({
  fbAppId: "346759598747625", // Your Facebook App ID
  facebook: true, // true to use, false if you not intend to use it
  google: true,
  twitter: true,
  linkedin: true
});
</script>
```


## Support
* **Support requests** and **general discussions** about the Social SDks plugin can be posted to the official [support forum](https://groups.google.com/forum/#!forum/social-sdks).  
If your question is not directly related to the Social SDks plugin, you might have a better chance to get a reply by posting to [Stack Overflow](http://stackoverflow.com/questions/tagged/promatik+social-sdks). 
* **Bugs** and **Feature requests** can be reported using the [issues tracker](https://github.com/promatik/Social-SDKs/issues).

## Features
* **renderSocialPlugins**  
  This is the main function of this plugin, with this you can easily load social like/share buttons to your page, and by calling renderSocialPlugins(), those buttons will automaticly load.
* **It Allows you to choose what to use**  
  If you are going to use only Facebook, or only Twitter and Google Plus, its a good ideia to turn only those on and leave the other off, your page is going load faster

## Browsers

### Desktop browsers
The Social SDks plugin is supported by the following minimal versions:

* Google Chrome
* Apple Safari 4.0+
* Mozilla Firefox 3.0+
* Opera 11.0+
* Microsoft Internet Explorer 6.0+

## License
Released under the [MIT license](http://www.opensource.org/licenses/MIT).
