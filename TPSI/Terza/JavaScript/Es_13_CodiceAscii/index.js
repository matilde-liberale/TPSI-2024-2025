"use strict"

let _lst;
let _txtsNum;
let _txtsASCII;
let _chks;
let _btnControlla;

onload = function(){
    _lst = document.getElementsById('voci');
    _txtsNum = document.getElementById("div1").getElementsByClassName("txt")
    _txtsASCII = document.getElementById("div2").getElementsByClassName("txt")
    _chks = document.getElementsByName("chkRis")
    _btnControlla = document.getElementById("btnControlla")

    _lst.selectedIndex = -1
    _btnControlla.disabled = true
}

function genera(){
    for (const _txt of _txtsASCII) {
        _txt.value = "";
    }

    for (const _chk of _chks) {
        _chk.checked = false;
    }

    _btnControlla.disabled = true;

    let aus = [];
    let range = _lst.value.split("-")

    let min =parseInt(range[0])
    let max = parseInt(range[1])
    caricaNums(aus, min, max);
}

function check(event){
    if(_lst.selectedIndex == 0)
        event.target.value = event.target.value.toUpperCase()

    let compilati = true;
    let i=0;

    do
    {
        if(_txtsASCII[i++].value == "")
            compilati = false;
    } while(i < _txtsASCII.length && compilati);

    if(compilati)
        _btnControlla.disabled = false;
}

function controlla(){
    let i=0;
    let uguali = true;
    let errori = 0;
    
    for (let i = 0; i < _txtsASCII.length; i++) {
        if(_txtsASCII[i].value != String.fromCharCode(parseInt(_txtsNum[i].value)))
        {
            uguali = false;
            errori++;
        }
        else
            _chks[i].checked = true;
    }

    if(!errori)
        alert("bravissimo");
    else if(errori == 6)
        alert("risultato pessimo");
    else
        alert("puoi migliorare");
}

function caricaNums(v, min, max){
    for (let i = 0; i < _txtsASCII.length; i++) {
        let n;
        do
        {
            n = random(min, parseInt(max)+1);
        }
        while(v.includes(n))

        v.push(n);
        _txtsNum[i].value = n;
    }
}

function random(min, max){
    return Math.floor((max-min)*Math.random()+min);
}