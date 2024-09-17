'use strict'

let _primoNumero
let _secondoNumero
let _ris
let _chks
let _span
let n
let aus

window.onload = function (){
    _primoNumero = document.getElementsByClassName('primoNumero')
    _ris = document.getElementsByClassName('risultato')
    _secondoNumero = document.getElementsByClassName('secondoNumero')
    _chks =document.getElementsByClassName('chkRisposta')
    _span = document.getElementsByClassName('messaggio')

    for (let i = 0; i < 10; i++) {
        //metto primo numero
        _primoNumero[i].innerHTML = random(1, 51)
        //metto risultato 
        n = random((parseInt(_primoNumero[i].innerHTML)) +1, 100)
        _ris[i].innerHTML = n
        //metto secondo addendo che visualizzo 
        aus = (n - (parseInt(_primoNumero[i].innerHTML))) + random(-1, 2)
        _secondoNumero[i].innerHTML = aus
        //checko tutti i check box 
        _chks[i].checked = true
    }
}

function esegui(){
    let risCorrente
    let risultato
    for (let i = 0; i < 10; i++) {
        risultato = parseInt(_ris[i].innerHTML)
        risCorrente = parseInt(_secondoNumero[i].innerHTML) + parseInt(_primoNumero[i].innerHTML)
        console.log(risCorrente)
        if(risultato == risCorrente)
        {
            if(_chks.checked)
            {
                _span[i].innerHTML = "giusto"
                _span[i].style.color = "green"
            }
            else {
                _span[i].innerHTML = "errore"
                _span[i].style.color = "red"
            }
        }
       
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}