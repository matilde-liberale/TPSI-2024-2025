'use strict'

let _txtsNum
let _chksNum
let _btnGioca
let _btnReset
let vetSegreto = []

window.onload = function () {
    _txtsNum = document.getElementsByName('txtNum')
    _chksNum = document.getElementsByName('chkNum')
    _btnReset = document.getElementById("btnReset");
    _btnGioca = document.getElementById("btnInvia");
    _btnGioca.disabled = false;

    generaVettore();
}

function generaVettore() {
    let aus = [1, 2, 3, 4, 5]
    let dim = aus.length
    for (let i = 0; i < dim; i++) {
        let pos = random(0, aus.length)
        vetSegreto.push(aus[pos])
        aus.splice(pos, 1)
    }
    console.log(vetSegreto)
}

function controlla(event) {
    let ch = event.keyCode
    let _txt = event.target
    _txt.value = ''

    return (ch >= 49 && ch <= 53)
}

function controllaNumeri() {
    for (const _txt of _txtsNum) {
        if (_txt.value == '') {
            alert("Inserire tutti i numeri")
            return false;
        }
    }

    for (let i = 0; i < _txtsNum.length; i++) {
        for (let j = 0; j < _txtsNum.length; j++) {
            // alert(_txtsNum[i].value)
            // alert(_txtsNum[j].value)
            if (i != j && parseInt(_txtsNum[i].value) == parseInt(_txtsNum[j].value)) {
                alert("I numeri devono essere diversi")
                return false;
            }
        }
    }

    return true
}

function confronta() {
    if (controllaNumeri()) {
        alert('ok')
        let cont = 0
        for (let i = 0; i < _txtsNum.length; i++) {
            if (vetSegreto[i] == parseInt(_txtsNum[i].value)) {
                _txtsNum[i].style.backgroundColor = 'green'
                _chksNum[i].checked = true
                cont++
            }
        }

        if (cont == 5) {
            alert("HAI VINTO!!")
            _btnGioca.disabled = true
            for (const _txt of _txtsNum)
                _txt.disabled = true
        }
    }
}


function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}