"use strict";

let vet1 = ["arco", "binari", "roulette", "palla", "disco", "luci", "pop corn", "moto", "sci", "aperitivo"];
let vet2 = ["freccia", "treno", "fiches", "canestro", "stereo", "discoteca", "cinema", "casco", "pista", "bar"];


let _img1
let _txt
let _txtGiuste
let _txtSbagliate
let _txtsRisposta
let _imgsRisposta
let _optsRisp
let imgCorr = -1
let pos
let giuste = 0
let sbagliate = 0

window.onload = function () {
	_img1 = document.getElementById("img")
	_txt = document.getElementById("txt")
	_txtGiuste = document.getElementById("txtCorrette")
	_txtSbagliate = document.getElementById("txtErrate")
	_txtsRisposta = document.getElementsByClassName("txtRisposta")
	_imgsRisposta = document.getElementsByClassName("imgRisposta")
	_optsRisp = document.getElementsByName("optRisposta")

	GeneraImmagine()
	VisualizzaImg()
}

function controlla() {
	let selezionato = false
	let i = 0

	do {
		if (_optsRisp[i].checked == true) {
			selezionato = true
		}
		else {
			i++;
		}
	} while (!selezionato && i < _optsRisp.length);

	if(!selezionato)
		alert('Nessun Radio Button Selezionato')
	else if((pos == i) && (_txtsRisposta[i].value == vet2[i])){
		giuste++
		_txtGiuste.innerHTML = 'Risposte Corrette: ' + giuste.toString()
		GeneraImmagine()
		cancella()
		_optsRisp[i].checked = false
	}
	else {
		sbagliate++
		_txtSbagliate.innerHTML = 'Risposte sbagliate: ' + sbagliate
	}

	
}

function cancella() {
	for (const _txtR of _txtsRisposta) {
		_txtR.value = "";
	}
}

function GeneraImmagine() {
	do {
		pos = generaNumero(0, vet1.length)
	} while (pos == imgCorr)

	_img1.src = "img/img" + (pos + 1) + " " + vet1[pos] + ".jpg"
	_txt.value = vet1[pos]
	imgCorr = pos
}

function VisualizzaImg() {
	for (let i = 0; i < _imgsRisposta.length; i++) {
		_imgsRisposta[i].src = "img/img" + (i + 1) + " " + vet2[i] + ".jpg"
		// _txtsRisposta[i].value = vet2[i]
	}
}

function generaNumero(a, b) {
	return Math.floor((b - a) * Math.random()) + a;
}