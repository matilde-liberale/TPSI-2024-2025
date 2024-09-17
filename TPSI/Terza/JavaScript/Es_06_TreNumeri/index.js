"use-strict"

let _btnInvia;
let _txts;
let numeriSegreti = [];
let _chks;
let n;
let cont;

onload = function(){
    _btnInvia=document.getElementById("btnInvia");
    _txts=document.getElementsByName("txtN");
    _chks=document.getElementsByName("chkN");
    generaNumeriCasuali();
    n=numeriSegreti.length;
    cont=0;
    console.log(numeriSegreti);
}

function generaNumeriCasuali(){
    let aus = [9];
    let pos;

    for (let i = 0; i < 9; i++) {
        aus[i]=i+1;
    }

    for (let i = 0; i < 3; i++) {
        pos=random(0, aus.length);
        numeriSegreti.push(aus[pos]);
        aus.splice(pos, 1);
    }

    /*
    for(int i=0; i < numeriSegreti.length; i++){
        let num;
        do{
            num=random(1, 10)
        } while(numeriSegreti.includes(num));
        numeriSegreti[i]=num;
    }
    */
}

function random(min, max){
    return Math.floor((max-min)*Math.random()+min);
}

function controlla(){

    for (let i = 0; i < n; i++) {
        if(isNaN(parseInt(_txts[i].value)) || parseInt(_txts[i].value) < 1 || parseInt(_txts[i].value) > 9 || !diverso()){
            alert("Inserisci 3 numeri tutti diversi tra loro tra 1 e 9!");
            for (let j = 0; j < 3; j++) {
                if(_chks[j].checked==false)
                    _txts[j].value="";
            }
            return;
        }
        
        cont += giusto(i);
    }

    if(cont==3){
        alert("HAI VINTO!");
        _btnInvia.disabled=true;
    }

}

function diverso(){

    for (let i = 1; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            if(_txts[i].value==_txts[j].value)
                return false;
        }
    }

    return true;
}

function giusto(i){
    let j=0;
    let giusto=false;
    let count=0;

    do{
        if(numeriSegreti[j]==_txts[i].value){
            giusto=true;
            numeriSegreti.splice(j, 1);
            _chks[i].checked=true;
             count++;
            }
        
        j++;

    }while(!giusto && j < numeriSegreti.length);

    return count;
}
