"use strict";

const RIGHE=6;
const COLONNE=7;

const GREY = "rgb(127, 127, 127)";
const YELLOW = "rgb(255, 255, 0)";
const RED = "rgb(255, 0, 0)";


window.onload=function(){
    let _wrapper=document.querySelector("#wrapper")
    let _divTurno=document.querySelector("#nextPlayer")
    
    for (let i = 0; i < RIGHE; i++) {
        for (let j = 0; j < COLONNE; j++) {
            let _div = document.createElement("div");
            _div.classList.add("pedina")
            _div.id = i + "-" + j;
            _wrapper.appendChild(_div);
            if(i==RIGHE-1)
            {
                _div.addEventListener("click", visualizza)
            }
        }
    }
    _divTurno.classList.add("pedina")
    _divTurno.style.backgroundColor=YELLOW

    function visualizza(){
        //qui this c'è perchè è una procedura d'evento
        let aus=this.id.split("-")
        let i = parseInt(aus[0]);  
        let j = parseInt(aus[1]); 
        this.style.backgroundColor=_divTurno.style.backgroundColor
        cambiaColoreTurno()
        this.removeEventListener("click", visualizza)
        if(i>0)
        {
            let _div=document.getElementById((i-1)+"-"+j)
            _div.addEventListener("click", visualizza)
        }
        let color = controllaVincita()
        if(color)
        {
            alert("BRAVO, ha vinto " + color + "!")
            disabilitaDiv()
        }
    }

    function cambiaColoreTurno(){
        //qui non posso usare this perchè è una sottoprocedura
        if(_divTurno.style.backgroundColor==RED)
        {
            _divTurno.style.backgroundColor=YELLOW
        }
        else
        {
            _divTurno.style.backgroundColor=RED
        }
    }

    function controllaVincita() {
        //controllo per righe 
        for (let i = 0; i < RIGHE; i++) {
           for (let j = 0; j <  COLONNE -3; j++) {
                let _currentDiv = document.getElementById(i + "-" + j); 
                //se la cella corrente è stata modificata dinamicamente, quindi è grigia (default css)
                if(_currentDiv.style.backgroundColor != "")
                {
                    let _next1 = document.getElementById(i + "-" + (j + 1))
                    let _next2 = document.getElementById(i + "-" + (j + 2))
                    let _next3 = document.getElementById(i + "-" + (j + 3))
                    if(_currentDiv.style.backgroundColor == _next1.style.backgroundColor && 
                        _next1.style.backgroundColor == _next2.style.backgroundColor && 
                        _next2.style.backgroundColor == _next3.style.backgroundColor){
                            return _currentDiv.style.backgroundColor
                        }
                }
           }
        }
        //controllo verticale 
        //controllo obliquo
    }
}