"use strict"

function somma(){
    // alert("ok"); messaggio a schermo
    console.log("pulsante cliccato"); //nella console dell'inspector
    let _txt1 = document.getElementById("txtN1");  //len: assegna
    let _txt2 = document.getElementById("txtN2");
    console.log(_txt1);
    console.log(_txt2);

    let _txtRis = document.getElementById("txtRis");
    let _divRis = document.getElementById("divRis");

    let n1 = parseInt(_txt1.value);
    let n2 = parseInt(_txt2.value);

    console.log(n1);
    console.log(n2);

    let ris = n1 + n2;
    _txtRis.value = ris;

    _divRis.innerHTML = "<b>" + ris + "</b>";
    alert(ris);
}