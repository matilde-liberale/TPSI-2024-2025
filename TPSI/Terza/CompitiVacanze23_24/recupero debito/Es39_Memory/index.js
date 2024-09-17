"use strict"

window.onload = function () {
    let _lst = document.getElementsByTagName("select")[0];
    let _wrapper = document.getElementById("wrapper");
    let _minuti = document.getElementsByTagName("span")[0];
    let _secondi = document.getElementsByTagName("span")[2];

    let turno = 1
    let timer
    let dim

    _lst.selectedIndex = -1

    _lst.addEventListener('change', function () {
        clearInterval(timer)
        dim = parseInt(_lst.value)

        _wrapper.innerHTML = ''  //pulisco wrapper 
        _wrapper.style.width = 55 * dim + 'px'
        _wrapper.style.height = 55 * dim + 'px'

        let vet = caricaVet(dim)

        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                let _div = document.createElement('div')
                _div.id = i + '-' + j
                let pos = random(0, vet.length)
                _div.textContent = vet[pos]
                vet.splice(pos, 1)
                _div.classList.add('cella')
                _div.addEventListener('click', visualizza)
                _wrapper.appendChild(_div)
            }
        }

        let minuti = 0
        let secondi = 0
        timer = setInterval(function () {
            secondi++
            if (secondi % 60 == 0) {
                minuti++
                secondi = 0
            }

            _minuti.textContent = pad(minuti)
            _secondi.textContent = pad(secondi)
        }, 1000)

    })

    let precedente

    function visualizza() {
        this.style.backgroundColor = 'red'
        this.style.color = 'white'

        let corrente

        if (turno == 1) {
            precedente = this
            turno = 2
        }
        else {
            corrente = this

            disattivaButton()
            setTimeout(function () {
                if (corrente.textContent == precedente.textContent) {
                    corrente.style.backgroundColor = 'blue'
                    precedente.style.backgroundColor = 'blue'
                    corrente.style.color = 'black'
                    precedente.style.color = 'black'
                    precedente.removeEventListener('click', visualizza)
                    corrente.removeEventListener('click', visualizza)
                }
                else {
                    corrente.style.backgroundColor = ''
                    precedente.style.backgroundColor = ''
                    corrente.style.color = ''
                    precedente.style.color = ''
                }
            }, 500)
            abilitaButton()

            turno = 1
        }

        if (vittoria()) {
            setTimeout(function () {
                alert('Hai vinto!')
            }, 500)
            clearInterval(timer)
        }   
    }

    function vittoria() {
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                let _div = document.getElementById(i + '-' + j)
                if (_div.style.backgroundColor == '')
                    return false
            }
        }
        return true
    }

    function disattivaButton() {
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                let _div = document.getElementById(i + '-' + j)
                if (_div.style.backgroundColor == '')
                    _div.removeEventListener('click', visualizza)
            }

        }
    }

    function abilitaButton() {
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                let _div = document.getElementById(i + '-' + j)
                if (_div.style.backgroundColor == '')
                    _div.addEventListener('click', visualizza)
            }

        }
    }

    function caricaVet(dim) {
        let vet = []

        for (let i = 1; i <= (dim * dim) / 2; i++) {
            vet.push(i)
            vet.push(i)
        }

        return vet
    }
}

function pad(number) {
    let pad
    if (number < 10)
        pad = '0'
    else
        pad = ''
    return pad + number
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}