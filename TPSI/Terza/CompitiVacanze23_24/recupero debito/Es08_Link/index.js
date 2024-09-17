'use strict'

let _lst

window.onload = function(){
    _lst = document.getElementById('lstSiti').options
    _lst.selectedIndex = -1
}

function visualizza() {
    for (let i = 0; i < _lst.length; i++) {
        if(_lst[i].selected)
            window.open(_lst[i].value)        
    }
}