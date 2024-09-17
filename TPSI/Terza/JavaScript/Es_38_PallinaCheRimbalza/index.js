"use strict"

const RIGHE = 15;
const PRIMA_RIGA = 0;
const ULTIMA_RIGA = RIGHE - 1;

let riga = PRIMA_RIGA + 1;

window.onload = function () {

    let _wrapper = document.getElementById("wrapper");
    let _racchetta = document.getElementById("racchetta");

    _racchetta.visibile = true;

    let _palline = [];
    let livello = 0;
    let timer;
    let perdita = false;
    let vittoria = false;

    for (let i = 0; i < RIGHE; i++) {
        let _pallina = document.createElement("div");
        _pallina.classList.add("pallina");
        _pallina.style.backgroundColor = "red";
        if (i > 0)
            _pallina.style.visibility = "hidden";
        _pallina.style.borderRadius = "50%";
        _wrapper.appendChild(_pallina);
        _palline.push(_pallina);
    }

    rimbalzo(); // Start the bouncing animation

    function rimbalzo() {

        // Going down
        function goDown() {
            if (riga <= ULTIMA_RIGA) {
                setTimeout(function() {
                    _palline[riga - 1].style.visibility = "hidden";
                    _palline[riga].style.visibility = "visible";
                    riga++;
                    if (riga <= ULTIMA_RIGA) {
                        goDown();
                    } else {
                        if(!_racchetta.visibile)
                        {
                            setTimeout(alert("Hai perso"), 500);
                            perdita = true;
                        }
                        else
                        {
                            if(livello == ULTIMA_RIGA)
                            {
                                setTimeout(alert("Hai vinto"), 500);
                                vittoria = true;
                            }
                            else
                            {
                                livello++;
                                goUp();
                            }
                        }
                    }
                }, 10);
            }
        }

        // Going up
        function goUp() {
            if (riga > livello) {
                setTimeout(function() {
                    riga--;
                    _palline[riga].style.visibility = "hidden";
                    _palline[riga - 1].style.visibility = "visible";
                    if (riga > livello) {
                        goUp();
                    } else {
                        goDown();
                    }
                }, 10);
            }
        }

        
        timer = setInterval(racchetta, 200);

        function racchetta(){
            if(vittoria || perdita)
                clearInterval(timer);

            let n = random(1, 11);

            if(n < 3)
            {
                _racchetta.visibile = false;
                _racchetta.style.visibility = "hidden";
            }
            else
            {
                _racchetta.visibile = true;
                _racchetta.style.visibility = "visible";
            }
        }

        goDown(); // Start by going down
    }
}

function random(min, max){
    return Math.floor((max-min) * Math.random())+min;
}