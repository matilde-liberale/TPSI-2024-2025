'use strict'

let _lstVoci
let _txts1
let _txts2

window.onload = function () {
    _lstVoci = document.getElementById('voci')
    let div1 = document.getElementById('div1')
    let div2 = document.getElementById('div2')
    _txts1 = div1.getElementsByClassName('txt')//stessa ricerca ma anzichè farla su tutto il document lo faccio solo per i id che implementano l'id selezionato
    _txts2 = div1.getElementsByClassName('txt')

    _lstVoci.selectedIndex = -1
}

function genera() {
    let range = _lstVoci.value.split('-')
    let min = parseInt(range[0])
    let max = parseInt(range[1])
    let vet = []
    
    for (let i = 0; i < _txts1.length; i++) {
        let n
        do {
            n = random(min, max+1)
        } while (vet.includes(n));
        vet.push(n)
        _txts1[i].value = n;
    }
}
function check(){
    let cont = 0
    for (let i = 0; i < _txts2.length; i++) {
        if(_txts2[i].value != '')
            cont++
    }

    if (cont == 6) 
        _btnControlla.disabled = false
}

function controlla() {
    
}

function random(a, b) {
    return Math.floor((b - a) * Math.random()) + a;
}