"use strict";

const COLONNE=61;
const RIGHE=10;
const GRIGIO = "rgb(252, 252, 252)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";


window.onload=function()
{
    let _wrapper = document.getElementById("wrapper");
	let _btnJump = document.querySelector("input[type=button]");
	let _txtPunti = document.querySelector("input[type=text]");
	let punti = 0;
	let turno = 7;
	let indexOstacolo = 1;

	// creazione matrice di gioco
    for (let i = 0; i < RIGHE; i++){
        for (let j = 0; j < COLONNE; j++)
        {
           	let _div = document.createElement("div");
		   	_div.id = `${9 - i}-${j}`;
			_div.classList.add("cella");
			_wrapper.appendChild(_div);
        }
	}
	
	let player1 = document.getElementById("0-30");
	let player2 = document.getElementById("6-30");
	let ostacolo = document.getElementById("1-30");
	
	player1.style.backgroundColor = "blue";

	_btnJump.addEventListener("click", salta);

	let timerOstacoli = setInterval(gioco, 400);

	function gioco(){
		if(turno % 7 == 0)
			creaOstacoli();

		turno++;

		muoviOstacoli();
	}

	function creaOstacoli(){
		let h = random(0, 5);

		for (let i = 1; i <= h; i++) {
			document.getElementById(i + "-" + 0).style.backgroundColor = "red";
		}
	}

	function muoviOstacoli(){
		for (let j = COLONNE - 2; j >= 0 ; j--) {
			for (let i = 1; i < 6; i++) {
				let corr = document.getElementById(i + "-" + j);
				let succ =document.getElementById(i + "-" + (j+1));

				succ.style.backgroundColor = corr.style.backgroundColor;
				corr.style.backgroundColor = "";
			}
		}
	}

	function salta(){
		_btnJump.disabled = true;

		if(rigaLibera())
		{
			player2.style.backgroundColor = player1.style.backgroundColor;
			player1.style.backgroundColor = "";

			setTimeout(function(){
				if(rigaLibera())
				{
					player1.style.backgroundColor = player2.style.backgroundColor;
					player2.style.backgroundColor = "";
					punti++;
					_txtPunti.value = punti;
					_btnJump.disabled = false;
				}
				else
				{
					fineGioco();
				}
			}, 2000);
		}
		else
		{
			fineGioco();
		}

		function rigaLibera(){
			for (let i = 0; i < RIGHE; i++) {
				let _div = document.getElementById(i + "-" + 30);
				
				if(_div.style.backgroundColor == "red")
					return false;
			}

			return true;
		}
	}

	function fineGioco(){
		alert("Game Over");

		clearInterval(timerOstacoli);
		_btnJump.disabled = true;
		_btnJump.removeEventListener("click", salta);
	}
}


function random(a, b){
	return Math.floor((b-a+1)*Math.random()) +a;
	
}