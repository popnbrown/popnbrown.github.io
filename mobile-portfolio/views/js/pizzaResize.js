//This worker class will handle size calculation of each pizza

this.onmessage = function(e){
	console.log("Pizza Resize Worker for element #" + e.data.index);
	var newsize = e.data.newsize;
	var windowWidth = e.data.windowWidth;
	var offsetWidth = e.data.offsetWidth;

	var dx, newwidth, oldsize

	oldsize = offsetWidth / windowwidth;
	dx = (newsize - oldsize) * windowwidth;
	newwidth = (offsetWidth + dx) + 'px';

	postMessage({'index': e.data.index, 'newwidth': newwidth});
}