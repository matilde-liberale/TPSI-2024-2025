'use strict'

const RIGHE = 15;
const COLONNE = 20;
const ROSSE = 50;
let talpa;
let timer;
let punti = 0;
let _divs = [];

window.onload = function () {
    let _wrapper = document.getElementById("wrapper");
    let _inPunti = document.getElementById("punti");

    for (let i = 0; i < RIGHE; i++) {
        for (let j = 0; j < COLONNE; j++) {
            let _div = document.createElement("div");
            _div.id = `${i}-${j}`;
            _div.classList.add("cella");
            _divs.push(_div);
            _wrapper.appendChild(_div);
        }
    }

    //Metto celle rosse
    for (let i = 0; i < ROSSE; i++) {
        let x, y, id, _div;
        do {
            x = generaNumero(0, RIGHE - 1);
            y = generaNumero(0, COLONNE - 1);
            id = `${x}-${y}`;
            _div = document.getElementById(id);
        } while (_div.style.backgroundColor == "red");
        _div.style.backgroundColor = "red";
    }

    //Genero prima talpa
    generaTalpa();

    //Avvio il timer 
    timer = setInterval(rigeneraImmagine, 1000);

    function rigeneraImmagine() {
        // Trovo e tolgo immagine 
        _divs.forEach(div => {
            if (div.style.backgroundImage) {
                div.removeEventListener("click", visualizza);
                div.style.backgroundImage = "";
            }
        });

        //Genera una nuova talpa
        generaTalpa();
    }

    function generaTalpa() {
        let x, y, id, _div;
        do {
            x = generaNumero(0, RIGHE - 1);
            y = generaNumero(0, COLONNE - 1);
            id = `${x}-${y}`;
            _div = document.getElementById(id);
        } while (_div.style.backgroundColor == "red");

        //genero l'immagine
        if (punti == 0) //sono al primo turno ---> metto la talpa
        {
            _div.style.backgroundImage = 'url("img/talpa.jpg")';
            _div.value = 1;
        }
        else {
            let random = generaNumero(0, 3);
            switch (random) {
                case 0:
                    _div.style.backgroundImage = 'url("img/talpa.jpg")';
                    _div.value = 1;
                    break;
                case 1:
                    _div.style.backgroundImage = 'url("img/mago.png")';
                    _div.value = 10;
                    break;
                case 2:
                    _div.style.backgroundImage = 'url("img/bomba.png")';
                    _div.value = 0;
                    break;
            }
        }


        // Abilita il click sulla nuova immagine
        _div.addEventListener("click", visualizza);
    }

    //Se clicco sulle immagini
    function visualizza() {
        let valore = this.value;
        //console.log(valore)
        if (valore != 0) {
            punti = parseInt(punti) + parseInt(valore);
            //console.log(punti)
            _inPunti.innerHTML = punti.toString()
            if (punti > 20)
                vittoria();
            else
                rigeneraImmagine();
        }
        else {
            termina();
        }


    }

    function termina() {
        clearInterval(timer);
        setTimeout(function () {
            alert("Hai perso!");
        }, 1000);
    }

    function vittoria() {
        clearInterval(timer);
        // let timerID = setInterval(function() {
        //     let min = 0;
        //     let max =   COLONNE - 1;
    
        //     for (let i = 0; i < RIGHE; i++) {
        //         for (let j = 0; j < COLONNE; j++) {
        //             let x = _divs[i][j].id.split('-')[0];
        //             let y = _divs[i][j].id.split('-')[1];
    
        //             if ((x == min && y >= min && y <= max) ||
        //                 (x == max && y >= min && y <= max) ||
        //                 (y == min && x >= min && x <= max) ||
        //                 (y == max && x >= min && x <= max))
        //                 _divs[i][j].style.backgroundColor = "red";
        //         }
        //     }
    
        //     min++;
        //     max--;
    
        //     if (max < min) {
        //         min = 0;
        //         max = DIM - 1;
        //     }
        // }, 250);
       
        setTimeout(function () {
            alert("Hai vinto!");
        }, 1000);
    }
}

function generaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
