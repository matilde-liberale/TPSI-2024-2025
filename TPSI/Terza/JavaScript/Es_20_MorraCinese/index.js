"use strict";

let valUtente;

window.onload=function()
{
    let _imgUtente=document.getElementById("imgUtente");
    let _imgComputer=document.getElementById("imgComputer");
    let _small=document.getElementsByClassName("small");
    let _btnGioca=document.getElementById("btnGioca");
	let _txtRisultato=document.getElementById("txtRisultato");

    _imgUtente.style.backgroundImage = `url("img/vuota.png")`;
    _imgComputer.style.backgroundImage = `url("img/vuota.png")`;

    _small[0].style.backgroundImage = `url("img/mano.png")`;
    _small[1].style.backgroundImage = `url("img/sasso.png")`;
    _small[2].style.backgroundImage = `url("img/forbice.png")`;

    _small[0].valore = "mano";
    _small[1].valore = "sasso";
    _small[2].valore = "forbice";

    for (const _sm of _small) {
        _sm.addEventListener("click", premuto);
    }

    function premuto(){
        _txtRisultato.textContent = "";
        valUtente = this.valore;
        _imgUtente.style.backgroundImage = `url("img/${valUtente}.png")`;
        _imgComputer.style.backgroundImage = `url("img/vuota.png")`;        
    }

    _btnGioca.addEventListener("click", gioca);

    function gioca(){
        if(valUtente != undefined)
        {
            let vittoria;
            let pos;
            
            do
            {
                pos = random(0, 3);
            }
            while(valUtente == _small[pos].valore)

            _imgComputer.style.backgroundImage = `url("img/${_small[pos].valore}.png")`;

            switch(valUtente)
            {
                case "forbice":
                    if(_small[pos].valore == "mano")
                        vittoria = true;
                    else
                        vittoria = false;
                    break;
                
                case "mano":
                    if(_small[pos].valore == "sasso")
                        vittoria = true;
                    else
                        vittoria = false;
                    break;

                case "sasso":
                    if(_small[pos].valore == "forbice")
                        vittoria = true;
                    else
                        vittoria = false;
                    break;
            }

            if(vittoria)
                _txtRisultato.textContent = "Il vincitore è l'Utente";
            else
                _txtRisultato.textContent = "Il vincitore è il Computer";

        }
        else
        {
            alert("Seleziona un immagine tra quelle in basso!");
        }
    }
}



function random(min,max){
    return Math.floor((max-min)*Math.random())+min;
}