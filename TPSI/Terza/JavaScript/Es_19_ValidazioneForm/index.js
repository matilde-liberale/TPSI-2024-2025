"use strict";

window.onload = function () {
	let _txtMatricola = document.getElementById("matricola");
	let _txtCognome = document.getElementById("cognome");
	let _txtNome = document.getElementById("nome");
	let _optGenere = document.getElementsByName("genere");
	let _lstRegione = document.getElementById("regione");
	
	let _chkLavoratore = document.getElementById("lavoratore");
	let _pDescrizione = document.getElementById("descrizione");
	let _txtDescrizione= _pDescrizione.querySelector("input");

	let _divMsg= document.getElementById("msg");
	let _btn=document.querySelector("input[type=button]");

	_pDescrizione.style.visibility = "hidden";

	let riss = [];

	_txtMatricola.addEventListener("change", controlloMatricola);
	_txtCognome.addEventListener("change", controllo);
	_txtNome.addEventListener("change", controllo);

	function controllo(){
		let ris;
		let i;

		if(this == _txtCognome)
			i = 1;
		else
			i =2;

		if(this.value == "")
			ris = false;

		if(!isLetter(this.value))
		{
			this.style.borderBottomColor = "red";
			ris = false;
		}
		else
		{
			this.style.borderBottomColor = "lightgreen";
			ris = true;
		}
	
		riss[i] = ris;
	}

	function controlloMatricola(){
		let ris;

		if(this.value == "")
			ris = false;

		if(!isDigit(this.value))
		{
			this.style.borderBottomColor = "red";
			ris = false;
		}
		else
		{
			this.style.borderBottomColor = "lightgreen";
			ris = true;
		}
	
		riss[0] = ris;
	}

	_chkLavoratore.addEventListener("click", function() { if(this.checked) { _pDescrizione.style.visibility = "visible"; riss[3] = false; _txtDescrizione.disabled = false; } else {  _pDescrizione.style.visibility = "hidden"; _txtDescrizione.disabled = true; _txtDescrizione.value = ""; _txtDescrizione.style.borderBottomColor = "lightgreen"; }})
	_txtDescrizione.addEventListener("change", function(){
		if(this.value == "")
		{
			this.style.borderBottomColor = "red";
			riss.includes(false);
			riss[3] = false;
		}
		else
		{
			this.style.borderBottomColor = "lightgreen";
			riss.includes(true);
			riss[3] = true;
		}
	})

	_btn.addEventListener("click", controlliInvio);

	function controlliInvio(){
		if(riss.includes(false) || conteggio() < 3 || (!_optGenere[0].checked && !_optGenere[1].checked))
		{
			let i = riss.indexOf(false);

			switch(i)
			{
				case 0:
					_txtMatricola.style.borderBottomColor = "red";
					break;

				case 1:
					_txtCognome.style.borderBottomColor = "red";
					break;

				case 2:
					_txtNome.style.borderBottomColor = "red";
					break;

				case 3:
					_txtDescrizione.style.borderBottomColor = "red";
					break;
			}

			alert("Campi non validi");
			return false;
		}
	}

	function conteggio(){
		let conteggio = 0;
	
		for (let i = 0; i < riss.length; i++) 
		{
			if(riss[i] != null && riss[i] != undefined)
				conteggio++;
			else
			{
				switch(i)
				{
					case 0:
						_txtMatricola.style.borderBottomColor = "red";
						break;

					case 1:
						_txtCognome.style.borderBottomColor = "red";
						break;

					case 2:
						_txtNome.style.borderBottomColor = "red";
						break;

					case 3:
						_txtDescrizione.borderBottomColor = "red";
						break;
				}
			}
			
		}

		return conteggio;
	}
}