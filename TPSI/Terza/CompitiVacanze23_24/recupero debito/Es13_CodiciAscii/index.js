'use strict'

let _lstVoci
let _txts1
let _txts2
let _chkRis
let _btnControlla

window.onload = function () {
    _lstVoci = document.getElementById('voci')
    let div1 = document.getElementById('div1')
    let div2 = document.getElementById('div2')
    _txts1 = div1.getElementsByClassName('txt')
    _txts2 = div2.getElementsByClassName('txt')
    _chkRis = document.getElementsByName('chkRis')
    _btnControlla = document.getElementById('btnControlla')

    _lstVoci.selectedIndex = -1
}

function genera() {
    let range = _lstVoci.value.split('-')
    let min = parseInt(range[0])
    let max = parseInt(range[1])
    console.log(min + ' ' + max)
    let aus = []
    let n

    for (let i = 0; i < _txts1.length; i++) {
        do {
            n = random(min, max + 1)
        } while (aus.includes(n))
        aus.push(n)
        _txts1[i].value = n
    }
    
    for (const _txt of _txts2) {
        _txt.value = ''
    }
    for (const _chk of _chkRis) {
        _chk.checked = false 
    }

    _btnControlla.disabled = true
}

function check(event){
    if(_lstVoci.selectedIndex == 0)
        event.target.value = event.target.value.toUpperCase();

    let cont = 0

    for (let i = 0; i < _txts2.length; i++) {
        if(_txts2[i].value != '')
            cont++
    }
    if(cont == 6)
        _btnControlla.disabled = false 
}

function controlla() {
    let errori = 0
    
    for (let i = 0; i < _txts2.length; i++) {
        if(_txts2[i].value != String.fromCharCode(_txts1[i].value))   
            errori++
        else 
            _chkRis[i].checked = true
    }

    if(errori == 0)
        alert('Bravissimo!')
    else if(errori == 6)
        alert('Risultato pessimo!')
    else 
        alert('Puoi fare meglio!')
}

function random(a, b) {
    return Math.floor((b - a) * Math.random()) + a;
}