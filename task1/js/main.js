document.addEventListener("DOMContentLoaded", ready);
var name;

function ready() {
	name = prompt('Введите имя:');
	if (checkName(name)){
		toUpper(name);
	} else {
		reverse(name);
	}
}

function checkName(name){
	var reg = /[0-9]/;
	for (var i = 0; i < name.length; i++){
		if (reg.test(name[i])){
			return true;
		}
	}
	return false;
}

function toUpper(name){
	var upper = '';
	for (var i = 0; i < name.length; i++){
		if (i % 2 == 1) {
			upper += name[i].toUpperCase();
		} else {
			upper += name[i];
		}
	}
	alert('Upper name:\n' + upper);
}

function reverse(name){
	var reverse = name.split("").reverse().join("");
	alert('Reverse name:\n' + reverse);
}