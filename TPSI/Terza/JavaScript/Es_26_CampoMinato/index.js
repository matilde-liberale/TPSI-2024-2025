"use strict"

window.onload = function(){
    let _wrapper = document.querySelector("#wrapper");

    let clicks = 0;
    let _btns = [];

    for (let i = 0; i < 5; i++) {
        let _btnss = [];
        for (let j = 0; j < 5; j++) {
            let _btn = document.createElement("button");
            _btn.valore = 0;
            _btn.addEventListener("click", cellaClick);
            _btnss.push(_btn);
            _wrapper.appendChild(_btn);
        }
        _btns.push(_btnss);
    }

    let numsX = [];
    let numsY = [];

    for (let i = 0; i < 5; i++) {
        numsX.push(i);
        numsY.push(i);
    }

    for (let i = 0; i < 5; i++) {
        let posX;
        let posY;
        do
        {
            posX = numsX[random(0, numsX.length)];
            posY= numsY[random(0, numsY.length)];
        } while(_btns[posX][posY].valore == -1);

        numsX.splice(posX, 1);
        numsY.splice(posY, 1);
        _btns[posX][posY].valore = -1;
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let bombe = 0;
            for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, 4); x++) {
                for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, 4); y++) {
                    if(_btns[i][j].valore != -1 && (i != x || j != y))
                        if(_btns[x][y].valore == -1)
                            bombe++;
                }
            }
        
            if(_btns[i][j].valore != -1)
            {
                _btns[i][j].valore = bombe;
            }
        }
    }

    function cellaClick(){
        clicks++;

        if(this.valore == -1)
        {
            this.style.backgroundImage = "url('bomba.png')";
            alert("HAI PERSO");
            fineGioco();
        }
        else
        {
            if(this.valore != 0)
                this.textContent = this.valore;

            this.style.backgroundColour = "white";
            this.disabled = true;

            if(clicks == 20)
            {
                alert("HAI VINTO");
                fineGioco();
            }
        }

        function fineGioco(){
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    if(_btns[i][j].valore == -1)
                        _btns[i][j].style.backgroundImage = "url('bomba.png')";

                    _btns[i][j].removeEventListener("click", cellaClick);
                    _btns[i][j].disabled = true;
                }
            }
        }

    }
    
}

function random(min, max){
    return Math.floor((max-min)*Math.random())+min;
}