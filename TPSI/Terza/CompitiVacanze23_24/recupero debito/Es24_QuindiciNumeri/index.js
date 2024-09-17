'use strict'

const DIM = 4

window.onload = function () {
    let _wrapper = document.querySelector('#wrapper')
    let vet = []

    for (let i = 1; i <= 15; i++)
        vet.push(i)

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement('div')
            _div.id = i + '-' + j
            _div.classList.add('div')
            _div.addEventListener('click', sposta)
            _wrapper.appendChild(_div)

            if (vet.length != 0) {
                let pos = random(0, vet.length)
                _div.innerHTML = vet[pos]
                _div.style.backgroundColor = 'blue'
                vet.splice(pos, 1)
            }
            else
                _div.innerHTML = ''
        }
    }

    function sposta() {
        let aus = this.id.split('-')
        let i = parseInt(aus[0])
        let j = parseInt(aus[1])

        if (j > 0) {
            let _div = document.getElementById(i + "-" + (j - 1))
            if (_div.innerHTML == "") {
                cambio(this, _div)
            }
        }
        if (j < 3) {
            let _div = document.getElementById(i + '-' + (j + 1))
            if (_div.innerHTML == '')
                cambio(this, _div)
        }
        if (i > 0) {
            let _div = document.getElementById((i - 1) + '-' + j)
            if (_div.innerHTML == '')
                cambio(this, _div)
        }
        if (i < 3) {
            let _div = document.getElementById((i + 1) + '-' + j)
            if (_div.innerHTML == '')
                cambio(this, _div)
        }
    }

    function cambio(_div1, _div2) {
        _div2.style.backgroundColor = 'blue'
        _div2.innerHTML = _div1.innerHTML
        _div1.style.backgroundColor = ''
        _div1.innerHTML = ''

        if (!controllaVincita) {
            alert('bravo, hai vinto!')
            disabilita()
        }
    }

    function controllaVincita() {
        let aus = 1

        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let _div = document.getElementById(i + '-' + j)
                if (parseInt(_div.innerHTML) != aus)
                    return false

                aus++

                if (aus == 16)
                    return true
            }
        }
    }

    function disabilita() {
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let _div = document.getElementById(i + '-' + j)
                _div.disabled = true;
            }
        }
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}