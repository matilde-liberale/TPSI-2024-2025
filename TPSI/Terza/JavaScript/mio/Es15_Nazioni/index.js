'use strict'

let _txt
let _div1
let _div2
let _txtTextBox
let _txtCittà
let _txtNazioni
let _btnSeleziona

let nazione

window.onload = function () {
  _div1 = document.getElementById('div1')
  _div2 = document.getElementById('div2')
  _btnSeleziona = document.getElementById('btnSeleziona')
  _txtNazioni = _div1.getElementsByClassName('txt')
  _txtTextBox = _div2.getElementsByClassName('txt')
  _txtCittà = document.getElementById('optCittà')

  for (let i = 0; i < _txtCittà.length; i++) {
    _txtNazioni[i].readOnly = true;
    _txtTextBox[i].readOnly = true;
    _txtCittà[i].disabled = true;
  }

  for (let i = 0; i < _txtNazioni.length; i++) {
    nazione[i] = _txtNazioni.getAttribute('nazione')
  }

  for (let i = 0; i < _txtTextBox.length; i++) {
    let pos = random(0, nazione.length)
    _txtTextBox[i].value = nazione[pos]
    _txtNazioni.splice(pos, 1)
  }

}

function seleziona() {
  let rdbSelezionato;
  let città;

  // Seleziona casualmente un radio button non disabilitato
  do {
    let i = random(0, _txtNazioni.length);
    rdbSelezionato = _txtNazioni[i];
    
    if (rdbSelezionato[i].disabled = false) {
      città = nazione[i];
      _txtTextBox[i].value = città
    }
  } while (rdbSelezionato.disabled);
  // Seleziona il radio button e disabilita il textbox corrispondente
  rdbSelezionato.checked = true;
  rdbSelezionato.disabled = true;
}

function ControllaVincita() {

}

function random(min, max) {
  return Math.floor((max - min) * Math.random()) + min;
}