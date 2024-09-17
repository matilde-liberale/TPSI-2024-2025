"use strict";

let nomi =
	["Italia", "Lavagna", "Pizzeria", "Lasagne", "Spiedino", "Ananas", "Gnocchi",
     "Gorgonzola", "Broccoli", "Mango", "Biscotti", "Giornale", "Carabina", 
	 "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", 
	 "Ambulanza", "Ostetricia", "Giraudo", "Informatica", "Savigliano", "Lenovo", 
	 "pugno", "Dodecaedro", "Arneodo", "Sfortuna"];

let _txts;
let _chks;
let str;
let punti;
let _txtPunti;
let _txtIns;
let _btnRisposta;
let _btnInvia;

onload = function(){
	_txts = document.getElementsByName("txtCar");
	_chks = document.getElementsByName("chkRis");
	_txtPunti = document.getElementById("txtPunti");
	_txtIns = document.getElementById("txtIns");
	_btnRisposta = document.getElementById("btnRisposta");
	_btnInvia = document.getElementById("btnInvia");
	str=nomi[random(0, nomi.length-1)].toUpperCase();
	punti=100;
	_txtPunti.value = punti;
	_btnRisposta.disabled = false;

	console.log(str);

	for (const _txt of _txts) {
		_txt.readOnly = true;	
	}

	for (const _chk of _chks) {
		_chk.disabled = true;
		_chk.checked = false;
	}

	for (let i = 0; i < str.length; i++) {
		_txts[i].value="*";
	}

}

function random(min, max){
	return Math.floor((max-min)*Math.random()+min);
}

function abilita(){
	if(_txtIns.value=="")
		_btnInvia.disabled=true;
	else
	{
		_btnInvia.disabled = false;
	}

	_txtIns.value=_txtIns.value.toUpperCase();
}

function controlla(event){
    let ch = event.keyCode;
    let _txtIns = event.target;

    return (ch >= 65 && ch <= 90) || ch==8 || ch==13;
}

function confronta(){
	let ch = _txtIns.value;

	if(ch!=""){
		punti-=5;
	}

	_txtPunti.value = punti;

	if(!str.includes(ch)){
		alert("Il carattere inserito non si trova nella parola");
	}
	else{
		for (let i = 0; i < str.length; i++) {
			if(str[i]==ch){
				_txts[i].value=ch;
				_chks[i].checked=true;
			}
		}
	}

	_txtIns.focus();
	_txtIns.value="";

	if(controllaVittoria()){
		Fine("HAI VINTO");
	}

	if(punti<=0){
		punti=0;
		_txtPunti.value=punti;
		Fine("HAI PERSO");
	}
	
}

function controllaVittoria(){
	for (const _chk of _chks) {
		if(_chk.checked==false)
			return false;
	}
	return true;
}

function rispondi(){
	let s;
	
	s = prompt("QUAL'E'LA PAROLA?").toUpperCase();

	if(s==str){
		Fine("HAI VINTO");
	}
	else{
		alert("Risposta SBAGLIATA");
		punti-=20;
		_txtPunti.value = punti;
	}

	if(punti<=0){
		punti=0;
		_txtPunti.value=punti;
		Fine("HAI PERSO");
	}

}

function Fine(msg){
	Soluzione();
	_btnInvia.disabled=true;
	_btnRisposta.disabled=true;
	_txtIns.disabled=true;
	alert(msg);
}

function Soluzione(){
	for (let i = 0; i < str.length; i++) {
		_txts[i].value=str[i];
		_chks[i].checked=true;
	}

}

function gestisciInvio(){
	if(event.key == "Enter")
		confronta();
}