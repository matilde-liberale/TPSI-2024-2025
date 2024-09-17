"use strict";

const nomi =
	["Italia", "Lavagna", "Pizza", "Lasagne", "Spiedino", "Ananas", "Gnocchi", "Gorgonzola", "Broccoli", "Mango", "Biscotti",
		"Giornale", "Carabina", "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", "Ambulanza", "Ostetricia"];
const MAX_TENTATIVI = 5;

let parolaSegreta;
let _txtPunti
let _txts
let _chks
let _bntRisposta
let _btnInvia
let _txtIns;

window.onload = function () {
	let pos = random(0, nomi.length)
	parolaSegreta = nomi[pos].toUpperCase();
	console.log(parolaSegreta)
	_txtPunti = document.getElementById("txtPunti")
	_txtPunti.value = 100
	_txts = document.getElementsByName('txtCar')
	_chks = document.getElementsByName('chkRis')
	_bntRisposta = document.getElementById('btnRisposta')
	_btnInvia = document.getElementById('btnInvia')
	_txtIns = document.getElementById('txtIns')
	for (const _txt of _txts) {
		_txt.readOnly = true;
	}
	for (const chks of _chks) {
		chks.checked = false
		chks.disabled = true
	}
	for (let i = 0; i < parolaSegreta.length; i++) {
		_txts[i].value = '*';
	}
	_bntRisposta.disabled = false
}

function verifica(event) { //event e' un parametro che viene autoamticamente passato a tutte le procedure js,
	// nel caso dele procedure dinamiche, altrimenti se scrivo su html devo crivo io. PIU' IMPO EVENT.TARGET CHE E' PUNTATORE ALL''ELEMENTO CHE HA SCATENATO EVENTO	
	let _txt = event.target
	if (_txt.value == '') {
		_btnInvia.disabled = true
	}
	else {
		_btnInvia.disabled = false
	}
}

function confronta() {
	let chrIns = _txtIns.value
	for (let i = 0; i < parolaSegreta.length; i++) {
		let chr = parolaSegreta[i]
		if (chr == chrIns) {
			_txts[i].value = chr;
			_chks[i].checked = true
		}
	}
	let punti = parseInt(_txtPunti.value) //value è una STRINGA, se metto solo +5 concatena, con -5 invece funge
	_txtPunti.value = punti - 5
}

function risposta() {
	let risposta = prompt("Inserisci la tua risposta: ").toUpperCase()

	if (risposta == parolaSegreta) {
		alert('Hai vinto!')
		Termina();
	}
	else {
		_txtPunti.value = parseInt(_txtPunti.value) - 20
		if (parseInt(_txtPunti.value) > 0) {
			alert('SBAGLIATO!!! AHAHAHHAHAHA FAI SCHIFO')
		}
		else {
			alert('SBAGLIATO!!! AHAHAHHAHAHA HAI PERSO')
			Termina();
		}
	}
}

function Termina() {
	_btnInvia.disabled = true;
	_bntRisposta.disabled = true;
	_txtIns.disabled = true;
}

//vecchia stringa con tutti asterischi, supponiamo abbia trovato m che c'è io ho già sostituito, 
//dopo scorri parola segreta e vedo se la a è contenuta nella posizione corrente nella parola segreta, 
//se sì concaeteno la a altrimenti rimane asterisco, USO DUE STRINGHE PARALLELE
function random(a, b) {
	return Math.floor((b - a) * Math.random()) + a;
}