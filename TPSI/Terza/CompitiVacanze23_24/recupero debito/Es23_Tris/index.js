'use strict'

let aus = new Array(3)

window.onload = function () {
    let turno = 1
    let _table = document.getElementsByTagName("table")[0]
    let _txtRisultato = document.querySelector("#divRisultato")

    for (let i = 0; i < aus.length; i++) {
        aus[i] = new Array(3);
        aus[i][0] = 0
        aus[i][1] = 0
        aus[i][2] = 0
    }

    for (let i = 0; i < 3; i++) {
        let _tr = document.createElement('tr')
        _table.append(_tr)
        for (let j = 0; j < 3; j++) {
            let _td = document.createElement('td')
            _tr.append(_td)
            let _img = document.createElement('img')
            _img.classList.add('img')
            _img.id = `${i}-${j}`
            _img.addEventListener('click', gioca)
            _td.appendChild(_img)
        }
    }

    function gioca() {
        let coordinate = this.id.split('-')
        let i = coordinate[0]
        let j = coordinate[1]

        if (turno == 1) {
            this.src = 'img/croce.png'
            this.removeEventListener('click', gioca)
            aus[i][j] = turno
            turno = 2
        }
        else {
            this.src = 'img/cerchio.png'
            this.removeEventListener('click', gioca)
            aus[i][j] = turno
            turno = 1
        }

        let vittoria = controllaVincita()

        if (vittoria == 1) {
            _txtRisultato.innerHTML = 'Ha vinto la croce!'
            disabilitaImmagini()
        }
        else if (vittoria == 2) {
            _txtRisultato.innerHTML = 'Ha vinto il cerchio!'
            disabilitaImmagini()
        }
        else if (vittoria == -1) {
            _txtRisultato.innerHTML = 'Pareggio!'
            disabilitaImmagini()
        }
    }

    function disabilitaImmagini() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let _img = document.getElementById(i + '-' + j)
                _img.removeEventListener('click', gioca)
            }
        }

    }

    function controllaVincita() {
        if (aus[0][0] == aus[0][1] && aus[0][1] == aus[0][2] && aus[0][0] == 1)
            return 1
        else if (aus[0][0] == aus[0][1] && aus[0][1] == aus[0][2] && aus[0][0] == 2)
            return 2
        //----------------------------------------
        else if (aus[1][0] == aus[1][1] && aus[1][1] == aus[1][2] && aus[1][0] == 1)
            return 1
        else if (aus[1][0] == aus[1][1] && aus[1][1] == aus[1][2] && aus[1][0] == 2)
            return 2
        //----------------------------------------
        else if (aus[2][0] == aus[2][1] && aus[2][1] == aus[2][2] && aus[2][0] == 1)
            return 1
        else if (aus[2][0] == aus[2][1] && aus[2][1] == aus[2][2] && aus[2][0] == 2)
            return 2
        //----------------------------------------
        else if (aus[0][0] == aus[1][0] && aus[1][0] == aus[2][0] && aus[0][0] == 1)
            return 1
        else if (aus[0][0] == aus[1][0] && aus[1][0] == aus[2][0] && aus[0][0] == 2)
            return 2
        //----------------------------------------
        else if (aus[0][1] == aus[1][1] && aus[1][1] == aus[2][1] && aus[0][1] == 1)
            return 1
        else if (aus[0][1] == aus[1][1] && aus[1][1] == aus[2][1] && aus[0][1] == 2)
            return 2
        //----------------------------------------
        else if (aus[0][2] == aus[1][2] && aus[1][2] == aus[2][2] && aus[0][2] == 1)
            return 1
        else if (aus[0][2] == aus[1][2] && aus[1][2] == aus[2][2] && aus[0][2] == 2)
            return 2
        //----------------------------------------
        else if (aus[0][0] == aus[1][1] && aus[1][1] == aus[2][2] && aus[0][0] == 1)
            return 1
        else if (aus[0][0] == aus[1][1] && aus[1][1] == aus[2][2] && aus[0][0] == 2)
            return 2
        //----------------------------------------
        else if (aus[0][2] == aus[1][1] && aus[1][1] == aus[2][0] && aus[0][2] == 1)
            return 1
        else if (aus[0][2] == aus[1][1] && aus[1][1] == aus[2][0] && aus[0][2] == 2)
            return 2
        else {
            if (!aus[0].includes(0) && !aus[1].includes(0) && !aus[2].includes(0))
                return -1;
            else
                return 0;
        }
    }
}