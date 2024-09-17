"use strict"

let numeriSegreti=[];
let _txts;
let _chks;
let _btnReset;
let _btnGioca;

window.onload = function(){
    generaNumeri();
    _txts=document.getElementsByName("txtNum");
    _chks=document.getElementsByName("chkNum");
    _btnReset=document.getElementById("btnReset");
    _btnGioca=document.getElementById("btnInvia");
    _btnGioca.disabled=false;
    _btnReset.style.display="none";
}

function generaNumeri(){
    let aus=[1,2,3,4,5];
    let n=aus.length;

    for (let i = 0; i < n; i++) {
        let pos = random(0, aus.length);
        numeriSegreti.push(aus[pos]);
        aus.splice(pos, 1);
    }

    console.log(numeriSegreti);
}

function random(min, max){
    return Math.floor((max-min)*Math.random()+min);
}

function confronta(){
    let cont=0;

    if(controllaNumeri()){
        for (let i = 0; i < numeriSegreti.length; i++) {
            if(numeriSegreti[i]==parseInt(_txts[i].value))
            {
                _chks[i].checked=true;
                _txts[i].style.backgroundColor="green";
                _txts[i].disabled=true;
                cont++;
            }
            else
            {
                _chks[i].checked=false;
                _txts[i].style.backgroundColor="red";   
            }     
        }
    
        if(cont==5)
        {
            alert("HAI VINTO!");
            _btnReset.style.display="block";
            _btnGioca.disabled=true;
    
            /*
            for(const _txt of _txts){
                _txt.disabled=true;
            }
            */
        }
    }
}

function controllaNumeri(){
    for (const _txt of _txts) {
        if(_txt.value==""){
            alert("inserire i numeri");
            return false;
        }
    }

    for (let i = 0; i < _txts.length-1; i++) {
        for (let j = i+1; j < _txts.length; j++){
            if(_txts[i].value==_txts[j].value){
                alert("i 5 numeri devono essere tutti diversi")
                return false;
            }  
        }
    }

    return true;
}

function diverso(){

}

function controlla(event){
    let ch = event.keyCode;
    let _txt = event.target;
    _txt.value="";

    return ch >= 49 && ch <= 53;

    console.log(ch);
    //deve stare tra 49 e 53

}