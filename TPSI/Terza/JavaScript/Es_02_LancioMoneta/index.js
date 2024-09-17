"use strict"

let contenutoInizialeTesta;
let contenutoInizialeCroce;

let _lblTesta;
let _lblCroce;

window.onload = function(){
    _lblTesta = document.getElementById("lblTesta");
    _lblCroce = document.getElementById("lblCroce");
    contenutoInizialeTesta = _lblTesta.innerHTML;
    contenutoInizialeCroce = _lblCroce.innerHTML;
    console.log(contenutoInizialeTesta, contenutoInizialeCroce);
}

function lanciaMoneta(){
    let _txtLanci = document.getElementById("txtLanci");

    let nLanci = parseInt(_txtLanci.value);

    if(isNaN(nLanci))
    {
        alert("Introdurre un numero");
        return;
    }

    let contaTesta=0;
    let contaCroce=0;

    for (let i = 0; i < nLanci; i++) {
        let n = generaNumCasuale(0, 2); //l'estremo superiore è escluso

        if (n==0) {
            contaTesta++;
        } else {
            contaCroce++;
        }
    }

    _lblTesta.innerHTML = contenutoInizialeTesta + "<b>" + contaTesta + "</b>";
    _lblCroce.innerHTML = contenutoInizialeCroce + "<b>" + contaCroce + "</b>";

    _lblTesta.style.color = "black";
    _lblCroce.style.color = "black";

    if(contaTesta > contaCroce){
        _lblTesta.style.color = "red";
    }
    else if(contaTesta < contaCroce){
        _lblCroce.style.color = "red";
    }

}

function generaNumCasuale(min, max){
    return Math.floor((max-min) * Math.random()) + min;
}