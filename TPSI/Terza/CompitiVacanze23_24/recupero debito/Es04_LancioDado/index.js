'use strict'

let _btnGenera
let _txtLanci
let _msg
let lanci
let dado
let cont = new Array(6)
let r
let g
let b

window.onload = function () {
    _btnGenera = document.getElementById('btnGenera')
    _txtLanci = document.getElementById('txtLanci')
    _msg = document.getElementsByName('msg')

    for (let i = 0; i < cont.length; i++)
        cont[i] = 0;
}

function genera() {
    lanci = parseInt(_txtLanci.value)
    if (isNaN(lanci))
        alert('Inserire un numero valido')
    else
        for (let i = 0; i < lanci; i++) {
            dado = random(0, 6)
            cont[dado]++
        }

    for (let i = 0; i < cont.length; i++) {
        _msg[i].innerHTML = `La faccia ${i + 1} è uscita ${cont[i]} volte`
        r = random(0, 256)
        g = random(0, 256)
        b = random(0, 256)
        let color = `rgb(${r}, ${g}, ${b})`
        _msg[i].style.color = color
    }

}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}