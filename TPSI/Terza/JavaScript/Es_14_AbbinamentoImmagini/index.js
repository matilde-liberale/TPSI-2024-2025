"use strict";

let vet1=["arco",   "binari", "roulette", "palla",   "disco",   "luci",    "pop corn",  "moto",  "sci",   "aperitivo"];		 
let vet2=["freccia", "treno", "fiches",  "canestro", "stereo", "discoteca", "cinema",   "casco", "pista", "bar"];		 

let _img1
let _txt
let _txtGiuste
let _txtSbagliate
let _txtsRisposta
let _imgsRisposta
let _optsRisp
let po;

let imgCorr=-1;

let errori=0;
let giusti=0;

onload = function(){
	_img1 = document.getElementById("img");
	_txt = document.getElementById("txt");
	_txtGiuste = document.getElementById("txtCorrette");
	_txtSbagliate = document.getElementById("txtErrate");
	_txtsRisposta = document.getElementsByClassName("txtRisposta");
	_imgsRisposta = document.getElementsByClassName("imgRisposta");
	_optsRisp = document.getElementsByName("optRisposta");

	generaImg();

	let i=0;

	for (const _img of _imgs) {
		_img.src = "img/img" + (i+1) + "_" + vet2[i++] + ".jpg";
	}
}

function controlla(){
	let i=0;
	let selezionato = false;

	do
	{
		if(_opts[i].checked == true)
		{
			selezionato = true;
		}
		else
		{
			i++;
		}
	} while(!selezionato && i < _opts.length);

	if(!selezionato)
		alert("Nessun Radio Button Selezionato");
	else if((index) == i && vet2[i] == _txts[i].value)
	{
		giusti++;
		_txtG.innerHTML = "Risposte corrette: " + giusti;

		generaImg();
		cancella();
		for (const _chk of _opts) {
			_chk.checked = false;
		}
	}				
	else
	{
		errori++;
		_txtS.innerHTML = "Risposte errate: " + errori;
		alert("La risposta era " + vet2[index]);
	}
}

function generaImg(){
	do
	{
		index = generaNumero(0, vet1.length);
	} while(index == imgCorr);

	_img1.src = "img/img" + (index+1) + "_" + vet1[index] + ".jpg";
	_txt.value = vet1[index];
	imgCorr = index;
}

function cancella(){
	for (const _txtR of _txts) {
		_txtR.value = "";
	}
}

function generaNumero(a, b){
	return Math.floor((b-a)*Math.random()) + a;
}