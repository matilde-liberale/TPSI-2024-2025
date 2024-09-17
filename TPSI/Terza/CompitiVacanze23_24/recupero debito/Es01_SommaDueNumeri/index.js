'use strict'

let _txt1
let _txt2
let _divRis
let _txtRis
let risultato 

window.onload = function() {
    _txt1 = document.getElementById('txtN1')
    _txt2 = document.getElementById('txtN2')
    _divRis = document.getElementById('divRis')
    _txtRis = document.getElementById('txtRis')
}

function somma() {
    risultato = parseInt(_txt1.value)+ parseInt(_txt2.value)

    _divRis.innerHTML = risultato.toString() 
    _txtRis.value = risultato
    alert(risultato)
}