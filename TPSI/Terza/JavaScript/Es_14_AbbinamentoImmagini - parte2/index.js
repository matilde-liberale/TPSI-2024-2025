"use strict";

let vet1=["arco",   "binari", "roulette", "palla",   "disco",   "luci",    "pop corn",  "moto",  "sci",   "aperitivo"];		 
let vet2=["freccia", "treno", "fiches",  "canestro", "stereo", "discoteca", "cinema",   "casco", "pista", "bar"];		 

let _img1;
let _txt;
let _txts;
let _imgs;
let _opts;
let index;

let imgCorr=-1;

let errori=0;
let giusti=0;

onload = function(){
	_img1 = document.getElementById("img");
	_txt = document.getElementById("txt");
	_txts = document.getElementsByClassName("txtRisposta");
	_imgs = document.getElementsByClassName("imgRisposta");
	_opts = document.getElementsByName("optRisposta");

	generaImg();

	let nums = [];

	for (let i = 0; i < 10; i++) {
		nums.push(i);
	}

	let i;

	for (const _img of _imgs) {
		i=nums[generaNumero(0, nums.length)];
		nums
		_img.src = "img/img" + (i+1) + "_" + vet2[i++] + ".jpg";
	}
}

function controlla(){
	let i=0;
	let selezionato = false;

	do
	{
		if(_opts[i].checked == true)
			selezionato = true;
		i++;
	} while(!selezionato && i < _opts.length);

	if(!selezionato)
		alert("Nessun Radio Button Selezionato");
	else
	{
		for (let i = 0; i < _opts.length; i++) {
			if(_opts[i].checked == true)
			{
				if(index == i && vet2[i] == _txts[i].value)
				{
					giusti++;
					generaImg();
					cancella();
					
					for (const _opt of _opts) {
						_opt.checked = false;
					}
				}
				else
				{
					errori++;
					alert("La risposta era " + vet2[index]);
				}
			}
		}
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

	console.log(_img1.src);
}

function cancella(){
	for (const _txtR of _txts) {
		_txtR.value = "";
	}
}

function generaNumero(a, b){
	return Math.floor((b-a)*Math.random()) + a;
}