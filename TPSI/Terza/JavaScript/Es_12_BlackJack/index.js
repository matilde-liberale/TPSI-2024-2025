"use strict";

const NUM = 21;
let numBanco;
let numGiocatore;
let _txtBanco;
let _txtUtente;
let _chks;
let _txtsGiocatore;
let _btnBanco;


onload = function(){
    _txtBanco = document.getElementById("txtBanco");
    _txtUtente = document.getElementById("txtUser");
    _btnBanco = document.getElementById("btnBanco");
    _txtsGiocatore = document.getElementsByName("txtNum");
    _chks = document.getElementsByName("chkNum");

    numBanco = random(1, 11);
    numGiocatore = 0;

    _txtUtente.value = numGiocatore;
    _txtBanco.value = numBanco;
}

function visualizza(index){
    _chks[index].disabled = true;
    _txtsGiocatore[index].value = random(1, 11);
    numGiocatore += parseInt(_txtsGiocatore[index].value);
    _txtUtente.value = numGiocatore;

    if(numGiocatore > 21)
        fineGioco("HAI PERSO");
}

function banco(){
    numBanco += random(1, 11);
    _txtBanco.value = numBanco;

    disabilitaChks();

    if(numBanco > NUM)
        fineGioco("HAI VINTO");
    else if(numBanco >= 17)
    {
        if((NUM - numBanco) < (NUM - numGiocatore))
            fineGioco("HAI PERSO");
        else if((NUM - numBanco) > (NUM - numGiocatore))
            fineGioco("HAI VINTO");
        else
            fineGioco("PAREGGIO (HAI PERSO)");
    }
}

function fineGioco(msg){

    disabilitaChks();

    _btnBanco.disabled = true;

    alert(msg);
}

function disabilitaChks(){
    //_chk equivale a _chks[i]

    for (const _chk of _chks) {
        _chk.disabled = true;
    }
}

function random(min, max){
    return Math.floor((max-min)*Math.random()+min);
}