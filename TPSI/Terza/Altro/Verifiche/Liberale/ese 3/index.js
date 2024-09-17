"use strict"

let _container1;
let _txtTextBoxcontainer2;
let div
let images = [
	'img1.jpg',
	'img2.jpg',
	'img3.jpg',
	'img4.jpg',
	'img4.jpg',
	'img6.jpg',
	'img7.jpg',
	'img8.jpg',
	'img9.jpg'
];
let _semaforo


window.onload = function() {
    div = document.querySelectorAll('#container1 div');
	_semaforo = div.getAttribute('semaforo')
    for (var i = 0; i < div.length; i++) {
        div[i].style.backgroundImage = 'url(' + images[i] + ')';
	
	}
};












function random(min, max){
	return Math.floor((max-min)*Math.random()+min)
}



