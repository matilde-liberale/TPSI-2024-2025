"use strict"

let tentativi = 0;
let numeroSegreto;
let _txtNumero;
let _divTentativi;
let _divMsg;
let _btnGioca;
let _btnReset;

window.onload = function(){
    numeroSegreto = generaNumCasuale(1, 101);
    console.log(numeroSegreto);
    _txtNumero = document.getElementById("txtNumero");
    _divTentativi=document.getElementById("divTentativi");
    _divMsg=document.getElementById("divMessaggio");
    _btnGioca=document.getElementById("btnGioca");
    _btnReset=document.getElementById("btnReset");
    _btnReset.style.visibility="hidden";
}

function gioca(){
    let msg="";
    let vinto=false;

    if(isNaN(_txtNumero.value) || _txtNumero.value==""){
        alert("Inserire un numero valido");
        _txtNumero.value="";
        _txtNumero.focus();
    }
    else{
        let numUtente = parseInt(_txtNumero.value);

        if(numUtente < 1 || numUtente > 100){
            alert("Inserire un numero compreso tra 1 e 100");
            _txtNumero.value="";
            _txtNumero.focus();
        }
        else{
            tentativi++;
            _divTentativi.innerHTML = "Tentativi: " + tentativi;

            if(numUtente > numeroSegreto){
                msg = "Numero inserito TROPPO GRANDE: (" + numUtente + ")";
            }
            else if(numUtente < numeroSegreto){
                msg = "Numero inserito TROPPO PICCOLO: (" + numUtente + ")";
            }
            else{
                msg += `<br>HAI VINTO col numero ${numeroSegreto} in ${tentativi} tentativi`;
                vinto=true;
                terminaTurno();
            }

            if(!vinto && tentativi >= 10)
            {
                msg += `<br><br>HAI PERSO (Il numero segreto era ${numeroSegreto})`;
                terminaTurno();
            }

            _divMsg.innerHTML += msg + "<br>";
        }
        _txtNumero.focus();
        _txtNumero.value="";
    }
}

function generaNumCasuale(min, max){
    return Math.floor((max - min) * Math.random()) + min;
}

function gestisciInvio(){
    if(event.key === "Enter"){
        gioca();
    }
}

function terminaTurno(){
    _btnGioca.disabled=true;
    _txtNumero.disabled=true;
    _btnReset.style.visibility="visible";
}