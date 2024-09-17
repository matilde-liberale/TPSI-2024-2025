'use strict'

const DIM = 4
let timer

window.onload = function () {
    let _wrapper = document.querySelector("#wrapper")
    let _container = document.getElementById("container")
    let _btnGioca = document.getElementById("btnGioca")
    
    for (let i = 0; i < DIM; i++) {
        let _divss = [];
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement("div")
            _div.id = `${i}-${j}`
            _div.classList.add("cella")
            _container.appendChild(_div)
            _container.style.width = 200 + "px"
            _divss.push(_div)
        }
    }

    _btnGioca.addEventListener("click", genera)
    
    function genera() {
        clearInterval(timer)
        timer = setInterval(generaContenutoCella, 50)

        setTimeout(function () {
            clearInterval(timer)
            verificaCelle()
            if (tutteCelleGrigie()) {
                _btnGioca.disabled = true
            }
        }, 4000)
    }

    function generaContenutoCella() {
        let x, y
        do {
            x = random(0, DIM)
            y = random(0, DIM)
        } while (document.getElementById(x + "-" + y).style.backgroundColor == "#888")

        let contenuto = random(0, 4)
        let cella = document.getElementById(x + "-" + y)
        if (cella.style.backgroundColor == "") {
            cella.innerHTML = contenuto.toString()
        }
    }

    function verificaCelle() {
        // Controllo orizzontale e verticale
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                2(i, j)
            }
        }
    }

    function verificaAdiacenti(i, j) {
        let cella = document.getElementById(`${i}-${j}`)
        let contenuto = cella.innerHTML

        if (contenuto === "") return;

        let adiacenti = [
            { x: i - 1, y: j }, // sopra
            { x: i + 1, y: j }, // sotto
            { x: i, y: j - 1 }, // sinistra
            { x: i, y: j + 1 }  // destra
        ];

        for (let k = 0; k < adiacenti.length; k++) {
            let adiacente = adiacenti[k];
            if (adiacente.x >= 0 && adiacente.x < DIM && adiacente.y >= 0 && adiacente.y < DIM) {
                let cellaAdiacente = document.getElementById(`${adiacente.x}-${adiacente.y}`)
                if (cellaAdiacente.innerHTML === contenuto) {
                    cella.style.backgroundColor = "#888"
                    cellaAdiacente.style.backgroundColor = "#888"
                }
            }
        }
    }

    function tutteCelleGrigie() {
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                if (document.getElementById(`${i}-${j}`).style.backgroundColor == "") {
                    return false
                }
            }
        }
        return true
    }

}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min
}
