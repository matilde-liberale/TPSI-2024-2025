"use strict"

const DIM = 10;

window.onload = function(){
    let _wrapper = document.getElementById("wrapper");

    let fermo = 0;

    //disegno matrice
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
                let _div = document.createElement("div");
                _div.id = `${i}-${j}`;
                _div.classList.add("cella");
                _div.addEventListener("click", visualizza);
                _wrapper.appendChild(_div);
        }
    }

    //generazione bomba
    let x = random(0, DIM);
    let y = random(0, DIM);
    let bomba = document.getElementById(x + "-" + y);
    bomba.style.backgroundImage = "url(bomba.png)";

    //spostamento bomba
    let timer = setInterval(spostamento, 350);

    function spostamento(){
        let direction = random(1, 5);

        switch(direction)
        {
            case 1: //dx -> destra
                console.log(document.getElementById(x + "-" + (y+1)));
                if(document.getElementById(x + "-" + (y+1)) && 
                document.getElementById(x + "-" + (y+1)).style.backgroundColor != "blue")
                {
                    disegnaBomba(x, y+1);
                    fermo = 0;
                }
                else
                {
                    fermo++;
                    if(fermo >= 15)
                    {
                        alert("Hai vinto!");
                        termina();
                    }
                }
                break;
            case 2: //sx -> sinistra
                if(document.getElementById(x + "-" + (y-1)) && 
                document.getElementById(x + "-" + (y-1)).style.backgroundColor != "blue")
                {
                    disegnaBomba(x, y-1);
                    fermo = 0;
                }
                else
                {
                    fermo++;
                    if(fermo >= 15)
                    {
                        alert("Hai vinto!");
                        termina();
                    }
                }
                break;
            case 3: //up -> sopra
                if(document.getElementById((x-1) + "-" + y) && 
                document.getElementById((x-1) + "-" + y).style.backgroundColor != "blue")
                {
                    disegnaBomba(x-1, y);
                    fermo = 0;
                }
                else
                {
                    fermo++;
                    if(fermo >= 15)
                    {
                        alert("Hai vinto!");
                        termina();
                    }
                }
                break;
            case 4: //down -> sotto
                if(document.getElementById((x+1) + "-" + y) && 
                document.getElementById((x+1) + "-" + y).style.backgroundColor != "blue")
                {
                    disegnaBomba(x+1, y);
                    fermo = 0;
                }
                else
                {
                    fermo++;
                    if(fermo >= 15)
                    {
                        alert("Hai vinto!");
                        termina();
                    }
                }
                break;
        }

        function disegnaBomba(newX, newY){
            bomba.style.backgroundImage = "";
            x = newX;
            y = newY;
            bomba = document.getElementById(x + "-" + y);
            bomba.style.backgroundImage = "url(bomba.png)";
        }

    }

    function visualizza(){
        if(this == bomba)
        {
            alert("Hai perso!");
            termina();

        }
        else
        {
            if(this.style.backgroundColor == "blue")
                this.style.backgroundColor = "";
            else
                this.style.backgroundColor = "blue";
        }
    }

    function termina(){
        clearInterval(timer);

        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let _div = document.getElementById(i + "-" + j);
                _div.removeEventListener("click", visualizza);
            }
        }
    }
}

function random(min, max){
    return Math.floor((max-min) * Math.random())+min;
}