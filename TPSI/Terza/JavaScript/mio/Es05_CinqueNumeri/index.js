'use strict'

let numeriSegreti = [];
let _txts //textboxS
let _checks
let _button

window.onload = function () {
    generaNumeri();
    _txts = document.getElementsByName('txtNum')
    _checks = document.getElementsByName('chkNum')
    _button = document.getElementById('btnInvia')
}

function generaNumeri() { //SOLUZIONE MILGIORE DI TUTTE PER GENERARE UN VETTORE CASUALE SENZA RIPETIZIONI 
    let aus = [1, 2, 3, 4, 5]
    let dim = aus.length
    for (let i = 0; i < dim; i++) {
        let pos = random(0, aus.length)
        numeriSegreti.push(aus[pos]) //metto in coda al vettore aus[pos], ovvero il valore della posizione generata casualmente
        aus.splice(pos, 1) //elimina un elemento dalla posizione pos compresa, poi lo ricompatta quindi no celle vuote
    }
    console.log(numeriSegreti);
}

function controlla(event) {
    let ch = event.keyCode
    let _txt = event.target
    _txt.value = ''
    // console.log(ch)
    // if (ch >= 49 && ch <= 53){
    //     return true; 
    // }
    // else 
    // {
    //     return false;
    // }
    return (ch >= 49 && ch <= 53) //esattamente come sopra
}

function confronta() {
    if (controllaNumeri()) {
        let cont = 0;
        for (let i = 0; i < numeriSegreti.length; i++) {
            if (numeriSegreti[i] == parseInt(_txts[i].value)) {
                _checks[i].checked = true
                _txts[i].style.backgroundColor = 'green'
                cont++;
            }
        }
        if (cont == 5) {
            alert('HAI VINTO!')
            _button.disabled = true
            for (const _txt of _txts) {
                _txts.disabled = true
            }
        }
    }
}

function controllaNumeri() {
    for (const _txt of _txts) {
        if (_txt.value == "") {
            alert("Inserire tutti i numeri")
            return false;
        }
    }
    for (let i = 0; i < _txts.length - 1; i++) {
        for (let j = i + 1; j < _txts.length; j++) {
            if (_txts[i].value == _txts[j].value) {
                alert('I numeri devono essere tutti diversi!')
                return false
            }
        }
    }
    return true;
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}