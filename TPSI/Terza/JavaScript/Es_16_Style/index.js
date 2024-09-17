"use strict"

let _divTitolo;
let _txtSize;
let _body;
let _imgBox;
let _btn;
let num;

onload = function () {
    _divTitolo = document.querySelector("#titolo");
    _txtSize = document.querySelector("#txtSize");
    _body = document.querySelector("body");
    _imgBox = document.querySelector("#imgBox");
    _btn = document.querySelector("#btnClear");
    //_body = document.querySelector("body")[0];
}

function CambiaColore() {
    console.log(getComputedStyle(_divTitolo).color);

    if (getComputedStyle(_divTitolo).color == "rgb(255, 255, 0)") {
        _divTitolo.style.color = "#00f";
        _divTitolo.style.backgroundColor = "#ff0"
    }
    else {
        _divTitolo.style.color = "#ff0";
        _divTitolo.style.backgroundColor = "#00f";
    }
}

function CambiaDimensione() {
    if (_txtSize.value) {
        let size = parseFloat(_txtSize.value);

        if (size < 46) {
            _divTitolo.style.fontSize = size + "pt";
        }
        else {
            _divTitolo.style.fontSize = "46pt";
        }
    }
}

function CambiaSfondo() {
    if (_body.style.background == "") {
        _body.style.background = "#eaeaea url(img/bg.gif) center repeat-y";
    }
    else {
        _body.style.background = "";
    }
}

function CambiaBordo() {
    if (getComputedStyle(_divTitolo).borderColor == "rgb(255, 255, 255)") {
        _divTitolo.style.borderColor = "red";
    }
    else {
        _divTitolo.style.borderColor = "white";

    }
}

function CaricaImg(event) {
    _imgBox.src = "img/" + event.target.value + ".jpg";
    num = event.target.value.charAt(3);
    _btn.disabled = false;
    _btn.value = "Nascondi";
}

function NascondiMostra() {
    if (_btn.value == "Mostra") {
        _imgBox.src = "img/img" + num + ".jpg";
        _btn.value = "Nascondi";
    }
    else {
        _imgBox.src = "";
        _btn.value = "Mostra";
    }
}