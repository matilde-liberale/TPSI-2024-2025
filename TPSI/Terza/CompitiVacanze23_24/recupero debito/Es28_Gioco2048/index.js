'use strict'

const DIM = 4

let _divs = []
let _punteggio

window.onload = function () {
	let _wrapper = document.querySelector('#wrapper')
	_punteggio = document.querySelector('span')

	for (let i = 0; i < DIM; i++) {
		let _divss = []
		for (let j = 0; j < DIM; j++) {
			let _div = document.createElement('div')
			_div.id = `${i}-${j}`
			_div.classList.add('cella')
			_divss.push(_div)
			_wrapper.appendChild(_div)
		}
		_divs.push(_divss)
	}

	creaNumero()
	creaNumero()
	document.addEventListener('keydown', elabora)
}

function creaNumero() {
	let x
	let y

	do {
		x = generaNumero(0, DIM)
		y = generaNumero(0, DIM)
	} while (_divs[x][y].textContent != '')

	_divs[x][y].textContent = 2
}

function elabora(event) {
	console.log(event.key)
	switch (event.key) {
		case 'ArrowUp':
			spostaSu()
			break
		case 'ArrowDown':
			spostaGiu()
			break
		case 'ArrowLeft':
			spostaSx()
			break
		case 'ArrowRight':
			spostaDx()
			break
	}

	calcoloPunteggio()

	if (!fineGioco())
		creaNumero()
	else {
		document.body.removeAttribute('onkeyup')
		alert('Il tuo punteggio è di ' + _punteggio.textContent + ' punti')
	}
}

function fineGioco() {
	for (let i = 0; i < DIM; i++) {
		for (let j = 0; j < DIM; j++) {
			if (_divs[i][j].textContent == '')
				return false
		}
	}

	return true
}

function calcoloPunteggio() {
	let punt = 0

	for (let i = 0; i < DIM; i++) {
		for (let j = 0; j < DIM; j++) {
			if (_divs[i][j].textContent != '2' && _divs[i][j].textContent != '')
				punt += parseInt(_divs[i][j].textContent)
		}
	}

	_punteggio.textContent = punt
}

function spostaSu() {
	for (let k = 0; k < 3; k++) {
		for (let i = DIM - 1; i > 0; i--) {
			for (let j = 0; j < DIM; j++) {
				if (_divs[i][j].textContent != '') {
					if (_divs[i - 1][j].textContent != '') {
						if (_divs[i][j].textContent == _divs[i - 1][j].textContent) {
							_divs[i - 1][j].textContent = parseInt(_divs[i][j].textContent) + parseInt(_divs[i - 1][j].textContent)
							_divs[i][j].textContent = ''
						}
					}
					else {
						_divs[i - 1][j].textContent = _divs[i][j].textContent
						_divs[i][j].textContent = ''
					}
				}
			}
		}
	}
}

function spostaGiu() {
	for (let k = 0; k < 3; k++) {
		for (let i = 0; i < DIM - 1; i++) {
			for (let j = 0; j < DIM; j++) {
				if (_divs[i][j].textContent != '') {
					if (_divs[i + 1][j].textContent != '') {
						if (_divs[i][j].textContent == _divs[i + 1][j].textContent) {
							_divs[i + 1][j].textContent = parseInt(_divs[i][j].textContent) + parseInt(_divs[i + 1][j].textContent)
							_divs[i][j].textContent = ''
						}
					}
					else {
						_divs[i + 1][j].textContent = _divs[i][j].textContent
						_divs[i][j].textContent = ''
					}
				}
			}
		}
	}
}

function spostaDx() {
	for (let k = 0; k < 3; k++) {
		for (let j = 0; j < DIM - 1; j++) {
			for (let i = 0; i < DIM; i++) {
				if (_divs[i][j].textContent != '') {
					if (_divs[i][j + 1].textContent != '') {
						if (_divs[i][j].textContent == _divs[i][j + 1].textContent) {
							_divs[i][j + 1].textContent = parseInt(_divs[i][j].textContent) + parseInt(_divs[i][j + 1].textContent)
							_divs[i][j].textContent = ''
						}
					}
					else {
						_divs[i][j + 1].textContent = _divs[i][j].textContent
						_divs[i][j].textContent = ''
					}
				}
			}
		}
	}
}

function spostaSx() {
	for (let k = 0; k < 3; k++) {
		for (let j = DIM - 1; j > 0; j--) {
			for (let i = 0; i < DIM; i++) {
				if (_divs[i][j].textContent != '') {
					if (_divs[i][j - 1].textContent != '') {
						if (_divs[i][j].textContent == _divs[i][j - 1].textContent) {
							_divs[i][j - 1].textContent = parseInt(_divs[i][j].textContent) + parseInt(_divs[i][j - 1].textContent)
							_divs[i][j].textContent = ''
						}
					}
					else {
						_divs[i][j - 1].textContent = _divs[i][j].textContent
						_divs[i][j].textContent = ''
					}
				}
			}
		}
	}
}

function generaNumero(min, max) {
	return Math.floor((max - min) * Math.random()) + min
}