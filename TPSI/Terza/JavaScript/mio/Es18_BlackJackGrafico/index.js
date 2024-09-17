"use strict";
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

    _btnG.addEventListener("mousehover", resetOpacity);
    _btnB.addEventListener("mousehover", resetOpacity);

    let setOpacity = function () {
        this.style.opacity = 0.5
    }

    _btnG.addEventListener("mouseout", setOpacity);
    _btnB.addEventListener("mouseout", setOpacity);

    let carteEstratte = []
    _btnG.addEventListener("click", function () {
        do {
            let lettere = string.fromCharCode(generaNumero(97, 101))
            //console.log(lettere)
            let numero = generaNumero(1, 14)
            //console.log(numero)
            let carta = lettera + numero + ".gif"
            //console.log(carta)
        } while (carteEstratte.includes(carta))
        carteEstratte.push(carta)
        //console.log(carteEstratte)
        _cartaG.style.backgroundImage = url(`img/${carta}`);
        //_puntiG.value = parseInt(_puntiG.value) + numero
        if (numero > 10) numero = 10
        if (numero == 1)
            _chkG.style.visibility = "visible"
        let puntiAus = parseInt(_puntiG.value) 
        _puntiG.value = (puntiAus + numero).ToString()
        if (parseInt(_puntiG.textContent) > 21) termina();
    })

    _chkG.addEventListener("click", function () {
        _puntiG.textContent = parseInt(_puntiG.textContent) + 10
        resetCheck()
    })

    function resetCheck() {
        _chkG.checked = false
        _assoG.style.visibility = "hidden"
    }

    function termina() {
        _btnG.removeEventListener("mousehover", resetOpacity)
        _btnB.removeEventListener("mousehover", resetOpacity)
    }
}


function generaNumero(a, b) {
    return Math.floor((b - a) * Math.random()) + a
}