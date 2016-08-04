//This worker class will handle size calculation of each pizza

onmessage = function(e){
	var newsize = e.data.newsize;
	var windowWidth = e.data.windowWidth;
	var offsetWidth = e.data.offsetWidth;

	var dx, newwidth, oldsize

	oldsize = elem.offsetWidth / windowwidth;
	dx = (newsize - oldsize) * windowwidth;
	newwidth = (offsetWidth + dx) + 'px';

	postMessage({'index': e.data.index, 'newwidth': newwidth});
}