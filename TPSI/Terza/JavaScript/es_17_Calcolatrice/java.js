"use strict"

let primoNum;
let operatore;
let selected;

window.onload = function(){
    let _nums = document.querySelectorAll("input[name=btnNum]");
    let _ops = document.querySelectorAll("input[name=btnOperatore]");
    let _btnUguale = document.querySelector("#btnCalcola");
    let _txtDisplay = document.querySelector("#txtDisplay");
    let _btnClear = document.querySelector("#btnClear");

    for (const _num of _nums) {
        _num.addEventListener("click", function(){  
            if(selected){ 
                _txtDisplay.value = ""; 
                selected = false; 
            } 
            
            if(this.value != "." || !_txtDisplay.value.includes(".")){ 
                _txtDisplay.value = _txtDisplay.value + this.value; 
            }
        } );
        
    }

    for (const _op of _ops) {
        _op.addEventListener("click", function(){ primoNum = parseFloat(_txtDisplay.value); operatore = this.value; _txtDisplay.select(); selected = true });
    }

    _btnUguale.addEventListener("click", eseguiCalcoli);

    //se si dichiara in questo modo bisogna prima dichiararla e poi chiamarla

    let clear = function(){
        _txtDisplay.value = "";
        primoNum = 0;
        operatore = "";
    }

    _btnClear.addEventListener("click", clear);

    function eseguiCalcoli(){
        let secondoNum = parseFloat(_txtDisplay.value);
        
        switch(operatore){
            case "+":
                secondoNum += primoNum;
                break;
            
            case "-":
                secondoNum = primoNum - secondoNum;
                break;

            case "*":
                secondoNum*= primoNum;
                break;

            case "/":
                secondoNum = primoNum / secondoNum;
                break;
        }
        _txtDisplay.value = secondoNum;
    }
}