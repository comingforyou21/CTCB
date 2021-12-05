var html = document.getElementsByTagName("html")[0];
var rootResize = function() {
	var winClient = document.documentElement.clientWidth;
	var fontSize = winClient < 640 ? winClient / 16 : 40;
	if (fontSize < 20) {
		fontSize = 20;
	}
	html.style.fontSize = fontSize + "px";
}
rootResize();

window.onresize = function() {
	rootResize();
}

var menu = '' + 
'	<div id="nav">' + 
'		<a href="index.html">真相</a>' + 
'		<a href="faq.html">问答</a>' + 
'		<a href="document.html">电子书</a>' + 
'		<a href="video.html">视频</a>' + 
'	</div>';


document.write(menu);

