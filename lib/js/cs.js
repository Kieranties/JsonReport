var imageUrl = chrome.extension.getURL('lib/images/icon48.png');
var injectHtml = "<section id='jsonrChrome'>" +
	"<a id='jsonrChromeClose' href='#'>close</a>" +
	"<p style=\"background-image:url('" + imageUrl +"');\">View in JsonReport</p>" +
	"</section>";

$(injectHtml).appendTo("body");
$("#jsonrChromeClose").click(function(evt){
	$(this).parent().remove();
});

$("#jsonrChrome").click(function(evt){
	//send message to background page to render this item
	chrome.extension.sendRequest({
		"type": "initUrlReport",
		"payload": location.href
	});
});