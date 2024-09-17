'use strict'

let numSegreti = new Array(4)
let colori = ['rgb(127, 127, 127)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 0, 255)']
let sequenza = []
let numUtente = []
let j = 0

window.onload = function () {
    let tbody = document.querySelector('#tabella tbody')

    for (let i = 0; i < numSegreti.length; i++) {
        numSegreti[i] = random(0, 6)
        console.log(numSegreti[i])
        sequenza[i] = TrovaColore(numSegreti[i])
        console.log(sequenza[i])
    }

    aggiungiRiga()

    function TrovaColore(n) {
        // if (n == 0)
            // return 'rgb(127, 127, 127)'
        // else if (n == 1)
            // return 'rgb(127, 127, 127)'
        // else if (n == 2)
            // return 'rgb(255, 255, 0)'
        // else if (n == 3)
            // return 'rgb(0, 255, 0)'
        // else if (n == 4)
            // return 'rgb(0, 0, 255)'
        // else
            // return 'rgb(255, 0, 255)'
        return colori[n]
    }

    function aggiungiRiga() {
        let nuovaRiga = document.createElement('tr')

        // cella indice riga
        let cellaIndice = document.createElement('th')
        cellaIndice.textContent = tbody.rows.length
        j = tbody.rows.length
        nuovaRiga.appendChild(cellaIndice)

        // Cella per colori utente
        let cellaColoriUtente = document.createElement('td')
        for (let i = 0; i < 4; i++) {
            let _divUtente = document.createElement('div')
            _divUtente.classList.add('pedina')
            _divUtente.style.backgroundColor = 'rgb(127, 127, 127)'
            _divUtente.valore = 0
            _divUtente.id = 'divUtente' + i + '-' + j
            _divUtente.addEventListener('click', cambiaColore)
            cellaColoriUtente.appendChild(_divUtente)
        }
        // button invia
        let _btnInvia = document.createElement('button')
        _btnInvia.classList.add('invia')
        _btnInvia.textContent = 'invia'
        _btnInvia.id = 'btnInvia'
        _btnInvia.addEventListener('click', controlla)
        cellaColoriUtente.appendChild(_btnInvia)
        nuovaRiga.appendChild(cellaColoriUtente)

        // Cella risultato
        let cellaRisultato = document.createElement('td')
        for (let i = 0; i < 4; i++) {
            let _divRis = document.createElement('div')
            _divRis.classList.add('pedina')
            _divRis.style.backgroundColor = '#ddd'
            _divRis.id = 'divRis' + i + '-' + j
            cellaRisultato.appendChild(_divRis)
        }
        nuovaRiga.appendChild(cellaRisultato)

        tbody.appendChild(nuovaRiga)
    }

    function cambiaColore() {
        let pos = colori.indexOf(this.style.backgroundColor)

        if (pos == -1 || pos >= colori.length - 1) {
            this.style.backgroundColor = colori[0]
            this.valore = 0
        } else {
            this.style.backgroundColor = colori[pos + 1]
            this.valore = pos + 1
        }
        // console.log(this.valore)
    }

    function controlla() {
        //nascondo e disabilito il pulsante invia 
        let _btnInvia = document.getElementById('btnInvia')
        _btnInvia.style.visibility = 'hidden'
        _btnInvia.removeEventListener('click', controlla)

        for (let i = 0; i < 4; i++) {
            let _divRis = document.getElementById('divRis' + i + '-' + j)
            let _divUtente = document.getElementById('divUtente' + i + '-' + j)
            //rimuovo evento
            _divUtente.removeEventListener('click', cambiaColore)
            //controllo se sono uguali 
            if (_divUtente.style.backgroundColor == sequenza[i])
                _divRis.style.backgroundColor = '#000'
            else
                _divRis.style.backgroundColor = '#ddd'
        }
        //aggiungo la riga
        aggiungiRiga()

        if (vittoria()) {
            alert('Hai vinto!')
            _btnInvia.removeEventListener('click', controlla)
        }
    }

    function vittoria() {
        for (let i = 0; i < 4; i++) {
            let _divRis = document.getElementById('divRis' + i + '-' + j)
            if (_divRis.style.backgroundColor != 'rgb(0, 0, 0)')
                return false               
        }
        return true
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
