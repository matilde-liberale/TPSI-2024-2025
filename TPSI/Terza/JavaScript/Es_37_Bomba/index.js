"use strict"

const DIM = 10;

window.onload = function(){
    let _btns = [];
    let timerBomba;
    let scansioni = 0;

    let _wrapper = document.getElementById("wrapper");

    for (let i = 0; i < DIM; i++) {
        let _btnss = [];
        for (let j = 0; j < DIM; j++) {
            let _btn = document.createElement("button");
            _btn.classList.add("cella");
            _btn.id = `${i}-${j}`;
            _btn.style.backgroundColor = `rgb(127, 127, 127)`;
            _btn.addEventListener("click", colorare);
            _wrapper.appendChild(_btn);
            _btnss.push(_btn);
        }
        _btns.push(_btnss);
    }

    let x = generaNumero(0, DIM);
    let y = generaNumero(0, DIM);

    let _bomba = _btns[x][y];
    _bomba.style.backgroundImage = `url("bomba.png")`;

    timerBomba = setInterval(spostamento, 150);

    function spostamento(){
        let riga = parseInt(_bomba.id.split("-")[0]);
        let colonna = parseInt(_bomba.id.split("-")[1]);

        let riga1 = riga;
        let colonna1 = colonna;

        let n = generaNumero(0, 4);

        switch(n)
        {
            case 0:
                riga1++;
                break;
            case 1:
                riga1--;
                break;
            case 2:
                colonna1++;
                break;
            case 3:
                colonna1--;
                break;
        }

        if(riga1 >= 0 && riga1 < DIM && colonna1 >= 0 && colonna1 < DIM)
        {
            if(getComputedStyle(_btns[riga1][colonna1]).backgroundColor != "rgb(0, 0, 255)")
            {
                _bomba.style.backgroundImage = '';
                _bomba = _btns[riga1][colonna1];
                _bomba.style.backgroundImage = `url("bomba.png")`;
            }
            else
            {
                if(scansioni >= 15)
                {
                    alert("Hai vinto!");
        
                    for (let i = 0; i < DIM; i++) {
                        for (let j = 0; j < DIM; j++) {
                            _btns[i][j].removeEventListener("click", colorare);
                        }
                    }
        
                    clearInterval(timerBomba);
                }
            }
        }
        else
            scansioni++;
    }

    function colorare(){
        if(this.style.backgroundImage == 'url("bomba.png")')
        {
            alert("Hai perso!");
            for (let i = 0; i < DIM; i++) {
                for (let j = 0; j < DIM; j++) {
                    _btns[i][j].removeEventListener("click", colorare);
                }
            }

            clearInterval(timerBomba);
        }
        else
        {
            if(getComputedStyle(this).backgroundColor == "rgb(127, 127, 127)")
                this.style.backgroundColor = "blue";
            else
                this.style.backgroundColor = "rgb(127, 127, 127)";
        }
    }
}

function generaNumero(min, max)
{
    return Math.floor((max-min) * Math.random())+min;
}