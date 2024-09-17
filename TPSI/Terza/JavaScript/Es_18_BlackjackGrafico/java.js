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
	_btnG.style.opacity=0.5;
	_btnB.style.opacity=0.5;

    _btnG.addEventListener("mouseover", resetOpacity);
    _btnB.addEventListener("mouseover", resetOpacity);

    _btnG.addEventListener("mouseout", setOpacity);
    _btnB.addEventListener("mouseout", setOpacity);

    function resetOpacity(){
        this.style.opacity = 1;
    }

    function setOpacity(){
        this.style.opacity = 0.5;
    }

    let carteEstratte = [];

    _btnG.addEventListener("click", clickHandlerG);

    function clickHandlerG() {
        let carta;
        let numero;
        resetCheck(_assoG, _chkG);

        do
        {
            //lettera a .. d
            let lettera = String.fromCharCode(generaNumero(97, 101));

            //numero 1 .. 13
            numero = generaNumero(1, 14);

            carta = "img/" + lettera + numero + ".gif";
        } while(carteEstratte.includes(carta));

        carteEstratte.push(carta);
        console.log(carteEstratte);

        _cartaG.style.backgroundImage = `url("${carta}")`;

        if(numero > 10) numero = 10;

        if(numero == 1)
            _assoG.style.visibility = "visible";

        _puntiG.textContent = parseInt(_puntiG.textContent) + numero;

        if(parseInt(_puntiG.textContent) > 21)
        {
            termina();
            alert("HAI PERSO");
        }        
    }

    _chkG.addEventListener("click", function() { 
        _puntiG.textContent = parseInt(_puntiG.textContent) + 10; 
        if(parseInt(_puntiG.textContent) > 21)
            termina();
        else
           resetCheck(_assoG, _chkG);
    })
    
    function resetCheck(_asso, _chk){
        _asso.style.visibility="hidden";
        _chk.checked = false;
    }

    function termina(){
        _btnG.removeEventListener("mouseover", resetOpacity);
        _btnB.removeEventListener("mouseover", resetOpacity);

        _btnG.removeEventListener("mouseout", resetOpacity);
        _btnG.removeEventListener("mouseout", resetOpacity);

        _btnG.removeEventListener("click", clickHandlerG);
        _btnB.removeEventListener("click", clickHandlerB);

        _btnG.style.opacity = 0.5;
        _btnB.style.opacity = 0.5;
    }

    _btnB.addEventListener("click", clickHandlerB);


    function clickHandlerB() {
        _btnG.removeEventListener("click", clickHandlerG);
        _btnG.removeEventListener("mouseover", resetOpacity);
        _btnG.removeEventListener("mouseout", resetOpacity);

        let carta;
        let numero;
        carteEstratte = [];
        resetCheck(_assoB, _chkB);

        do
        {
            //lettera a .. d
            let lettera = String.fromCharCode(generaNumero(97, 101));

            //numero 1 .. 13
            numero = generaNumero(1, 14);

            carta = "img/" + lettera + numero + ".gif";
            //console.log(carta);
        } while(carteEstratte.includes(carta));

        carteEstratte.push(carta);

        _cartaB.style.backgroundImage = `url("${carta}")`;

        if(numero > 10) numero = 10;

        if(numero == 1)
            _assoB.style.visibility = "visible";


        _puntiB.textContent = parseInt(_puntiB.textContent) + numero;

        if(parseInt(_puntiB.textContent) > 21)
        {
            termina();
            alert("HAI VINTO");
        }
        else if(parseInt(_puntiB.textContent) > 17)
        {
            if(parseInt(_puntiB.textContent) > parseInt(_puntiG.textContent) || parseInt(_puntiB.textContent) == parseInt(_puntiG.textContent))
                alert("HAI PERSO");
            else
                alert("HAI VINTO");
        }
    }

    _chkB.addEventListener("click", function() { 
        _puntiB.textContent = parseInt(_puntiB.textContent) + 10; 
        if(parseInt(_puntiB.textContent) > 21)
            termina();
        else
           resetCheck(_assoB, _chkB);
    })
}

function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a
}