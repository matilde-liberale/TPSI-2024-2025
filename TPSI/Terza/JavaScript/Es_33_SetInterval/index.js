"use strict";

window.onload = function()
{
    let _divs = document.getElementsByTagName("div");
	let _oraCorrente=_divs[0];
	let _tempoTrascorso=_divs[1];
	let _wrapper=_divs[2];
	let _btnStop = document.getElementById("btnStop");
	let _btnStart = document.getElementById("btnRestart");
	let timerID;
	let timerID2 = setInterval(aggiornaTempoCorrente, 1000);
	let seconds = 0;
	let minutes = 0;
	_btnStop.disabled=true;

	// leggo le dimensioni wrapper
	// alert(_wrapper.style.width)  // stringa vuota
	let wrapper_w = getComputedStyle(_wrapper).width;
	let wrapper_h = getComputedStyle(_wrapper).height;
	// alert(wrapper_w) devo togliere il 'px' finale
	wrapper_w = parseInt(wrapper_w.substring(0, wrapper_w.length - 2));
	wrapper_h = parseInt(wrapper_h.substring(0, wrapper_h.length - 2));

	_btnStart.addEventListener("click", function(){ 
		timerID = setInterval(generaDiv, 50);
		this.disabled = true;
		_btnStop.disabled = false;
	})

	_btnStop.addEventListener("click", function(){
		if(timerID)
			clearInterval(timerID);

		this.disabled = true;
		_btnStart.disabled = false;
	})

	function generaDiv(){
		let _div = document.createElement("div");

		//genera dimensioni
		let width = generaNumero(1, 101);
		let height = generaNumero(1, 101);
		_div.style.width = width;
		_div.style.height = height;

		//genera colori
		let red = generaNumero(0, 256);
		let green = generaNumero(0, 256);
		let blue = generaNumero(0, 256);
		let color = `rgb(${red}, ${green}, ${blue})`;
		_div.style.backgroundColor = color;

		//genera posizione
		let x = generaNumero(0, wrapper_w-width);
		let y = generaNumero(0, wrapper_h-height);
		_div.style.top = y;
		_div.style.left = x;
		_div.style.position = "absolute";

		//appendo div a wrapper
		_wrapper.appendChild(_div);
	}
	
	function aggiornaTempoCorrente(){
		//leggo data corrente
		let date = new Date();

		//visualizzo solo l'ora
		_oraCorrente.textContent = date.toLocaleTimeString();

		seconds++;
		if(seconds%60 == 0)
		{
			minutes++;
			seconds = 0;
		}

		_tempoTrascorso.textContent = pad(minutes) + " : " + pad(seconds);
	}

}

function pad(number) {
	return (number < 10 ? '0' : '') + number;
}

function generaNumero(min, max){
    let rnd = Math.floor((max - min) * Math.random()) + min;   
    return rnd;
}