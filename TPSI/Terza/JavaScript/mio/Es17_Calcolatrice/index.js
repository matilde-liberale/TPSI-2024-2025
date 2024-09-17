"use strict";

let _btnNum;
let _btnOperatore;
let _btnClear;
let _display;
let n;
let operatore;
let cont;
let numero = [];

window.onload = function() {
    let g = 0;
    _display = document.getElementById("txtDisplay");
    _btnNum = document.getElementsByName("btnNum");
    _btnClear = document.getElementById("btnClear");
    _btnOperatore = document.getElementsByName("btnOperatore");
    
    _btnClear.addEventListener("click", function() {
        _display.value = "0";
        numero = [];
        g = 0; 
     })


    for (let i = 0; i < _btnNum.length; i++) {
        _btnNum[i].addEventListener("click", function() {
            if (g === 0 && numero.length === 0) {
                _display.value = ""; 
                g++; 
            }
            n = this.value;
            _display.value += n;
            numero.push(n);
        })
    }

    for (let i = 0; i < _btnOperatore.length; i++) {
        _btnOperatore[i].addEventListener("click", function() {
            operatore = this.value;
            _display.value += operatore;
        })
    }
}

function calcola() {
    let risultato = 0;
    if (numero.length >= 2 && operatore) {
        const primoNumero = parseFloat(numero[0]); 
        const secondoNumero = parseFloat(numero.slice(1).join('')); 
        switch (operatore) {
            case '+':
                risultato = primoNumero + secondoNumero;
                break;
            case '-':
                risultato = primoNumero - secondoNumero;
                break;
            case '*':
                risultato = primoNumero * secondoNumero;
                break;
            case '/':
                if (secondoNumero !== 0) {
                    risultato = primoNumero / secondoNumero;
                } else {
                    risultato = "Errore";
                }
                break;
        }
        _display.value = risultato;
        numero = [risultato.toString()];
        operatore = null;
        g = 0;
    } else {
        _display.value = "Errore: Inserire numeri e un operatore prima di calcolare!";
    }
}