"use strict";

const parole =
        ["Italia", "Lavagna", "Pizza", "Lasagne", "Spiedino", "Ananas", "Gnocchi", "Gorgonzola", "Broccoli", "Mango", "Biscotti", 
		 "Giornale", "Carabina", "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", "Ambulanza", "Ostetricia"];
const MAX_TENTATIVI=5;
let _txtLettera
let _txtParola
let _btnInvia
let _img
let parolaSegreta
let tentativi = 0


window.onload = function () {
    _txtLettera = document.getElementById('txtLettera')
    _txtParola = document.getElementById('txtParola')
    _btnInvia = document.getElementById('btnInvia')
    _img = document.getElementsByTagName('img')[0]

    let pos = random(0, parole.length)
    parolaSegreta = parole[pos].toUpperCase();
    console.log(parolaSegreta)
    _txtParola.value = '';
    for (let i = 0; i < parolaSegreta.length; i++) {
        _txtParola.value += '*'
    }
}

function controlla() {
    if (_txtLettera.value != '')
        _btnInvia.disabled = false
}

function elabora() {
    let appoggio = ""
    let trovato = false
    let ch = _txtLettera.value.toUpperCase()

    for (let i = 0; i < parolaSegreta.length; i++) {
        let lettera = parolaSegreta[i]
        if (ch == lettera) {
            appoggio += lettera
            trovato = true;
        }
        else{
            appoggio += _txtParola.value[i]
        }
    }
    _txtParola.value = appoggio;
    _txtLettera.value = "";

    if (!trovato) {
        tentativi++;
        _img.src = `img/Fig${tentativi}.png`
    }

    if (tentativi >= 5) {
        alert("HAI PERSO!");
        _btnInvia.disabled = true;
        _txtLettera.disabled = true;
        _img.src = "img/Vuoto.png";
    }

    if (tentativi < 5 && !(appoggio.includes('*'))) {
        alert("HAI VINTO!");
        _btnInvia.disabled = true;
        _txtLettera.disabled = true;
        _img.src = "img/Vuoto.png";
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}