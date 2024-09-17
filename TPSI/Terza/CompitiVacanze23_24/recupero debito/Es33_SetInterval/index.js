"use strict";

window.onload = function () {
	let _divs = document.getElementsByTagName("div");
	let _oraCorrente = _divs[0]
	let _tempoTrascorso = _divs[1]
	let _wrapper = _divs[2]
	let _btnStop = document.getElementById("btnStop");
	let _btnStart = document.getElementById("btnRestart");
	_btnStop.disabled = true
	let timerDiv
	let timerID2 = setInterval(aggiornaTempoCorrente, 1000)
	let secondi = 0
	let minuti = 0

	// leggo le dimensioni wrapper
	// alert(_wrapper.style.width)  // stringa vuota
	let wrapper_w = getComputedStyle(_wrapper).width;
	let wrapper_h = getComputedStyle(_wrapper).height;
	// alert(wrapper_w) devo togliere il 'px' finale
	wrapper_w = parseInt(wrapper_w.substr(0, wrapper_w.length - 2));
	wrapper_h = parseInt(wrapper_h.substr(0, wrapper_h.length - 2));

	_btnStart.addEventListener('click', function () {
		timerDiv = setInterval(generaDiv, 50)
		this.disabled = true
		_btnStop.disabled = false
	})

	_btnStop.addEventListener('click', function () {
		if (timerDiv)
			clearInterval(timerDiv)
		this.disabled = true
		_btnStart.disabled = false
	})

	function generaDiv() {
		let _div = document.createElement('div')

		let width = generaNumero(0, 101)
		let height = generaNumero(0, 101)
		_div.style.width = width
		_div.style.height = height

		let red = generaNumero(0, 256)
		let green = generaNumero(0, 256)
		let blue = generaNumero(0, 256)
		let color = `rgb(${red}, ${green}, ${blue})`
		_div.style.backgroundColor = color

		let x = generaNumero(0, wrapper_w - width)
		let y = generaNumero(0, wrapper_h - height)
		_div.style.top = y
		_div.style.left = x
		_div.style.position = 'absolute'

		_wrapper.appendChild(_div);
	}

	function aggiornaTempoCorrente() {
		let data = new Date()

		_oraCorrente.textContent = data.toLocaleTimeString()

		secondi++
		if (secondi % 60 == 0) {
			minuti++
			secondi = 0
		}

		_tempoTrascorso.textContent = pad(minuti) + " : " + pad(secondi)
	}
}

function pad(number) {
	let pad
	if(number < 10)
		pad = '0'
	else 
		pad = ''
	return pad + number
}


function generaNumero(min, max) {
	let rnd = Math.floor((max - min) * Math.random()) + min;
	return rnd;
}