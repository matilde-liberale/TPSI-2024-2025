'use strict'

let _vet
let _value

window.onload = function () {
    _vet = document.getElementById('lstSiti').options
    _vet.selectedIndex - 1
}

function visualizza() {
    for (let i = 0; i < _vet.length; i++) {
        if (_vet[i].selected)
            window.open(_vet[i].value)
    }
}