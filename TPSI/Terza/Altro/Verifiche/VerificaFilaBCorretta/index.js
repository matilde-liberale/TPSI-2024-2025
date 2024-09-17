"use strict"

let DIM = 5;
let parole = ["Barca", "Fiore", "Gente", "Fuoco", "Fungo", "Opaco", "Prova", "Sasso", "Scusa", "Torta", "Vespa"];
let parolaSegreta;
let rigaCorrente = 0;


window.onload = function () {
    let cntLettereCorrette = 0;
    let _wrapper = document.querySelector("#wrapper")
    let _txtParola = document.querySelector("input") //IMPO NO SPAZI

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement("div")
            _div.id = i + "-" + j
            _div.classList.add("cella")
            _div.innerHTML = ""
            _wrapper.appendChild(_div)
        }
    }

    let n = generaNumero(0, parole.length);
    parolaSegreta = parole[n].toUpperCase();
    console.log(parolaSegreta);

    let _div = document.getElementById(0 + "-" + 0)
    _div.innerHTML = parolaSegreta[0]
    _txtParola.focus();

    _txtParola.addEventListener("input", function () {
        this.value = this.value.toUpperCase()
    })

    _txtParola.addEventListener("keydown", function (event) {
        if (event.key == "Enter")
            eseguiConfronto();
    })

    function eseguiConfronto() {
        let aus = "";
        let parolaInserita = _txtParola.value
        if (parolaInserita.length != parolaSegreta.length) {
            alert("Inserire una parola di 5 caratteri")
            _txtParola.value = ""
            _txtParola.focus()
        }
        else {
            for (let i = 0; i < parolaSegreta.length; i++) {
                if (parolaSegreta[i] == parolaInserita[i]) {
                    let id = rigaCorrente + "-" + i
                    let _divCorrente = document.getElementById(id)
                    _divCorrente.style.backgroundColor = "greenYellow"
                    _divCorrente.innerHTML = parolaSegreta[i];
                    cntLettereCorrette++;
                    aus += "*"

                }
                else
                    aus += parolaSegreta[i]

            }
            for (let i = 0; i < parolaSegreta.length; i++) {
                let lettera = parolaInserita[i]
                let id = rigaCorrente + "-" + i
                let cellaCorrente = document.getElementById(id)
                if (aus.includes(lettera) && cellaCorrente == "") {
                    cellaCorrente.style.backgroundColor = "yellow"
                    cellaCorrente.innerHTML = lettera
                }
            }
            rigaCorrente++;
            if (cntLettereCorrette == DIM) {
                setTimeout(function () {
                    alert("HAI VINTO!")
                }, 1000)
                _txtParola.disabled = true
                return
            }
            if (rigaCorrente == DIM) {
                setTimeout(function () {
                    alert("HAI VINTO!")
                }, 1000)
                _txtParola.disabled = true
                return
            }
            _txtParola.value = ""
            _txtParola.focus()
        }
    }
}


function generaNumero(a, b) {
    return Math.floor((b - a) * Math.random()) + a;
}