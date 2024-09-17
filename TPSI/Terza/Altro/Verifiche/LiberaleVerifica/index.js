    "use strict";

const COLORE_SFONDO = "rgb(220, 220, 220)";
const COLORE_TESTO = "rgb(100, 100, 100)";

// let vet1 = [7, 12, 2,  3, 9, 14,  5, 6, 11]
// let vet2 = [2, 13, 5, 16, 6,  1, 10, 9,  4]
let vet1 = [];
let vet2 = [];

window.onload = function () {
    let _select = document.querySelector('select');
    let _wrapper = document.getElementById('wrapper');
    let n = document.getElementById('n');
    let ris = document.getElementById('ris');
    let totale = document.getElementById('totale');

    for (let i = 4; i <= 9; i++) {
        let _opt = document.createElement("option");
        _opt.value = i + 'x' + i;
        _opt.innerHTML = i + " x " + i;
        _select.appendChild(_opt);
        _select.selectedIndex = -1;
    }

    _select.addEventListener('change', function () {
        let aus = this.value.split("x");
        let DIM = parseInt(aus[0]);
        costruisciVettori(DIM);
        console.log(vet1, vet2)
        riempiMatrice(DIM, DIM);
        n.textContent = DIM.toString();
        let risultato = 15 * parseInt(DIM);
        ris.innerHTML = risultato.toString();
        totale.textContent = "0";
    });

    function riempiMatrice(righe, colonne) {
        _wrapper.innerHTML = '';
        for (let i = 0; i < righe; i++) {
            for (let j = 0; j < colonne; j++) {
                let _div = document.createElement("div");
                _div.classList.add("pedina")
                _div.id = `${i}-${j}`;
                let indice = i * colonne + j; 
                let v1 = parseInt(vet1[indice]); 
                let v2 = parseInt(vet2[indice]); 
                let contenuto = v1 + v2;
                _div.textContent = contenuto.toString();
                _div.style.backgroundColor = COLORE_SFONDO;
                _div.style.color = COLORE_TESTO;
                _div.style.textAlign = "center";
                _div.style.height = _wrapper.height / righe + "px"; 
                _div.style.width = _wrapper.width / colonne + "px"; 
                _div.addEventListener("click", function () {
                    elabora(this, righe, colonne);
                });
                _wrapper.appendChild(_div);
            }
        }
    }

    function elabora(elemento, righe, colonne) {
        let id = elemento.id.split("-");
        let r = parseInt(id[0]);
        let c = parseInt(id[1]);
        let valore = parseInt(elemento.innerHTML);

         for (let i = 0; i < righe; i++) {
            let cellaRiga = document.getElementById(`${i}-${c}`);
            let cellaColonna = document.getElementById(`${r}-${i}`);
            cellaRiga.style.backgroundColor = "blue";
            cellaRiga.style.color = "white";
            cellaRiga.removeEventListener("click", elabora);
            cellaColonna.style.backgroundColor = "blue";
            cellaColonna.style.color = "white";
            cellaColonna.removeEventListener("click", elabora);
        }
        
        let somma = parseInt(totale.textContent) + valore;
        totale.textContent = somma;
        
        elemento.removeEventListener("click", elabora);
    }


   function costruisciVettori(DIM) {
        vet1 = [];
        vet2 = [];
        let somma_totale = 15 * DIM;
        let numeri_totali = DIM * 2;
        let numeri_disponibili = [];
        let somma_attuale = 0;
    
        for (let i = 1; i <= numeri_totali; i++) {
            numeri_disponibili.push(i);
        }
    
        for (let i = 0; i < DIM; i++) {
            let numero = 0;
            do {
                let indice = generaNumero(0, numeri_disponibili.length)
                numero = numeri_disponibili[indice];
                somma_attuale += numero;
            } while (somma_attuale > somma_totale);
    
            vet1.push(numero);
            let index = numeri_disponibili.indexOf(numero);
            numeri_disponibili.splice(index, 1);
        }
    
       for (let i = 0; i < DIM; i++) {
            let numero = 0;
            do {
                let indice = generaNumero(0, numeri_disponibili.length);
                numero = numeri_disponibili[indice];
                somma_attuale += numero;
            } while (somma_attuale > somma_totale);
    
            vet2.push(numero);
            let index = numeri_disponibili.indexOf(numero);
            numeri_disponibili.splice(index, 1);
        }
    }
    
}

function generaNumero(a, b){
	return Math.floor((b-a)*Math.random()) + a;
}
  