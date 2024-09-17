"use strict";

const nomi = ["Italia", "Lavagna", "Pizza", "Lasagne", "Spiedino", "Ananas", "Gnocchi", "Gorgonzola", "Broccoli", "Mango", "Biscotti", 
		 "Giornale", "Carabina", "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", "Ambulanza", "Ostetricia"];

const MAX_TENTATIVI=5;

let parolaSegreta;

let _txtParola;
let _img;
let _btnInvia;
let _txtLettera;
let parola = "";

let errori;

onload = function(){
	_txtParola = document.getElementById("txtParola");
	_txtLettera = document.getElementById("txtLettera");
	_btnInvia = document.getElementsByTagName("button")[0];
	_img = document.getElementsByTagName("img")[0];

	parolaSegreta = nomi[random(0, nomi.length)].toUpperCase();
	console.log(parolaSegreta);
	errori=0;

	for (let i = 0; i < parolaSegreta.length; i++) {
		parola += "*";
	}

	_txtParola.value = parola;
}

function converti(){
	_txtLettera.value=_txtLettera.value.toUpperCase();
}

function elabora(){
	let ch = _txtLettera.value;
	let trovato=false;

	let nuovaParola = "";

	for (let i = 0; i < parolaSegreta.length; i++) {
		if(parolaSegreta.charAt(i) == ch)
		{
			nuovaParola += ch;
			trovato=true;
		}
		else if(parola.charAt(i) != "*")
		{
			nuovaParola += parola.charAt(i);
		}
		else
		{
			nuovaParola += "*";
		}
	}

	if(!trovato){
		errori++;
		_img.src = `img/Fig${errori}.png`;
	}

	if(errori > 5){
		fine("HAI PERSO");
	}

	parola=nuovaParola;
	_txtParola.value = parola;
	_txtLettera.focus();
	_txtLettera.value="";

	if(!parola.includes("*"))
	{
		fine("HAI VINTO");
	}
}

function fine(msg){
	alert(msg);
	_btnInvia.disabled = true;
	_txtLettera.disabled = true;
	_img.src = "img/vuoto.png";
}

function random(max, min){
	return Math.floor((max-min)*Math.random()) + min;
}