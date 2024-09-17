"use strict"

const DIM = 4;
let _divs = [];

window.onload = function(){
    let vet = [];

    for (let i = 1; i <= 15; i++) {
        vet.push(i);
    }

    let _wrapper = document.querySelector("#wrapper");

    for (let i = 0; i < DIM; i++) {
        let _divss = [];
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement("div");
            _div.id = `${i}-${j}`;
            _div.classList.add("pedina");
            _div.addEventListener("click", sposta);
            _divss.push(_div);
            _wrapper.appendChild(_div);
            if(vet.length > 0)
            {
                let pos = generaNumero(0, vet.length);
                _div.textContent = vet[pos];
                _div.style.backgroundColor = "blue";
                vet.splice(pos, 1);
            }
            else
                _div.textContent = "";
        }
        _divs.push(_divss);
    }

    function sposta(){
        if(this.textContent != null)
        {
            let aus = this.id.split("-");
            let i = parseInt(aus[0]);
            let j = parseInt(aus[1]);
            
            for (let x = Math.max(0, i - 1); x <= Math.min(DIM - 1, i + 1); x++){
                for (let y = Math.max(0, j - 1); y <= Math.min(DIM - 1, j + 1); y++) {
                    if((i == x && j != y) || (i != x && j == y))
                    {
                        if(_divs[x][y].textContent == "" && _divs[x][y].textContent != this.textContent)
                        {
                            _divs[x][y].textContent = this.textContent;
                            this.textContent = "";
                            this.style.backgroundColor = "";  //assegnando "" a un css automaticamente riprende il valore statico (in questo caso si mette lightgrey a backgroundColor)
                            _divs[x][y].style.backgroundColor = "blue";
                            break;
                        }
                    }
                }
            }

            if(ordinato())
            {
                alert("Hai vinto!");

                for (let x = 0; x < DIM; x++) {
                    for (let y = 0; y < DIM; y++) {
                        _divs[x][y].removeEventListener("click", sposta); 
                    }
                }
            }
        }
    }

}

function ordinato(){
    if(_divs[3][3].textContent != "")
        return false;
    else
    {
        let n = 1;
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                if(parseInt(_divs[i][j].textContent) != n)
                    return false;
                
                n++;

                if(n == 16)
                    return true;
            }
        }
    }
}

function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a;
}