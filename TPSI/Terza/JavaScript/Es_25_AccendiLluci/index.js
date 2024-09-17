"use strict"

const GIALLO = "rgb(255, 255, 0)"
const GRIGIO = "rgb(160, 160, 160)"

let DIM = 0;
let mosse = 0;
	
window.onload=function(){

    let _lst = document.querySelector("select");
    let _wrapper = document.querySelector("#wrapper");
    let _lblMosse = document.querySelector("#ris");

    //_lst.innerHTML = "<option value='3'>3 x 3 </option> <option value='4'>4 x 4 </option> <option value='5'>5 x 5 </option> <option value='6'>6 x 6 </option>"

    for (let i = 0; i < 4; i++) {
        let _option = document.createElement("option");
        _option.textContent = `${i+3} x ${i+3}`;
        _option.valore = i + 3;
        _lst.appendChild(_option);
    }

    _lst.selectedIndex = -1;
    _lst.addEventListener("change", creareCampo);

    function creareCampo(){
        mosse = 0;
        _lblMosse.textContent = 0;

        let _divs = [];

        _wrapper.innerHTML = "";

        DIM = parseInt(this[this.selectedIndex].valore);

        _wrapper.style.width = (54 * DIM) + "px"; 

        for (let i = 0; i < DIM; i++) {
            let _divss = [];
            for (let j = 0; j < DIM; j++) {
                let _div = document.createElement("div");
                _div.classList.add("pedina");
                _div.id = `${i}-${j}`;
                _div.style.backgroundColor = GRIGIO;
                _div.acceso = false;
                _div.addEventListener("click", accendiSpegni);
                _divss.push(_div);
                _wrapper.appendChild(_div);
            }
            _divs.push(_divss);
        }

        function accendiSpegni(){
            mosse++;
            _lblMosse.textContent = mosse;

            let aus = this.id.split("-");
            let i = parseInt(aus[0]);
            let j = parseInt(aus[1]);

            if(this.acceso)
            {
                this.style.backgroundColor = GRIGIO;
                this.acceso = false;
            }
            else
            {
                this.style.backgroundColor = GIALLO;
                this.acceso = true;
            }

            for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, DIM - 1); x++) {
                for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, DIM - 1); y++) {
                    if((i == x && j != y) || (i != x && j == y))
                    {
                        if(_divs[x][y].acceso)
                        {
                            _divs[x][y].style.backgroundColor = GRIGIO;
                            _divs[x][y].acceso = false;
                        }
                        else
                        {
                            _divs[x][y].style.backgroundColor = GIALLO;
                            _divs[x][y].acceso = true;
                        }
                    }
                }
            }

            if(vittoria())
            {
                alert("Hai Vinto! (in " + mosse + " mosse)");
                for (let i = 0; i < DIM; i++) {
                    for (let j = 0; j < DIM; j++) {
                        _divs[i][j].removeEventListener("click", accendiSpegni);
                    }
                }
            }
        }

        function vittoria(){
            for (let i = 0; i < DIM; i++) {
                for (let j = 0; j < DIM; j++) {
                    if(!_divs[i][j].acceso)
                        return false;
                }
            }

            return true;
        }

    }
}

