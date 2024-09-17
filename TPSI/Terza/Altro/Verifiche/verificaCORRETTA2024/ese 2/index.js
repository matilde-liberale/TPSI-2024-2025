"use strict"

let cellaLibera = 7;
let vet = []
let vuoto
let _inputs
let _btnSposta

window.onload = function () {
	_inputs = document.getElementsByClassName('lettera')
	_btnSposta = document.getElementsByClassName('sposta')
	for (let i = 0; i < 7; i++) {
		let n 
		do 
			n = random(65, 91)
		while (vet.includes(n))
		vet.push(n)
		_inputs[i].value = String.fromCharCode(vet[i])
	} 
	console.log(vet)
}

function sposta(pos) {
	let i = 0;
	for (i = 0; i < _inputs.length; i++) {
		if(_inputs[i].value == "")
			vuoto = i
	}
	_inputs[vuoto].value = _inputs[pos].value
	_inputs[pos].value = ""
	_btnSposta[vuoto].disabled = false
	_btnSposta[pos].disabled = true

	for (let i = 0; i < _inputs.length; i++) {
		if(_inputs[i].value != "")
			verifica.disabled = false 
	}
}


function random(min, max){
	return Math.floor((max-min)*Math.random()+min)
}
