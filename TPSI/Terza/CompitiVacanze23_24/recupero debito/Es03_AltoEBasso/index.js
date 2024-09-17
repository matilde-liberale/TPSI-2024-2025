'use strict'

let _divTent
let _txtNum
let _divMsg
let _btnGioca
let numSegreto
let numUtente
let tentativi = 0;

window.onload = function () {
    _divTent = document.getElementById('divTentativi')
    _txtNum = document.getElementById('txtNumero')
    _divMsg = document.getElementById('divMessaggio')
    _btnGioca = document.getElementById('btnGioca')

    numSegreto = random(0, 101)
    console.log(numSegreto)
}

function gioca() {
    let msg = "";
    let vinto = false;

    if (isNaN(_txtNum.value) || _txtNum.value == "") {
        alert("Inserire un numero valido")
        _txtNum.value = ""
        _txtNum.focus()
    }
    else {
        let numUtente = parseInt(_txtNum.value)

        if (numUtente < 1 || numUtente > 100) {
            alert("Inserire un numero compreso tra 1 e 100")
            _txtNum.value = ""
            _txtNum.focus()
        }
        else {
            tentativi++
            _divTent.innerHTML = "Tentativi: " + tentativi
            if (tentativi <= 10) {
                if (numUtente > numSegreto) {
                    msg = "Il numero inserito (" + numUtente.toString() + ") è troppo grande<br>"
                    _divMsg.innerHTML += msg
                }
                else if (numUtente < numSegreto) {
                    msg = "Il numero inserito (" + numUtente.toString() + ") è troppo piccolo<br>"
                    _divMsg.innerHTML += msg
                }
                else if (numUtente == numSegreto) {
                    alert('HAI VINTO!')
                    _btnGioca.disabled = true
                }
            }
            else {
                alert('HAI PERSO!')
                _btnGioca.disabled = true
            }
        }
    }
}


function gestisciInvio() {
    if (event.key === 'Enter') {
        gioca();
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}