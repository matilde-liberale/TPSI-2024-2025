"use strict";

const colCifre = ["Nero", "Marrone", "Rosso", "Arancio", "Giallo",
              "Verde", "Blu", "Viola", "Grigio", "Bianco" ];

const colFatMolt = ["Argento", "Oro", "Nero", "Marrone", "Rosso", "Arancio", "Giallo",
              "Verde", "Blu", "Viola"];
              
const colTolleranze=["Argento", "Oro", "Marrone", "Rosso", "Verde", "Blu", "Viola"];
const valTolleranze=["10", "5", "1", "2", "0.5", "0.25", "0.1"];

let espMoltiplicativo;

let _lstCifra1;
let _lstCifra2;
let _lstFattore;
let _lstTolleranza;

let _div;

onload = function(){
    _lstCifra1 = document.getElementById("lstCifra1");
    _lstCifra2 = document.getElementById("lstCifra2");
    _lstFattore = document.getElementById("lstFattore");
    _lstTolleranza = document.getElementById("lstTolleranza");
    _div = document.getElementById("txtRisultato");
    espMoltiplicativo = -2;

    caricaListBox(_lstCifra1, colCifre);
    caricaListBox(_lstCifra2, colCifre);
    caricaListBox(_lstFattore, colFatMolt);
    caricaListBox(_lstTolleranza, colTolleranze);

    
    _lstCifra1.selectedIndex = -1;
    _lstCifra2.selectedIndex = -1;
    _lstFattore.selectedIndex = -1;
    _lstTolleranza.selectedIndex = -1;
    
}

function caricaListBox(lst, elemento){
    /*
    for (let i = 0; i < elemento.length; i++) {
        let option = document.createElement("option");
        option.text = elemento[i];
        lst.add(option);
    }
    */

    for (let i = 0; i < elemento.length; i++) {
        const element = elemento[i];
        lst.innerHTML += `<option value=${i}>${element}</option>`;

        /*
        if(i < 2)
            lst.getElementsByTagName("option")[i].disabled = true;
        */
    }
}

function calcola(){
    let ris = (_lstCifra1.selectedIndex * 10 + _lstCifra2.selectedIndex) * Math.pow(10, espMoltiplicativo+_lstFattore.selectedIndex);
    let tolleranza = valTolleranze[_lstTolleranza.selectedIndex];

    if(ris<20)
    {
        ris = ris.toFixed(2);
    }
    else
    {
        ris = ris.toFixed(0);
    }

    _div.innerHTML = `RISULTATO: <b>${ris} Ohm ± ${tolleranza}%</b>`;
}

