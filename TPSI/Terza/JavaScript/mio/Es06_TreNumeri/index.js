'use strict'

let numeriSegreti = new Array(3)
let _txts
let _checks

window.onload = function () {
    _txts = document.getElementsByName('txtN')
    _checks = document.getElementsByName('chkN')
    generaNumeri();
}

function generaNumeri() {
    for (let i = 0; i < numeriSegreti.length; i++) {
        let num
        do {
            num = random(1, 10)
        } while (numeriSegreti.includes(num));
        numeriSegreti[i] = num;
    }
    console.log(numeriSegreti);
}

function confronta() {
    if (controllaNumeri()) {
        for (const item of _checks) {
            item.checked = false; 
        }
        let cont = 0
        for(const item of _txts){
            if (numeriSegreti.includes(parseInt(item.value)))
            {
                _checks[cont].checked = true
                conta++;
            }
        }
    }
    if (cont == 3)
    {
        alert('Hai vinto!')
    }
}

function controllaNumeri() {
    for (const item of _txts) {
        if (item.value == '' || isNaN(item.value)) {
            alert("Numeri non validi")
            return false;
        }
    }
    if(_txts[0].value == _txts.value[1] || _txts[0].value == _txts.value[2] || _txts[1].value == _txts.value[2])
    {
        alert('I numeri devono essere diversi tra loro')
        return false; 
    }
    return true
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}