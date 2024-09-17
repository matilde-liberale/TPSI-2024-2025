"use strict"

const nDOMANDE = 5;
const risposteCorrette = ['d', 'b', 'a', 'c', 'a'];
let _q1
let _q2
let _q3
let _q4
let _q5
let _ris
let selezionato1; 
let selezionato2; 
let selezionato3; 
let selezionato4; 
let selezionato5;
let punteggio

function calcolaPunteggio() {
    _q1 = document.getElementsByName('q1')
    _q2 = document.getElementsByName('q2')
    _q3 = document.getElementsByName('q3')
    _q4 = document.getElementsByName('q4')
    _q5 = document.getElementsByName('q5')
    _ris = document.getElementById('ris')

    if (_q1.checked && _q2.checked && _q3.checked && _q4.checked && _q5.checked) {
        for (let i = 0; i < _q1.length; i++) {
            if (_q1[i].checked)
                selezionato1 = _q1[i].value
            if (_q2[i].checked)
                selezionato2 = _q2[i].value
            if (_q3[i].checked)
                selezionato3 = _q3[i].value
            if (_q4[i].checked)
                selezionato4 = _q4[i].value
            if (_q5[i].checked)
                selezionato5 = _q5[i].value
        }
    }
    else {
        alert("Devi rispondere a tutte le domande");
    }

    for (let i = 0; i < risposteCorrette.length; i++) {
      
    if (selezionato1 == risposteCorrette[i]) {
        console.log(selezionato1)
        punteggio.value += 2
    }
    else
        _q1[selezionato1].disabled = true

    if (selezionato2 == risposteCorrette[i]) {
        console.log(selezionato2)
        punteggio.value += 2
    }
    else
        _q2[selezionato2].disabled = true

    if (selezionato3 == risposteCorrette[i]) {
        console.log(selezionato3)
        punteggio.value += 2
    }
    else
        _q3[selezionato3].disabled = true

    if (selezionato4 == risposteCorrette[i]) {
        console.log(selezionato4)
        punteggio.value += 2
    }
    else
        _q4[selezionato4].disabled = true

    if (selezionato == risposteCorrette[i]) {
        console.log(selezionato5)
        punteggio.value += 2
    }
    else
        _q5[selezionato5].disabled = true
    }

    _ris.innerHTML += `<br>${punteggio}<\br>`
}