"use strict";

window.onload = function(){
    let _img = document.getElementById("imgCarta");
	let _btnGioca = document.getElementById("btnGioca");
	let _lblSomma = document.getElementById("lblSomma");
	let _lblCarte = document.getElementById("lblCarte");
	let _lblRisultato = document.getElementById("lblRisultato");
	
	_btnGioca.addEventListener('click', function(){
		setTimeout(generaCarta, 1000)
		this.disabled = true
	})

	let vet = []
	let somma = 0
	let cont = 0

	function generaCarta(){
		let value

		do {
			value = generaNumero(1, 11)
		} while (vet.includes(value))
		vet.push(value)

		_img.src = `img/bg_d${value}.gif`

		if (value >= 8) {
			value = 0.5
		}

		cont++
		somma += value
		_lblSomma.innerHTML = somma
		_lblCarte.textContent = cont

		if(cont < 3)
			setTimeout(generaCarta, 1000)
		else 
		{
			if(somma <= 7.5)
				_lblRisultato.textContent = "Hai vinto!"
			else 
				_lblRisultato.textContent = "Hai perso!"
			setTimeout(function(){
				alert("GIOCO TERMINATO\nREFRESH PER RIGIOCARE")}, 80)
		}
	}
}


function generaNumero(min, max){
    let rnd = Math.floor((max - min) * Math.random()) + min;   
    return rnd;
}