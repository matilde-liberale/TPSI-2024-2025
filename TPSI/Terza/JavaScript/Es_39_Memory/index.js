"use strict"

window.onload = function () {
    let _lst = document.getElementsByTagName("select")[0];
    let _wrapper = document.getElementById("wrapper");
    let minuti = document.getElementsByTagName("span")[0];
    let secondi = document.getElementsByTagName("span")[2];

    let turno = 1;
    let timer;
    let dim;

    _lst.selectedIndex = -1;

    _lst.addEventListener("change", function () {
        clearInterval(timer);
        dim = parseInt(_lst.value);

        _wrapper.innerHTML = ""; //serve a pulire il wrapper
        _wrapper.style.width = 55 * dim + "px";
        _wrapper.style.height = 55 * dim + "px";

        let vet = caricaVet(dim);

        console.log(vet);

        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                let _div = document.createElement("div");
                _div.id = `${i}-${j}`;
                let pos = random(0, vet.length)
                _div.textContent = vet[pos];
                vet.splice(pos, 1);
                _div.classList.add("cella");
                _div.addEventListener("click", visualizza);
                _wrapper.appendChild(_div);
            }
        }

        let seconds = 0;
        let minutes = 0;

        timer = setInterval(function () {
            seconds++;
            if (seconds % 60 == 0) {
                minutes++;
                seconds = 0;
            }

            minuti.textContent = pad(minutes);
            secondi.textContent = pad(seconds);
        }, 1000);
    })

    let prec;

    function visualizza() {
        this.style.backgroundColor = "red";
        this.removeEventListener("click", visualizza);

        let curr;

        if (turno == 1) {
            prec = this;
            turno = 2;
        }
        else {
            curr = this;

            disattivaAltri();

            setTimeout(function () {
                if (curr.textContent == prec.textContent) {
                    curr.style.backgroundColor = "blue";
                    prec.style.backgroundColor = "blue";
                }
                else {
                    curr.style.backgroundColor = "";
                    prec.style.backgroundColor = "";
                }

                abilitaAltri();
            }, 500);

            turno = 1;
        }

        if (vittoria()) {
            setTimeout(function () { alert("Hai vinto!") }, 600);
            clearInterval(timer);
        }

        function vittoria() {
            for (let i = 0; i < dim; i++) {
                for (let j = 0; j < dim; j++) {
                    let _div = document.getElementById(i + "-" + j);
                    if (_div.style.backgroundColor == "")
                        return false;
                }
            }
            return true;
        }

        function disattivaAltri() {
            for (let i = 0; i < dim; i++) {
                for (let j = 0; j < dim; j++) {
                    let _div = document.getElementById(i + "-" + j);
                    if (_div.style.backgroundColor == "")
                        _div.removeEventListener("click", visualizza);
                }
            }
        }

        function abilitaAltri() {
            for (let i = 0; i < dim; i++) {
                for (let j = 0; j < dim; j++) {
                    let _div = document.getElementById(i + "-" + j);
                    if (_div.style.backgroundColor == "")
                        _div.addEventListener("click", visualizza);
                }
            }
        }
    }
}

function pad(number) {
    return (number < 10 ? '0' : '') + number
}

function caricaVet(dim) {
    let vet = [];

    for (let i = 1; i <= (dim * dim) / 2; i++) {
        vet.push(i);
        vet.push(i);
    }

    return vet;
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}