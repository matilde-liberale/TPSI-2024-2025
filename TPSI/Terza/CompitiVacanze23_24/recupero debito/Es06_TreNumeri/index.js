'use strict'

let _txtNum
let _chkNum
let _btnInvia
let aus = [9]
let pos
let numeriSegreti = []

window.onload = function () {
    _txtNum = document.getElementsByName('txtN')
    _chkNum = document.getElementsByName('chkN')
    _btnInvia = document.getElementById('btnInvia')

    for (let i = 0; i < 9; i++)
        aus[i] = i + 1

    for (let i = 0; i < 3; i++) {
        pos = random(0, aus.length)
        numeriSegreti.push(aus[pos])
        aus.splice(pos, 1)
    }
    console.log(numeriSegreti)
}

function confronta() {

    if (_txtNum[0].value == _txtNum[1].value || _txtNum[1].value == _txtNum[2].value || _txtNum[0].value == _txtNum[2]) {
        alert('Inserire tutti numeri diversi')
    }
    for (let i = 0; i < _txtNum.length; i++) {
        if (_txtNum[i] == '') {
            alert('Inserire tutti i numeri')
        }
    }
    let k = 0
    for (let i = 0; i < _txtNum.length; i++) {
        for (let j = 0; j < _txtNum.length; j++) {
            // alert(numeriSegreti[i] + ' ' + _txtNum[j].value)
            if (numeriSegreti[i] == parseInt(_txtNum[j].value)) {
                _chkNum[k].checked = true
                k++
            }
        }
    }

    if (k == 3) {
        alert('Hai vinto!!')
        _btnInvia.disabled = true
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}