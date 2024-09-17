'use strict'

let cartaGirata;
let cartaUtente;
let numero;
let cont = 0;
let carteEstratte = [];
let seme;
let puntiUtente = 0;
let puntiCarta;

window.onload = function () {
    let _wrapper = document.querySelector("#wrapper")
    let _divCarta = document.querySelector("#carta")
    let _btnGira = document.querySelector("#btnInvia")
    let _punteggio = document.querySelector('#punteggio')

    for (let i = 0; i < 7; i++) {
        let _img = document.createElement("img");
        _img.id = i.toString();
        _img.className = "carteUtente"
        _wrapper.appendChild(_img)
        _img.addEventListener("click", cambiaCarta)
    }

    seme = String.fromCharCode(generaNumero(97, 101));
    numero = generaNumero(7, 11);
    cartaGirata = "img/" + seme + numero + ".gif";
    //console.log(cartaGirata);
    carteEstratte.push(cartaGirata);
    puntiCarta = numero;
    _divCarta.style.backgroundImage = `url("${cartaGirata}")`;

    _btnGira.addEventListener("click", giraCarta)

    function giraCarta() {
        let immagine = document.getElementsByClassName("carteUtente")
        do {
            seme = String.fromCharCode(generaNumero(97, 101));
            numero = generaNumero(1, 14);
            cartaUtente = "img/" + seme + numero + ".gif";
        } while (carteEstratte.includes(cartaUtente));
        carteEstratte.push(cartaUtente);
        immagine[cont].style.backgroundImage = `url("${cartaUtente}")`;
        immagine[cont].value = numero
        console.log(immagine[cont].value)
        cont++;
        if (numero > 10)
            puntiUtente = parseInt(puntiUtente + 1)
        else
            puntiUtente = parseInt(puntiUtente + numero)

        _punteggio.textContent = puntiUtente;

        if (puntiCarta == puntiUtente) {
            alert("Bravissimo hai vinto!")
            _btnGira.disabled = true
        }
        else {
            if (puntiUtente > puntiCarta) {
                alert("Hai perso!")
                _btnGira.disabled = true
            }
        }
    }

    function cambiaCarta() {
        let differenza = this.value
        puntiUtente = parseInt(puntiUtente - differenza)
        cont = this.id
        let immagine = document.getElementsByClassName("carteUtente")
        do {
            seme = String.fromCharCode(generaNumero(97, 101));
            numero = generaNumero(1, 14);
            cartaUtente = "img/" + seme + numero + ".gif";
        } while (carteEstratte.includes(cartaUtente));
        carteEstratte.push(cartaUtente);
        immagine[cont].style.backgroundImage = `url("${cartaUtente}")`;
        
        if (numero > 10)
            puntiUtente = parseInt(puntiUtente + 1)
        else
            puntiUtente = parseInt(puntiUtente + numero)

        _punteggio.textContent = puntiUtente;

        if (puntiCarta == puntiUtente) {
            alert("Bravissimo hai vinto!")
            _btnGira.disabled = true
        }
        else {
            if (puntiUtente > puntiCarta) {
                alert("Hai perso!")
                _btnGira.disabled = true
            }
        }
    }
}

function generaNumero(a, b) {
    return Math.floor((b - a) * Math.random()) + a;
}