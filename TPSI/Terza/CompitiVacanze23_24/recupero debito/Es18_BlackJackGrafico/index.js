"use strict"



window.onload = function () {
    let _btnG = document.getElementsByClassName("card")[0]
    let _cartaG = document.getElementsByClassName("card")[1]
    let _btnB = document.getElementsByClassName("card")[2]
    let _cartaB = document.getElementsByClassName("card")[3]

    let _puntiG = document.getElementsByTagName("span")[0]
    let _puntiB = document.getElementsByTagName("span")[1]
    let _assoG = document.getElementsByClassName("msgAsso")[0]
    let _assoB = document.getElementsByClassName("msgAsso")[1]

    let _chkG = _assoG.children[0]
    let _chkB = _assoB.children[0]

    /* ***************** Inizializzazioni ********************* */
    _assoG.style.visibility = "hidden";
    _assoB.style.visibility = "hidden";
    _btnG.style.opacity = 0.5
    _btnB.style.opacity = 0.5

    let resetOpacity = function () {
        this.style.opacity = 1;
    }

    _btnG.addEventListener('mouseover', resetOpacity)
    _btnB.addEventListener('mouseover', resetOpacity)

    let setOpacity = function () {
        this.style.opacity = 0.5
    }

    _btnG.addEventListener('mouseout', setOpacity)
    _btnB.addEventListener('mouseout', setOpacity)

    let seme = ['a', 'b', 'c', 'd']
    let carteEstratte = []

    _btnG.addEventListener('click', generaCarta)

    function generaCarta() {
        _assoG.style.visibility = 'hidden'
        _chkG.style.visibility = 'hidden'
        let carta
        let numero
        do {
            numero = generaNumero(1, 14)
            let pos = generaNumero(0, seme.length)
            carta = seme[pos] + numero + '.gif'
        } while (carteEstratte.includes(carta))
        carteEstratte.push(carta)
        _cartaG.style.backgroundImage = "url(img/" + carta
        // _puntiG.value = (parseInt(_puntiG.value) + numero).toString()
        if (numero > 10) numero = 10
        if (numero == 1) {
            _chkG.style.visibility = 'visible'
            _assoG.style.visibility = 'visible'
        }
        _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + numero
        
        _chkG.addEventListener('click', function () {
            numero = 10
            _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + numero
            this.checked = false
            this.style.visibility = 'hidden'
            msgAsso.style.visibility = 'hidden'
        })
        if (parseInt(_puntiG.innerHTML) > 21) termina()
    }

    function termina() {
        alert('Hai superato 21!')
        _btnG.removeEventListener('click', generaCarta)
        // _btnB.removeEventListener('click', generaCarta)
        _btnG.removeEventListener('mouseover', resetOpacity)
        _btnB.removeEventListener('mouseover', resetOpacity)
    }

    _btnB.addEventListener('click', function() {

        _btnG.removeEventListener('click', generaCarta)
        _btnG.removeEventListener('mousehover', resetOpacity)

        if (parseInt(_puntiB.innerHTML) < 17){
            _assoB.style.visibility = 'hidden'
            _chkB.style.visibility = 'hidden'
            let carta
            let numero
            do {
                numero = generaNumero(1, 14)
                let pos = generaNumero(0, seme.length)
                carta = seme[pos] + numero + '.gif'
            } while (carteEstratte.includes(carta))
            carteEstratte.push(carta)
            _cartaB.style.backgroundImage = "url(img/" + carta
            // _puntiG.value = (parseInt(_puntiG.value) + numero).toString()
            if (numero > 10) numero = 10
            if (numero == 1) {
                _chkB.style.visibility = 'visible'
                _assoB.style.visibility = 'visible'
            }
            _puntiB.innerHTML = parseInt(_puntiB.innerHTML) + numero
            
            _chkB.addEventListener('click', function () {
                numero = 10
                _puntiB.innerHTML = parseInt(_puntiB.innerHTML) + numero
                this.checked = false
                this.style.visibility = 'hidden'
                _assoB.style.visibility = 'hidden'
            })
        }
        else {
            if (_puntiB > _puntiG) {
                alert('Ha vinto il banco!')
            }
            else {
                alert('Ha vinto il giocatore!')
            }
        }
    })
}


function generaNumero(a, b) {
    return Math.floor((b - a) * Math.random()) + a
}