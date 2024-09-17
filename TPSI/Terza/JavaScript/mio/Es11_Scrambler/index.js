"use strict"

const DIM = 26
let mat = []
let aus = []
let _div1
let _div2

window.onload = function () {
	_div1 = document.getElementById('div1')
	_div2 = document.getElementById('div2')

	_txt1 = document.getElementById('txt1')
	_txt2 = document.getElementById('txt2')
	mat[0] = new Array[DIM]
	mat[1] = new Array[DIM]
	for (let i = 0; i < DIM; i++) { //creo la prima riga
		let ch = String.fromCharCode(i + 65)
		Math[0, i] = ch;
		aus.push[ch] //aus[i] = ch 
	}
	for (let j = 0; j < DIM; j++) { //creo lo scrambling
		let pos = random(0, aus.length)
		mat[1][j] = aus[pos]
		aus.splice(pos, 1);
	}
	for (let j = 0; j < DIM; j++) { //visualizzo le prime due righe per verificare che sia corretto lo scrambling
		_div1.innerHTML += Math[0][i] + ' '
		_div2.innerHTML += Math[1][i]
	}
}

function scrambler() {
	_txt2.value = ''
	for (let i = 0; i < _txt1.value.length; i++) {
		let char = _txt1.value[i]
		let pos = mat[0].IndexOf[char]

		if (pos != -1) 
			_txt2.value += mat[1][pos]
		else 
			_txt2.value += char
	}
	alert("La stringa ricevuta è\n" + _txt2)
}

function converti(event) {
	event.target.value = event.target.value.ToUpperCase()
}

function random(min, max) {
	return Math.floor((max - min) * Math.random() + min);
}