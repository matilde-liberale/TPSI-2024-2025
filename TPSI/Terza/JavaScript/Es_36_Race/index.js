'use strict'

const COLONNE = 30;
const RIGHE = 20;
const OSTACOLI = 25;
let riga1;
let riga2;
let colonna1 = 0;
let colonna2 = 0;
let timeout1, timeout2;

window.onload = function () {
    let _wrapper = document.getElementById("wrapper");
    let _btnAvvia = document.getElementById("btnAvvia");

    for (let i = 0; i < RIGHE; i++) {
        for (let j = 0; j < COLONNE; j++) {
            let _div = document.createElement("div");
            _div.id = `${i}-${j}`;
            _div.bomba = false;
            _div.classList.add("cella");
            _wrapper.appendChild(_div);
        }
    }1

    for (let n = 0; n < OSTACOLI; n++) {
        let _div;

        do {
            let i = generaNumero(0, RIGHE);
            let j = generaNumero(1, COLONNE);
            let id = i + "-" + j;
            _div = document.getElementById(id);
        } while (_div.bomba);

        _div.bomba = true;
        _div.style.backgroundImage = "url('bomba.png')"
    }

    _btnAvvia.addEventListener("click", function () {
        let differenza;

        do {
            riga1 = generaNumero(0, RIGHE - 5);
            riga2 = generaNumero(0, RIGHE - 5);
            differenza = Math.abs(riga1 - riga2);
        } while (differenza < 4);

        let id1 = riga1 + "-" + colonna1;
        let _div1 = document.getElementById(id1);
        _div1.style.backgroundColor = "blue";

        let id2 = riga2 + "-" + colonna2;
        let _div2 = document.getElementById(id2);
        _div2.style.backgroundColor = "yellow";

        _btnAvvia.disabled = true;

        timeout1 = setTimeout(avanzamento1, 150);
        timeout2 = setTimeout(avanzamento2, 150);
    })

    function avanzamento1() {
        let n = generaNumero(1, 11);

        let id1 = riga1 + "-" + (colonna1 + 1);
        let _div1 = document.getElementById(id1);

        if (!_div1) 
        {
            alert("Ha vinto il BLU");
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        }
        else 
        {
            if (!_div1.bomba) 
            {
                colonna1++;
            }
            else 
            {
                riga1++;
            }

            let _div_1 = document.getElementById(riga1 + "-" + colonna1);
            _div_1.style.backgroundColor = "blue";

            if (n < 8)
                timeout1 = setTimeout(avanzamento1, 150);
            else
                timeout1 = setTimeout(avanzamento1, 300);
        }
    }

    function avanzamento2() {
        let n = generaNumero(1, 11);

        let id2 = riga2 + "-" + (colonna2 + 1);
        let _div2 = document.getElementById(id2);

        if (!_div2) 
        {
            alert("Ha vinto il GIALLO");
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        }
        else 
        {

            if (!_div2.bomba) 
                {
                colonna2++;
            }
            else 
            {
                riga2++;
            }

            let _div_2 = document.getElementById(riga2 + "-" + colonna2);
            _div_2.style.backgroundColor = "yellow";

            if (n < 8)
                timeout2 = setTimeout(avanzamento2, 150);
            else
                timeout2 = setTimeout(avanzamento2, 300);
        }
    }
}

function generaNumero(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}
