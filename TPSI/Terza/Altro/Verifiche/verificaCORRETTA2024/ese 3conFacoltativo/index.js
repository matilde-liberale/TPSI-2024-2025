"use strict"

let _container1;
let _container2;
let _ImageDivs
let val
let vet = []
let pos 

window.onload = function () {
	_container1 = document.getElementById("container1")
	_container2 = document.getElementById("container2")
	_ImageDivs = _container1.getElementsByTagName("div")
	for (let i = 1; i <= _ImageDivs.length; i++) {
		do {
			pos = random(0, 9)
		} while (vet.includes(pos))
		vet.push(pos)
		const item = _ImageDivs[pos]
		item.style.backgroundImage = 'url(./img/img' + i + '.jpg)'
		item.semaforo = i <= 4
		//sintassi alternativa
		//item.setAttribute("semfaoro",i<=4)
		item.checked = false;
	}
}

function seleziona(event) {
	let mydiv = event.target
	/*if (mydiv.checked) {
		mydiv.style.border = '3px solid #afa'
		mydiv.checked = false
	}
	else {
		mydiv.style.border = '3px solid #f00'
		mydiv.checked = true
	}*/
	mydiv.style.border = mydiv.checked ? '3px solid #afa' : '3px solid #f00'
	mydiv.checked = !mydiv.checked
}

function verifica() {
	let ok = true
	let i = 0
	while (ok && i < _ImageDivs.length) { //parto dal presupposto che sia tutto ok, verifico semplicemente se va tutto bene,
		// appena ne trovo uno che non va bene esco. Non devo uscire se ho semaforo e checked insieme, oppure se non ho semaforo e non ho checked
		const item = _ImageDivs[i]
		ok = (item.semaforo && item.checked) || (!item.semaforo && !item.checked)
		i++
	}

	if (ok) {
		_container1.style.display = 'none'
		_container2.style.display = 'block'
	}
	else {
		alert("Riprova!")
	}
}

function controllaInput(event) {
	return (event.keyCode <= 48 && event.keyCode <= 57) || event.keyCode == 8
}

function abilitaPulsante(event) {
	val = parseInt(event.target.value)
	let _genera = document.getElementById('btnGenera')
	_genera.disabled = !(val >= 8 && val <= 20)
}

function genera() {
	let pwd = ""
	for (let i = 0; i < val; i++) {
		let num = random(47, 123)
		pwd += String.fromCharCode(num)
	}
	_container2.getElementsByTagName('span')[0].textContent = pwd;
}

function random(min, max) {
	return Math.floor((max - min) * Math.random() + min)
}