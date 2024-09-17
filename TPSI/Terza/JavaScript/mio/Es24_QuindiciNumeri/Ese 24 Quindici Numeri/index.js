'use strict'

const DIM = 4

window.onload = function () {
    let _wrapper = document.querySelector('#wrapper')
    let vet = []
    for (let i = 1; i <= 15; i++) {
        vet.push(i)
    }

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement("div")
            _div.id = i + "-" + j
            _div.classList.add('pedina')
            _div.addEventListener("click", sposta)
            _wrapper.appendChild(_div)

            if (vet.length != 0) {
                let pos = random(0, vet.length)
                _div.innerHTML = vet[pos]
                _div.style.backgroundColor = "blue"
                vet.splice(pos, 1);
            }
            else //devo mettere cella vuota 
                _div.innerHTML = ""

        }
    }
    function sposta() {
        let aus = this.id.split("-")
        let i = parseInt(aus[0])
        let j = parseInt(aus[1])

        //controlliamo se cella di sinistra esiste e non è vuota
        if (j > 0) {
            let _div = document.getElementById(i + "-" + j - 1)
            if (_div.innerHTML == "") {
                swap(this, _div)
            }
        }
        //controlliamo se cella di sinistra esiste e non è vuota
        if (j < 3) {
            let _div = document.getElementById(i + "-" + j + 1)
            if (_div.innerHTML == "") {
                swap(this, _div)
            }
        }
        //controlliamo se cella di sinistra esiste e non è vuota
        if (i < 3) {
            let _div = document.getElementById(i+1 + "-" + j)
            if (_div.innerHTML == "") {
                swap(this, _div)
            }
        }
        //controlliamo se cella di sinistra esiste e non è vuota
        if (i > 0) {
            let _div = document.getElementById(i-1 + "-" + j)
            if (_div.innerHTML == "") {
                swap(this, _div)
            }
        }
    }

    function swap(_btn1, _btn2) {
        _btn2.style.backgroundColor = "blue"
        _btn2.innerHTML = _btn1.innerHTML
        _btn1.innerHTML = ""
        //assegnando "" a backgroundcolor automaticamente riprende il valore statico
        // messo su css (grigio)
        _btn1.style.backgroundColor = ""
        if (!controllaVincita())
        {
            alert("Bravissimo hai vinto!")
            disabilitaPulsanti()
        }
            
    }

    function controllaVincita() {
        let cont = 1
        for (let i = 0; i < DIM; i++) 
        {
            for (let j = 0; j < DIM; j++) 
            {
                let _div = document.getElementById(i + "-" + j)
                if (parseInt(_div.innerHTML) != cont)
                    return false
                cont++
                if(cont == 16)
                    return true
            }
        }
    }

    function disabilitaPulsanti() {
        
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}