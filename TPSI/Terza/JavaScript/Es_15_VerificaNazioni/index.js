"use-strict"

let nazioni = [];
let btnSelCitta;
let _btnRispondi;
let _txts;
let _txts1;
let _txts2;
let _txts3;
let _opts1;
let _opts2;
let index;
let giuste = 0;

window.onload = function(){
    _txts = document.getElementsByClassName("txt");
    _txts1 = document.getElementById("div1").getElementsByClassName("txt");
    _txts2 = document.getElementById("div2").getElementsByClassName("txt");
    _txts3 = document.getElementsByName("txtRisposte");
    _opts1	= document.getElementsByName("optCitta");
    _opts2 = document.getElementsByName("optNazioni");
    _btnSelCitta = document.getElementById("btnSeleziona");
    _btnRispondi = document.getElementById("btnRispondi");

    for (const _txt of _txts) {
        _txt.readOnly = true;
    }

    for (const _txt of _txts1) {
        nazioni.push(_txt.getAttribute("nazione"));
    }

    for (const _txt of _txts3) {
        _txt.readOnly = true;
    }

    for (const _opt of _opts1) {
        _opt.disabled = true
    }

    for (let i = 0; i < _txts2.length; i++) {
        const index = random(0, nazioni.length);
        _txts2[i].value = nazioni[index];
        nazioni.splice(index, 1);
    }

    console.log(nazioni);

}

function seleziona(){
    let i;

    do
    {
        i = random(0, _opts1.length)
        if(_txts1[i].disabled == false || _txts1[i].value != "")
            _opts1[i].checked = true;
    } while(_txts1[i].disabled == true || _txts1[i].value == "");

    index = i;
}

function controlla(){
    let i=0;
    let selezionato = false;

    do
    {
        if(_opts2[i].checked == true)
            selezionato=true;
        else
            i++;
    } while(!selezionato && i < _opts2.length);

    if(!selezionato)
        alert("Selezionare una città ed una nazione");
    else
    {
        if(_txts1[index].getAttribute("nazione") == _txts2[i].value)
        {
            optCitta[index].checked = false;
            optNazioni[i].checked = false;
            _txts1[index].disabled = true;
            _txts2[i].disabled= true;
            _txts3[i].value = _txts1[index].value;
            _txts1[index].value = "";
            giuste++;
        }
        else
            alert("Risposta Sbagliata");
    }

    if(giuste == _txts1.length)
    {
        alert("Bravo Hai vinto");
        _btnRispondi.disabled = true;
        _btnSelCitta.disabled = true;
    }
}

function random(min, max){
    return Math.floor((max-min)*Math.random()+min);
}