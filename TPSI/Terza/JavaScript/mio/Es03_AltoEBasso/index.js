'use strict'  //obbloga a dichiarare le bariabili

let numeroSegreto;
let cnpTentativi = 0;
let _txtNumero;
let _divTentativi;
let _divMessaggi;
let _btnGioca;
let _btnReset;

window.onload = function () {
    numeroSegreto = GeneraNumeroRandom(1, 101);
    console.log(numeroSegreto)
    _txtNumero = document.getElementById("txtNumero")
    _divTentativi = document.getElementById("divTentativi")
    _divMessaggi = document.getElementById("divMessaggio")
    _btnGioca = document.getElementById("btnGioca")
    _btnReset = document.getElementById("btnReset")
    _btnReset.style.visibility = 'hidden'
}

function gioca() {
    let msg = "";
    let vinto = false; 
    if (isNaN(_txtNumero.value) || _txtNumero.value == '') 
    {
        alert('Numero non valido!')
        _txtNumero.value = ''
    }
    else {
        let numeroUtente = parseInt(_txtNumero.value)

        if (numeroUtente < 1 || numeroUtente > 100) {
            alert = ("Inserire un numero tra 1 e 100")
            _txtNumero.value = ''
            _txtNumero.focus()
        }
        else {

            cnpTentativi++
            _divTentativi.innerHTML = 'Tentativi: ' + cnpTentativi
            if (numeroUtente > numeroSegreto)
            {
                msg = 'numero inserito troppo grande: ' + numeroUtente
            }
            else if (numeroUtente < numeroSegreto)
            {
                msg = 'numero inserito troppo piccolo: ' + numeroUtente
            }
            else 
            {
                msg += `<br>HAI VINTO con il numero ${numeroUtente} in ${cnpTentativi} tentativi!`
                vinto = true 
                termineTurno()
            }

            if (!vinto && cnpTentativi >= 10)
            {
                msg += `<br>HAI PERSO! Il numero segreto era ${numeroSegreto})`
                termineTurno()
            }
            _divMessaggi.innerHTML += msg + '<br>'
        }
    }
    _txtNumero.focus(); 
    _txtNumero.value = ''
}

function GeneraNumeroRandom(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}

function termineTurno(){
    _btnGioca.disabled = true
    _txtNumero.disabled = true
    _btnReset.style.visibility='visible'
}

function gestisciInvio() {
    if (event.key === 'Enter')
    {
        gioca();
    }
}

