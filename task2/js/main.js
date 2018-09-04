function changeStyle() { // change CSS via JS
	var elem = document.getElementsByTagName('button');
	var i=0;
	while (i<elem.length){	
		elem[i].style.backgroundColor = '#FF0000';
		elem[i].style.borderColor = 'black';
		i++;
	}
	document.getElementById('flexcss').style.flexDirection = 'row';
}

function redirect(){ 
	window.location = "http://onliner.by";
}

function changePage(){ // delete/create new DOM
	document.body.innerHTML = "";
	var container = document.createElement("div"); // flexbox container
	container.id = 'flexbox';
	var box = document.createElement("div"); // flexbox item
	box.className = "box";
	box.innerHTML = "<h1>Box</h1>";
	box.innerHTML += "<p>Simple text</p>";
	var col = prompt('Введите количество блоков:');
	for (var i=0; i<col; i++){
			container.appendChild(box.cloneNode(true));
	}
	document.body.appendChild(container); // new body with flexbox container

	/*style for flexbox container*/
	document.getElementById('flexbox').style.cssText = " \
		color: yellow; \
		margin: 10px; \
		display: flex;\
		align-items: stretch;\
		flex-direction: row;\
		flex-wrap: wrap;\
		";

	/*style for flexbox items*/
	var boxes = document.getElementsByClassName("box"); //create css for all flex-items
		for (var i=0; i<boxes.length; i++){
			boxes[i].style.cssText = "\
				margin: 10px;\
				padding: 10px;\
				background-color: blue; \
				border: 3px solid black;\
				border-radius: 10px;\
			";
		}
}
