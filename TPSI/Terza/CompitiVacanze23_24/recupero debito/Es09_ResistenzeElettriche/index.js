"use strict";

const colori = ["Argento", "Oro", "Nero", "Marrone", "Rosso", "Arancio", "Giallo",
              "Verde", "Blu", "Viola", "Grigio", "Bianco" ];
const colTolleranze=["Argento", "Oro", "Marrone", "Rosso", "Verde", "Blu", "Viola"]
const valTolleranze=["10", "5", "1", "2", "0.5", "0.25", "0.1"];

let _lstCifra1
let _lstCifra2
let _fattore
let _tolleranza

let _divRisultato

window.onload = function () {
    _lstCifra1 = document.getElementsByTagName('select')[0]
    _lstCifra2 = document.getElementsByTagName('select')[1]
    _fattore = document.getElementsByTagName('select')[2]
    _tolleranza = document.getElementsByTagName('select')[3]

    _divRisultato = document.getElementById('txtRisultato')

    for (let i = 0; i < colori.length; i++) {
        const element = colori[i]

        _lstCifra1.innerHTML += '<option value=' + (i - 2) + '>' + element + '</option'
        _lstCifra2.innerHTML += '<option value=' + (i - 2) + '>' + element + '</option'
        if (i < 2) {
            _lstCifra1.getElementsByTagName('option')[i].disabled = true
            _lstCifra2.getElementsByTagName('option')[i].disabled = true
        }

        _fattore.innerHTML += '<option value=' + (i - 2) + '>' + element + '</option'
        if (i >= colori.length - 2) {
            _fattore.getElementsByTagName('option')[i].disabled = true
        }

        _tolleranza.innerHTML += '<option value=' + valTolleranze[i] + '>' + element + '</option'
        if (valTolleranze[i] == '') {
            _tolleranza.getElementsByTagName('option')[i].disabled = true
        }
    }
    _lstCifra1.selectedIndex = -1
    _lstCifra2.selectedIndex = -1
    _fattore.selectedIndex = -1
    _tolleranza.selectedIndex = -1
}

function calcola() {
    let ris = parseInt(_lstCifra1.value + _lstCifra2.value)

    ris *= Math.pow(10, parseInt(_fattore.value))

    if (ris < 20) {
        ris = ris.toFixed(2)
    }
    else 
        ris = ris.toFixed(0)

    _divRisultato.innerHTML = 'Il valore della resistenza è <b>' + ris + 'Ω</b> con tolleranza del <b> ±' + _tolleranza.value + '%</b>'
}
