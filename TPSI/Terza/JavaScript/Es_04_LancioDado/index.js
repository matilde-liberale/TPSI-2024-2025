"use strict"

let _txtLanci;
let _msgs;
let vetCont = new Array(6);
let r;
let g;
let b;

window.onload = function(){
    _txtLanci = document.getElementById("txtLanci");
    _msgs = document.getElementsByName("msg");
    inizializzaVet();
}

function inizializzaVet(){
    for (let i = 0; i < vetCont.length; i++) {
            vetCont[i]=0;
    }
}

function stampaVet(){
    for (let i = 0; i < vetCont.length; i++) {
        r=generaNumCasuale(0, 256);
        g=generaNumCasuale(0, 256);
        b=generaNumCasuale(0, 256);
        _msgs[i].style.color=`rgb(${r},${g},${b})`;
        _msgs[i].innerHTML=`la faccia ${i+1} è uscita ${vetCont[i]}`;
    }
}

function genera(){
    let nLanci = parseInt(_txtLanci.value);
    if(isNaN(nLanci)){
        alert("Devi introdurre un numero valido!");
        _txtLanci.value="";
        _txtLanci.focus();
        return;
    }

    for (let i = 0; i < nLanci; i++) {
        let index = generaNumCasuale(0, 6);
        vetCont[index]++;
    }

    console.log(vetCont);

    stampaVet();
}

function generaNumCasuale(min, max){
    return Math.floor((max - min) * Math.random()) + min;
}