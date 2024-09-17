"use strict"

let l = ['a', 'b', 'c', 'd'];
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let carte = [];
let posL;
let posN;
let somma = 0;

window.onload=function(){
    let _btnG=document.getElementsByClassName("card")[0];
    let _cartaG=document.getElementsByClassName("card")[1];
    let _btnB=document.getElementsByClassName("card")[2];
    let _cartaB=document.getElementsByClassName("card")[3];
	
	let _puntiG = document.getElementsByTagName("span")[0];
	let _puntiB = document.getElementsByTagName("span")[1];
    let _assoG=document.getElementsByClassName("msgAsso")[0];
    let _assoB=document.getElementsByClassName("msgAsso")[1];
	
	let _chkG = _assoG.children[0];
	let _chkB = _assoB.children[0];

    /* ***************** Inizializzazioni ********************* */
    _assoG.style.visibility="hidden";
	_assoB.style.visibility="hidden";
	_btnG.style.opacity=0.5
	_btnB.style.opacity=0.5

    _btnG.addEventListener("mouseover", function() { this.style.opacity = 1; });
    _btnG.addEventListener("mouseout", function() { this.style.opacity = 0.5; });

    _btnB.addEventListener("mouseover", function() { this.style.opacity = 1; });
    _btnB.addEventListener("mouseout", function() { this.style.opacity = 0.5; });

    //------

    _btnG.addEventListener("click", gioca);

    function gioca(){
        generaCarta(_cartaG);

        _cartaG.visibility = true;

        _assoG.style.visibility = "hidden";

        if(n[posN] == 1)
        {
            _assoG.style.visibility = "visible";

            somma++;

            _chkG.addEventListener("change", function() { if(this.checked) { somma += 9; _assoG.style.visibility = "visible"; this.checked = false; } });
        }
        else
        {
            if(n[posN] > 1 && n[posN] < 11)
                somma += n[posN];
            else if(n[posN] >= 11)
                somma += 10;
        }
        
        console.log(_chkG.checked);

        _puntiG.textContent = somma;
    }
}

function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a
}

function generaCarta(_carta){    
    do
    {
        posL = generaNumero(0, l.length);
        posN = generaNumero(0, 1);    
    } while(carte.includes(l[posL] + n[posN].toString()));

    carte.push(l[posL] + n[posN].toString());

    _carta.style.backgroundImage = 'url("img/' + l[posL] + n[posN].toString() + '.gif")';

    console.log(l[posL] + n[posN]);
}