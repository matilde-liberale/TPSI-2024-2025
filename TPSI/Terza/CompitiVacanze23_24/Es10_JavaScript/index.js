'use strict'

const COLONNE = 30;
const RIGHE = 20;
const OSTACOLI = 25;
let rGiocatore1
let rGiocatore2
let cGiocatore1 = 0
let cGiocatore2 = 0
let timeout1
let timeout2

window.onload = function () {
    let _wrapper = document.querySelector('#wrapper')
    let _btnAvvia = document.querySelector('#btnAvvia')

    for (let i = 0; i < RIGHE; i++) {
        for (let j = 0; j < COLONNE; j++) {
            let _btn = document.createElement('button')
            _btn.id = i + '-' + j
            _btn.classList.add('cella')
            _btn.bomba = false
            _wrapper.appendChild(_btn)
        }
    }

    for (let i = 0; i < OSTACOLI; i++) {
        let _btn
        do {
            let i = random(0, RIGHE)
            let j = random(1, COLONNE)
            let id = i + '-' + j
            _btn = document.getElementById(id)
        } while (_btn.bomba)

        _btn.bomba = true
        _btn.style.backgroundColor = 'red'
    }

    _btnAvvia.addEventListener('click', function () {
        _btnAvvia.disabled = true

        let differenza
        do {
            rGiocatore1 = random(0, RIGHE - 5)
            rGiocatore2 = random(0, RIGHE - 5)
            differenza = (parseInt(rGiocatore1) - parseInt(rGiocatore2))
            console.log(differenza)
        } while (differenza < 4)

        let id1 = rGiocatore1 + '-' + cGiocatore1
        let _btn1 = document.getElementById(id1)
        _btn1.style.backgroundColor = 'blue'

        let id2 = rGiocatore2 + '-' + cGiocatore2
        let _btn2 = document.getElementById(id2)
        _btn2.style.backgroundColor = 'green'

        timeout1 = setTimeout(avanzamento1, 150)
        timeout2 = setTimeout(avanzamento2, 150)
    })

    function avanzamento1() {
        let n = random(1, 101)

        let id1 = rGiocatore1 + '-' + (cGiocatore1 + 1)
        let _btn1 = document.getElementById(id1)

        if (!_btn1) {
            alert('Ha vinto il blu!')
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }
        else {
            if (!_btn1.bomba)
                cGiocatore1++
            else
                rGiocatore1++

            let _nextBtn1 = document.getElementById(rGiocatore1 + '-' + cGiocatore1)
            _nextBtn1.style.backgroundColor = 'blue'

            if (n < 80)
                timeout1 = setTimeout(avanzamento1, 150)
            else
                timeout1 = setTimeout(avanzamento1, 300)
        }
    }

    function avanzamento2() {
        let n = random(1, 101)

        let id2 = rGiocatore2 + '-' + (cGiocatore2 + 1)
        let _btn2 = document.getElementById(id2)

        if (!_btn2) {
            alert('Ha vinto il verde!')
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }
        else {
            if (!_btn2.bomba)
                cGiocatore2++
            else
                rGiocatore2++

            let _nextBtn2 = document.getElementById(rGiocatore2 + '-' + cGiocatore2)
            _nextBtn2.style.backgroundColor = 'green'

            if (n < 80)
                timeout2 = setTimeout(avanzamento2, 150)
            else
                timeout2 = setTimeout(avanzamento2, 300)
        }
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}