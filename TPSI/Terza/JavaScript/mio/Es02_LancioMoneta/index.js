'use strict'

let _lblTesta
let _lblCroce

let contenutoInizialeT;
let contenutoInizialeC;

window.onload = function () {
    _lblTesta = document.getElementById('lblTesta');
    _lblCroce = document.getElementById('lblCroce');
    contenutoInizialeT = _lblTesta.innerHTML;
    contenutoInizialeC = _lblCroce.innerHTML;
    console.log(contenutoInizialeT, contenutoInizialeC);
}

function lanciaMoneta() {
    let _txtLanci = document.getElementById('txtLanci')

    let nLanci = parseInt(_txtLanci.value) //se scrivo un numero in lettere mi da NaN (not a number)
    if (isNaN(nLanci)) //se non è un numero non ha sensi andare avanti devo richiedere, altrimetni va avanti e poi in errore
    {
        alert('Numero non valido!\nIntrodurre un numero')
        return;  //lo abbiamo messo per interrompere la funzione altrimenti va avanti, potrei usare ELSE come alternativa
    }
    let cntCroce = 0;
    let cntTesta = 0;

    for (let i = 0; i < nLanci; i++) {
        let n = GeneraNumeroRandom(0, 2); //tra 0 e 2 perche' l'estremo superiore è SEMPRE escluso
        if (n == 0) {
            cntTesta++;
        }
        else {
            cntCroce++;
        }
    }

    _lblTesta.innerHTML = contenutoInizialeT + '<b>' + cntTesta + '</b>';
    _lblCroce.innerHTML = contenutoInizialeC + '<b>' + cntCroce + '</b>';

    _lblTesta.style.color = 'black'
    _lblCroce.style.color = 'black'

    if (cntTesta > cntCroce) {
        _lblTesta.style.color = 'red'
    } else if (cntCroce > cntTesta) {
        _lblCroce.style.color = 'red'
    }
}

function GeneraNumeroRandom(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
    //unica forma che genra numeri con probabilità uguali, USEREMO SEMPRE QUESTO
}