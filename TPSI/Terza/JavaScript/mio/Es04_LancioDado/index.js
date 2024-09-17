'use scrict'

let vetCont = new Array(6)

let _txtLanci;
let _Divmsgs

window.onload = function () {
    _txtLanci = document.getElementById('txtLanci')
    _Divmsgs = document.getElementsByName('msg')
    InizializzaVet();
}

function InizializzaVet() {
    for (let i = 0; i < vetCont.length; i++)
        vetCont[i] = 0;
}

function genera() {
    let nLanci = parseInt(_txtLanci.value)
    if (isNaN(nLanci)) {
        alert("Devi inserire un numero valido")
        _txtLanci.value = ''
        _txtLanci.focus();
        return;
    }

    for (let i = 0; i < nLanci; i++) {
        let index = GeneraNumeroRandom(1, 6);
        vetCont[index]++
    }

    StampaVet(vet)
}

function StampaVet() {
    for (let i = 0; i < vetCont.length; i++) {
        _Divmsgs[i].innerHTML = ` La faccia ${i + 1} è uscita ${vetCont[i]} volte`
        let r = GeneraNumeroRandom(0, 256)
        let g = GeneraNumeroRandom(0, 256)
        let b = GeneraNumeroRandom(0, 256)
        let color = `rgb(${r}, ${g}, ${b})`
        _Divmsgs.style.color = color
    }
}

function GeneraNumeroRandom(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}