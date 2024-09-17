'use strict'

const DIM = 26
let mat = []
let aus = []
let ch
let _div1
let _div2
let _txt1
let _txt2

window.onload = function () {
    _div1 = document.getElementById('div1')
    _div2 = document.getElementById('div2')
    _txt1 = document.getElementById('txt1')
    _txt2 = document.getElementById('txt2')

    for (let i = 0; i < 2; i++) {
        mat[i] = [DIM]
    }
    for (let i = 0; i < DIM; i++) {
        ch = String.fromCharCode(i + 65)
        mat[0][i] = ch
        aus.push(ch)
    }
    for (let i = 0; i < DIM; i++) {
        let pos = random(0, aus.length)
        mat[1][i] = aus[pos]
        aus.splice(pos, 1)
    }
    // console.log(mat)

    for (let i = 0; i < DIM; i++) {
        _div1.innerHTML += mat[0][i] + " ";
        _div2.innerHTML += mat[1][i] + " ";
    }
}


function scrambler() {
    _txt2.value = ''
    for (let i = 0; i < _txt1.value.length; i++) {
        let carattere = _txt1.value[i]
        let pos = mat[0].indexOf(carattere)

        if (pos != -1)
            _txt2.value += mat[1][pos]
        else
            _txt2.value += carattere
    }
}

function descrambler() {
    let ris = ''
    for (let i = 0; i < _txt2.value.length; i++) {
        let char = _txt2.value[i]
        let pos = mat[1].indexOf(char)

        if (pos != -1)
            ris += mat[0][pos]
        else
            ris += char
    }
    alert('Il messaggio ricevuto è:\n' + ris)
}


function converti(event) {
    event.target.value = event.target.value.toUpperCase()
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}