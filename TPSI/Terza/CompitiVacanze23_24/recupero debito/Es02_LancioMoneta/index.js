'use strict'

let _txtNlanci
let _btnLancia
let _lblCroce
let _lblTesta
let moneta
let lanci
let contC = 0
let contT = 0

window.onload = function () {
    _txtNlanci = document.getElementById('txtLanci')
    _btnLancia = document.getElementById('btnLancia')
    _lblCroce = document.getElementById('lblCroce')
    _lblTesta = document.getElementById('lblTesta')
}

function lanciaMoneta() {

    lanci = parseInt(_txtNlanci.value)

    for (let i = 0; i < lanci; i++) {
        moneta = random(0, 2)
        if (moneta == 0)
            contC++
        else
            contT++
    }

    if (contC > contT) {
        _lblCroce.style.color = "green"
        _lblCroce.innerHTML += contC.toString()
        _lblTesta.style.color = "red"
        _lblTesta.innerHTML += contT.toString()
    }
    else {
        _lblTesta.style.color = "green"
        _lblTesta.innerHTML += contC.toString()
        _lblCroce.style.color = "red"
        _lblCroce.innerHTML += contT.toString()
    }


}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}