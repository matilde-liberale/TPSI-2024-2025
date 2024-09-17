"use strict"

let _lstSiti;

onload = function(){
    _lstSiti = document.getElementById("lstSiti");
    _lstSiti.selectedIndex = -1;
    console.log(_lstSiti.selectedIndex);
}

function visualizza(){
    window.open(_lstSiti.value, "_self");
    //window.location.href = _lstSiti.value;
}