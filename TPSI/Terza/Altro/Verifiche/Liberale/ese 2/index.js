"use strict"

let cellaLibera = 7;
let num = []
let numOrdinato = []
let vuoto

let _txtLettera
let _btnSposta

window.onload = function () {
	_txtLettera = document.getElementsByClassName('lettera')
	_btnSposta = document.getElementsByClassName('sposta')
	for (let i = 0; i < 7; i++) {
		num[i] = random(65, 91)
		_txtLettera[i].value = String.fromCharCode(num[i])
		console.log(_txtLettera[i])
	}
	numOrdinato = num.sort()
	console.log(numOrdinato)
	for (let i = 0; i < numOrdinato.length; i++) {
		numOrdinato[i] = String.fromCharCode(numOrdinato[i])
	}
	_btnSposta[7].disabled = true
}

function sposta(pos) {
	let i = 0;
	for (i = 0; i < _txtLettera.length; i++) {
		if(_txtLettera[i].value == "")
			vuoto = i
	}
	_txtLettera[vuoto].value = _txtLettera[pos].value
	_txtLettera[pos].value = ""
	_btnSposta[vuoto].disabled = false
	_btnSposta[pos].disabled = true

	for (let i = 0; i < _txtLettera.length; i++) {
		if(_txtLettera[i].value != "")
			verifica.disabled = false 
	}
}

function verifica() { 
	let i = 0;
	let ver = []
	for ( i = 0; i < _txtLettera.length; i++) {
		ver[i] = _txtLettera[i].value.charCodeAt(i)
	}
	
	while (i > _txtLettera.length && ver[i].value == numOrdinato[i])
		i++
	if (i == _txtLettera.length)
	
	alert('Bravo, hai indovinato!')
		
	else 
	alert('Ordinamento non corretto, Riprova')
}

function random(min, max){
	return Math.floor((max-min)*Math.random()+min)
}
