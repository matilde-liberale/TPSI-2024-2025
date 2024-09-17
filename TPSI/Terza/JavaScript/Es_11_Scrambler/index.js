"use strict"

const DIM=26;
let mat=[];
let aus = [];
let _div1;
let _div2;
let _txt1;
let _txt2;

onload = function(){
	_div1 = document.getElementById("div1");
	_div2 = document.getElementById("div2");

	_txt1 = document.getElementById("txt1");
	_txt2 = document.getElementById("txt2");

	caricaMatVet();

	for (let i = 0; i < DIM; i++) {
		_div1.innerHTML += mat[0][i] + " ";
		_div2.innerHTML += mat[1][i] + " ";
	}
}

function caricaMatVet(){
	for (let i = 0; i < 2 ; i++) {
		mat[i] = [DIM];
	}

	for (let i = 0; i < DIM; i++) {
		mat[0][i]= String.fromCharCode(i+65);
		aus.push(String.fromCharCode(i+65));
	}

	for (let i = 0; i < DIM; i++) {
		let pos = random(0, aus.length);
		mat[1][i] = aus[pos];
		aus.splice(pos , 1);
	}

	console.log(mat);
}


function random(min,max){
	return Math.floor((max-min)*Math.random()+min);
}

function scrambler(){
	_txt2.value="";

	for (let i = 0; i < _txt1.value.length; i++) 
	{
		let pos = mat[0].indexOf(_txt1.value[i]);

		if(pos != -1)	
		{
			_txt2.value += mat[1][pos];
		}
		else
		{
			_txt2.value += _txt1.value[i];
		}
	}	
}

function descrambler(){
	let ris = "";

	for (let i = 0; i < _txt2.value.length; i++) 
	{
		let pos = mat[1].indexOf(_txt2.value[i]);

		if(pos != -1)	
		{
			ris += mat[0][pos];
		}
		else
		{
			ris += _txt2.value[i];
		}
	}	

	alert("Il messaggio ricevuto è:\n" + ris);
}

function converti(event){
	event.target.value = event.target.value.toUpperCase();
}