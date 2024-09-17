'use strict'

//DEVO METTERE FUORI DALL'ONLOAD LE FUNZIONI RICHIAMATE IN HTML 

let mat = new Array(3);

window.onload = function () {
    let turno = 1;
    let _table = document.getElementsByTagName("table")[0];
    let _ris = document.querySelector("#divRisultato");

    for (let i = 0; i < mat.length; i++) {
        mat[i] = new Array(3);
        mat[i][0] = 0;
        mat[i][1] = 0;
        mat[i][2] = 0;
    }

    for (let i = 0; i < 3; i++) {
        let _tr = document.createElement("tr");
        _table.append(_tr);
        for (let j = 0; j < 3; j++) {
            let _td = document.createElement("td");
            _tr.append(_td);
            let _img = document.createElement("img");
            _img.id = i + '-' + j;
            _img.src = "img/vuota.png";
            _img.addEventListener("click", cliccatoCella);
            _td.append(_img);
        }
    }

    function cliccatoCella() {
        let coord = this.id.split("-");
        let i = coord[0];
        let j = coord[1];

        if (turno == 1) {
            this.src = "img/croce.png";
            mat[i][j] = turno;
            turno = 2;
        }
        else {
            this.src = "img/cerchio.png";
            mat[i][j] = turno;
            turno = 1;
        }

        let vittoria = controlloVittoria();

        if (vittoria == 1) {
            _ris.textContent = "Ha vinto il giocatore 1";
            rimuoviEventiClick();
        }
        else if (vittoria == 2) {
            _ris.textContent = "Ha vinto il giocatore 2";
            rimuoviEventiClick();
        }
        else if (vittoria == -1) {
            _ris.textContent = "Pareggio";
            rimuoviEventiClick();
        }

        this.removeEventListener("click", cliccatoCella);
    }

    function rimuoviEventiClick() {
        let _immagini = document.getElementsByTagName("img");
        for (let i = 0; i < _immagini.length; i++) {
            _immagini[i].removeEventListener("click", cliccatoCella);
        }
    }
}

function controlloVittoria() {
    if (mat[0][0] == mat[0][1] && mat[0][1] == mat[0][2] && mat[0][0] == 1)
        return 1;
    else if (mat[0][0] == mat[0][1] && mat[0][1] == mat[0][2] && mat[0][0] == 2)
        return 2;
    //----------------------------------------
    else if (mat[1][0] == mat[1][1] && mat[1][1] == mat[1][2] && mat[1][0] == 1)
        return 1;
    else if (mat[1][0] == mat[1][1] && mat[1][1] == mat[1][2] && mat[1][0] == 2)
        return 2;
    //----------------------------------------
    else if (mat[2][0] == mat[2][1] && mat[2][1] == mat[2][2] && mat[2][0] == 1)
        return 1;
    else if (mat[2][0] == mat[2][1] && mat[2][1] == mat[2][2] && mat[2][0] == 2)
        return 2;
    //----------------------------------------
    else if (mat[0][0] == mat[1][0] && mat[1][0] == mat[2][0] && mat[0][0] == 1)
        return 1;
    else if (mat[0][0] == mat[1][0] && mat[1][0] == mat[2][0] && mat[0][0] == 2)
        return 2;
    //----------------------------------------
    else if (mat[0][1] == mat[1][1] && mat[1][1] == mat[2][1] && mat[0][1] == 1)
        return 1;
    else if (mat[0][1] == mat[1][1] && mat[1][1] == mat[2][1] && mat[0][1] == 2)
        return 2;
    //----------------------------------------
    else if (mat[0][2] == mat[1][2] && mat[1][2] == mat[2][2] && mat[0][2] == 1)
        return 1;
    else if (mat[0][2] == mat[1][2] && mat[1][2] == mat[2][2] && mat[0][2] == 2)
        return 2;
    //----------------------------------------
    else if (mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2] && mat[0][0] == 1)
        return 1;
    else if (mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2] && mat[0][0] == 2)
        return 2;
    //----------------------------------------
    else if (mat[0][2] == mat[1][1] && mat[1][1] == mat[2][0] && mat[0][2] == 1)
        return 1;
    else if (mat[0][2] == mat[1][1] && mat[1][1] == mat[2][0] && mat[0][2] == 2)
        return 2;
    else {
        if (!mat[0].includes(0) && !mat[1].includes(0) && !mat[2].includes(0))
            return -1;
        else
            return 0;
    }
}

/*function controlloVittoria() {
    //creo id da javascript e poi lo leggo per controllo

    //orizzontale
    for (let i = 0; i < DIM; i++) {
        let img1 = document.getElementById(i + "-0")
        let img2 = document.getElementById(i + "-1")
        let img3 = document.getElementById(i + "-2")

        if (img1.src == img2.src && img2 == img3)
            return true;
    }

    //verticale
    for (let i = 0; i < DIM; i++) {
        let img1 = document.getElementById("0-" + i)
        let img2 = document.getElementById("1-" + i)
        let img3 = document.getElementById("2-" + i)

        if (img1.src == img2.src && img2 == img3)
            return true;
    }

    //controllo diagonale dx-sx
    if (document.getElementById("0-0").src == document.getElementById("1-1") &&
        document.getElementById("1-1").src == document.getElementById("2-2"))
        return true;

    //diagonale opposta sx-dx
    if (document.getElementById("0-2").src == document.getElementById("1-1") &&
        document.getElementById("1-1").src == document.getElementById("2-0"))
        return true;
}*/