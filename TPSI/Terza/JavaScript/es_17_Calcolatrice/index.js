"use strict"

let primoNum="";
let secondoNum="";
let operatore="";
let turno=1;
let _operatore;

let _display;

onload = function(){
    _display = document.querySelector("#txtDisplay");
}

function CaricaNum(event){
    if(turno == 1)
    {
        primoNum += event.target.value;
        _display.value = primoNum;
    }
    else
    {
        _operatore.style.backgroundColor = "";
        secondoNum += event.target.value;
        _display.value = secondoNum;
    }
}

function CaricaOperatori(event){
    if(primoNum == "")
        alert("Inserisci un numero");
    else
    {
        if(turno == 1)
            turno = 2;
        else
            turno = 1;

        operatore = event.target.value;
        _operatore = event.target;
        event.target.style.backgroundColor = "#aAaAaA";
    }
}

function Canc(){
    primoNum = "";
    secondoNum = "";
    operatore = "";
    _operatore.style.backgroundColor = "";
    _display.value = "";
}

function Calcola(){
    if(primoNum != "" && secondoNum != "" && operatore != "")
    {
        let ris;

        switch(operatore)
        {
            case "+":
                ris = parseFloat(primoNum) + parseFloat(secondoNum);
            break;
            
            case "-":
                ris = parseFloat(primoNum) - parseFloat(secondoNum);
            break;

            case "*":
                ris = parseFloat(primoNum) * parseFloat(secondoNum);
            break;

            case "/":
                ris = parseFloat(primoNum) / parseFloat(secondoNum);
            break;

        }

        _display.value = ris;
        turno = 1;
        primoNum = "";
        secondoNum = "";
    }
    else
    {
        alert("Devi inserire due numeri");
    }
}