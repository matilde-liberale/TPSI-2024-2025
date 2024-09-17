"use strict";

let nomi =
	["Italia", "Lavagna", "Pizzeria", "Lasagne", "Spiedino", "Ananas", "Gnocchi",
     "Gorgonzola", "Broccoli", "Mango", "Biscotti", "Giornale", "Carabina", 
	 "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", 
	 "Ambulanza", "Ostetricia"];
	 let parolaSegreta
	 let _txtPunti
	 let _txts
	 let _chksBox
	 let _btnInvia
	 let _bntRisposta
	 let _txtIns
	 
	 window.onload = function () {
		 _txtPunti = document.getElementById("txtPunti")
		 _txts = document.getElementsByName('txtCar')
		 _chksBox = document.getElementsByName('chkRis')
		 _btnInvia = document.getElementById('btnInvia')
		 _bntRisposta = document.getElementById('btnRisposta')
		 _txtIns = document.getElementById('txtIns')
	 }
	 
	 
	 function avvia() {
		 let pos = random(0, nomi.length)
		 parolaSegreta = nomi[pos].toUpperCase();
		 console.log(parolaSegreta)
	 
		 _txtPunti.value = 100
	 
		 for (const _txt of _txts) {
			 _txt.readOnly = true;
		 }
	 
		 for (const _chk of _chksBox) {
			 _chk.checked = false;
			 _chk.disabled = true;
		 }
	 
		 for (let i = 0; i < parolaSegreta.length; i++) {
			 _txts[i].value = '*';
		 }
		 for (let i = parolaSegreta.length; i < 10; i++) {
			 _txts[i].value = ' ';
		 }
	 
		 _btnInvia.disabled = false;
		 _bntRisposta.disabled = false;
	 }
	 
	 function verifica(event) {
		 let risp = event.target
		 if (risp.value == '')
			 alert("Inserire una lettera")
	 }
	 
	 function confronta() {
		 let lettera = _txtIns.value.toUpperCase()
		 for (let i = 0; i < parolaSegreta.length; i++) {
			 let carattere = parolaSegreta[i]
			 if (carattere == lettera) {
				 _txts[i].value = lettera
				 _chksBox[i].checked = true;
			 }
		 }
	 
		 _txtPunti.value = parseInt(_txtPunti.value - 5)
	 }
	 
	 function rispondi() {
		 let risposta = prompt("Inserisci la parola: ").toUpperCase()
	 
		 if (risposta == parolaSegreta) {
			 alert('HAI VINTO!!')
			 _btnInvia.disabled = true;
			 _bntRisposta.disabled = true;
		 }
		 else {
			 alert('Riprovare..!')
			 _txtPunti.value = parseInt(_txtPunti.value - 20)
		 }
	 
		 if (_txtPunti.value <= 0) {
			 alert('HAI PERSO!!')
			 _btnInvia.disabled = true;
			 _bntRisposta.disabled = true;
		 }
	 }
	 
	 function random(min, max) {
		 return Math.floor((max - min) * Math.random()) + min;
	 }