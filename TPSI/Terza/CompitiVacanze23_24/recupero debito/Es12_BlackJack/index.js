"use strict"

let _txtBanco
let _txtUtente
let _txtsGiocatore
let _chks
let _btnBanco
let pos
let numBanco
let numUtente
let puntiGiocatore = 0
let puntiBanco = 0
let msg = ""

window.onload = function () {
    _txtBanco = document.getElementById('txtBanco')
    _txtsGiocatore = document.getElementsByName('txtNum')
    _txtUtente = document.getElementById('txtUser')
    _chks = document.getElementsByName('chkNum')
    _btnBanco = document.getElementById('btnBanco')

    numBanco = random(1, 11)
    console.log(numBanco)
    _txtBanco.value = numBanco.toString()
    puntiBanco += numBanco
}

function visualizza(pos) {
    // console.log(pos)
    // alert('ok')
    _txtUtente.value = ''

    _chks[pos].disabled = true
    numUtente = random(1, 11)
    _txtsGiocatore[pos].value = numUtente.toString()
    puntiGiocatore += numUtente

    _txtUtente.value = puntiGiocatore.toString()
    if (puntiGiocatore > 21)
        Termina('Ha vinto il banco')
}

function banco() {
    numBanco = random(1, 11)
    puntiBanco += numBanco
    _txtBanco.value = puntiBanco.toString()

    for (let i = 0; i < _chks.length; i++) {
        _chks[i].disabled = true
    }
    
    if (puntiBanco > 21)
        Termina('Ha vinto il giocatore')
    else if (puntiBanco >= 17) {
        if (puntiBanco > puntiGiocatore || puntiBanco == puntiGiocatore) {
            Termina("Ha vinto il banco")
        }
        else {
            Termina("Ha vinto il giocatore")
            fine()
        }
    }
}

function Termina(msg) {
    alert(msg)
    for (let i = 0; i < _chks.length; i++) {
        _chks[i].disabled = true
    }
    _btnBanco.disabled = true;
}

function random(min, max) {
    return Math.floor((max - min) * Math.random() + min)
} 