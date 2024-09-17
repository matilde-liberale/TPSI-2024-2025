'use strict'

let _divTitolo
let _txtSize
let _body

window.onload = function () {
    _divTitolo = document.querySelector('#titolo')
    _txtSize = document.querySelector('#txtSize')
    // _body = document.querySelector('body') equivalente a sotto
    _body = document.querySelectorAll('body')[0] //restituisce un vettore
}

function cambiaColore() {
    console.log(getComputedStyle(_divTitolo).color)
    if (getComputedStyle(_divTitolo).color == 'rgb(255, 255, 0)') {
        _divTitolo.style.color = 'blue'
        _divTitolo.style.backgroundColor = '#ff0'
    }
    else {
        _divTitolo.style.color = '#ff0'
        _divTitolo.style.backgroundColor = 'blue'
    }
}

function cambiaDimensione() {
    //posso togliere ! e mettere tutto dentro la if
    if (!_txtSize.value) {
        return;
    }
    else {
        let size = parseInt(_txtSize.value)

        if (size < 46) {
            _divTitolo.style.fontSize = size + 'pt'
        }
        else {
            _divTitolo.style.fontSize = '46pt'
        }
    }
}

function cambiaSfondo(){
    console.log (_body.style.backgroundImage)
    if(_body.style.background == '')
    {
        _body.style.background = style.background="#eaeaea url(img/bg.gif) center repeat-y";
    }
    else {
        _body.style.background == ''
    }
}