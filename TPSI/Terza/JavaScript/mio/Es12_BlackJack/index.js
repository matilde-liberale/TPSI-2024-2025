"use strict";

let _txtBanco
let _btnBanco
let _chkNum
let _txtUser
let _txtNum

window.onload = function () {
    _txtBanco = document.getElementById("txtBanco")
    _btnBanco = document.getElementById("btnBanco")
    _txtUser = document.getElementById("txtUser")
    _chkNum = document.getElementsByName("chkNum")
    _txtNum = document.getElementsByName("txtNum")
    _txtBanco.value = random(1, 11)
    //inizializzo il punteggio del giocatore a 0, se no da NaN, e poi dopo farò la somma
    _txtUser.value = '0'
    console.log(_txtBanco.value)
}

function visualizza(index) {
    //disabilito il pulsante
    _chkNum[index].disabled = true;

    //metto il numero random nella checkbox
    _txtNum[index].value = random(1, 11)

    //sommo i valori che lo user ha cliccato
    let n1 = parseInt(_txtNum[index].value)
    let n2 = parseInt(_txtUser.value)
    _txtUser.value = n1 + n2

    //controllo se superato il 21
    if (_txtUser.value > 21) {
        alert("Ha perso il giocatore");
        fine()
    }
}

function banco() {
    let n1 = random(1, 11)
    let n2 = parseInt(_txtBanco.value)
    console.log(n1)
    _txtBanco.value = n1 + n2
    for (let i = 0; i < _chkNum.length; i++) {
        _chkNum[i].disabled = true
    }

    if (_txtBanco.value > 21) {
        alert("Ha vinto il giocatore");
        fine()
    }
    else if (_txtBanco.value >= 17) {
        if (_txtBanco.value > _txtUser.value || _txtBanco.value == _txtUser.value) {
            alert("Ha vinto il banco");
            fine()
        }
        else {
            alert("Ha vinto il giocatore");
            fine()
        }
    }
}

function fine() {
    //_chk equivale a _chks[i]
    //for (const _chk of _chkNum) {
    //_chkNum[i].disabled=true
    //}
    for (let i = 0; i < _chkNum.length; i++) {
        _chkNum[i].disabled = true
    }
    _btnBanco.disabled = true
}

function random(a, b) {
    return Math.floor((b - a) * Math.random()) + a;
}