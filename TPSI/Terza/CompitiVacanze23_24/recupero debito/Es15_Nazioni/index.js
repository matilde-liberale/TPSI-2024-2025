'use strict'

let _txts
let _txts1
let _txts2
let _div1
let _div2
let _txtRisposte
let _optCitta
let _optNazioni
let _btnSelCitta
let _btnRispondi
let nazione = []
let pos
let posAus
let giuste = 0

window.onload = function () {
    _txts = document.getElementsByClassName('txt')
    _div1 = document.getElementById('div1')
    _div2 = document.getElementById('div2')
    _txts1 = _div1.getElementsByClassName('txt')
    _txts2 = _div2.getElementsByClassName('txt')
    _txtRisposte = document.getElementsByName('txtRisposte')
    _optCitta = document.getElementsByClassName('optCitta')
    _optNazioni = document.getElementById('optNazioni')
    _btnSelCitta = document.getElementById("btnSeleziona")
    _btnRispondi = document.getElementById("btnRispondi")

    for (let i = 0; i < _optCitta.length; i++) {
        _optCitta.disabled = true
        _txts1[i].readOnly = 'readonly'
        _txts2[i].readOnly = 'readonly'
    }

    for (const _txt of _txts1) {
        nazione.push(_txt.getAttribute("nazione"));
    }

    for (let i = 0; i < _txts2.length; i++) {
        pos = random(0, nazione.length)
        _txts2[i].value = nazione[pos]
        nazione.splice(pos, 1)
    }
}

function seleziona() {
    let rdbSelezionato
    let città

    do {
        let i = random(0, _txts1.length)
        rdbSelezionato = _txts1[i]

        if (rdbSelezionato[i].disabled == false) {
            città = nazione[i]
            _txts2[i].value = città
        }
    } while (rdbSelezionato.disabled)
    rdbSelezionato.checked = true
    rdbSelezionato.disabled = true
    posAus = i
}

function controlla() {
    let i = 0
    let selezionato

    do {
        if(_optNazioni.checked == true)
            selezionato = true
        else 
            i++
    } while (!selezionato && i < _optNazioni.length)

    if(!selezionato)
        alert("Selezionare una città ed una nazione")
    else 
    {
        if(_txts1[posAus].getAttribute('nazione') == _txts2[i].value)
        {
            _optCitta[posAus].checked = false
            _optNazioni[i].checked = false
            _txts1[posAus].disabled = true
            _txts2[i].disabled= true
            _txtRisposte[i].value = _txts1[posAus].value
            _txts1[posAus].value = ""
            giuste++
        }
        else 
            alert("Risposta Sbagliata")

        if(giuste == _txts1.length)
        {
            alert("Bravo Hai vinto");
            _btnRispondi.disabled = true;
            _btnSelCitta.disabled = true;
        }
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}