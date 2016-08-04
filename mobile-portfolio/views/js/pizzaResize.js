//This worker class will handle resizing all the pizza images

onmessage = function(e){
	var newsize = e.data;

	var dx, newwidth;
	var pizzaElements = document.getElementsByClassName("randomPizzaContainer");
	var pizzaLength = pizzaElements.length;

    var windowwidth = document.getElementByID("randomPizzas").offsetWidth;
	var oldsize, dx;

	for (var i = 0; i < pizzaLength; i++) {
	  oldsize = elem.offsetWidth / windowwidth;
	  dx = (newsize - oldsize) * windowwidth;
	  newwidth = (pizzaElements[i].offsetWidth + dx) + 'px';
	  pizzaElements[i].style.width = newwidth;
	}

	postMessage("Worker Complete!");
}