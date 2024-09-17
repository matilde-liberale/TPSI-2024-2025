'use strict'

let _divTitolo
let _txtSize
let _body
let _imgBox
let _btnClear
let _btnBordo
let _btnImgs
let immagine

window.onload = function () {
    _divTitolo = document.querySelector("#titolo")
    _txtSize = document.querySelector("#txtSize")
    _body = document.querySelector("body")
    _imgBox = document.querySelector("#imgBox")
    _btnClear = document.querySelector("#btnClear")
    _btnBordo = document.getElementById('btnBordo')
    _btnImgs = document.getElementsByClassName('images')

    _btnBordo.addEventListener('click', cambiaBordo)
    _btnClear.addEventListener('click', nascondi)
}

function cambiaColore() {
    // let colore = getComputedStyle(_divTitolo).color

    if (getComputedStyle(_divTitolo).color == "rgb(255, 255, 0)") {
        _divTitolo.style.color = "#00f"
        _divTitolo.style.backgroundColor = "#ff0"
    }
    else {
        _divTitolo.style.color = "#ff0"
        _divTitolo.style.backgroundColor = "#00f"
    }
}

function cambiaDimensione() {
    let size = _txtSize.value
    if (size != '') {
        if (size < 46)
            _divTitolo.style.fontSize = size + "pt"
        else
            _divTitolo.style.fontSize = "46pt"
    }
}

function cambiaSfondo() {
    if (_body.style.backgroundColor == '')
        _body.style.background = '#eaeaea url(img/bg.gif) center repeat-y'
    else
        _body.style.background = ''
}

function cambiaBordo() {
    if (getComputedStyle(_divTitolo).borderColor == 'rgb(255, 255, 255)')
        _divTitolo.style.borderColor = 'red'
    else
        _divTitolo.style.borderColor = 'white'
}

function CaricaImg(event){
    immagine = event.target.value
    _imgBox.src = 'img/' + immagine + '.jpg'

    // num = immagine.charAt(3)
    _btnClear.disabled = false
    _btnClear.value = 'Nascondi'
}

function nascondi(){
    if(_btnClear.value == 'Mostra')
    {
        _imgBox.src = 'img/' + immagine + '.jpg'
        _btnClear.value = 'Nascondi'
    }
    else 
    {
        _imgBox.src = ''
        _btnClear.value = 'Mostra'
    }
}