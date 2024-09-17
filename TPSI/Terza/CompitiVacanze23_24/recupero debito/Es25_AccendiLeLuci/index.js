"use strict"

const GIALLO = "rgb(255, 255, 0)"
const GRIGIO = "rgb(160, 160, 160)"

let mosse
let dimCampo

window.onload = function () {
    let _lst = document.querySelector('select')
    let _wrapper = document.querySelector('#wrapper')
    let _lblMosse = document.querySelector('#ris')

    for (let i = 0; i < 4; i++) {
        let _opt = document.createElement('option')
        _opt.textContent = (i + 3) + 'X' + (i + 3)
        _opt.valore = i + 3
        _lst.appendChild(_opt)
    }

    _lst.selectedIndex = -1
    _lst.addEventListener('change', creaCampo)
    let matDiv = []

    function creaCampo() {
        mosse = 0
        dimCampo = parseInt(this[this.selectedIndex].valore)
        // console.log(dimCampo)
        _wrapper.innerHTML = ''
        _wrapper.style.width = (54 * dimCampo) + "px";
     
        for (let i = 0; i < dimCampo; i++) {
            let matDivs = []
            for (let j = 0; j < dimCampo; j++) {
                let _div = document.createElement('div')
                _div.id = i + '-' + j
                _div.classList.add('pedina')
                _div.acceso = false
                _div.style.backgroundColor = GRIGIO
                _div.addEventListener('click', accendiCaselle)
                matDivs.push(_div)
                _wrapper.appendChild(_div)
            }
            matDiv.push(matDivs)
        }
    }

    function accendiCaselle() {
        let coordinate = this.id.split('-')
        let i = coordinate[0]
        let j = coordinate[1]

        mosse++
        _lblMosse.textContent = mosse


        if (this.acceso) {
            this.style.backgroundColor = GRIGIO
            this.acceso = false
        }
        else {
            this.style.backgroundColor = GIALLO
            this.acceso = true
        }

        for (let x = i - 1; x <= i + 1; x++) {
            if (x < 0 || x >= dimCampo) {
                for (let y = j - 1; y <= j + 1; y++) {
                    if (y < 0 || y >= dimCampo) {
                        if (x === i && y !== j) {
                            const div = matDiv[x][y]
                            if (div.acceso) {
                                div.style.backgroundColor = GRIGIO
                                div.acceso = false
                            } else {
                                div.style.backgroundColor = GIALLO
                                div.acceso = true
                            }
                        }
                        else if (x !== i && y === j) { 
                            const div = matDiv[x][y]
                            if (div.acceso) {
                                div.style.backgroundColor = GRIGIO
                                div.acceso = false
                            } else {
                                div.style.backgroundColor = GIALLO
                                div.acceso = true
                            }
                        }
                    }
                }
            }
        }

        if (vittoria()) {
            alert('Hai vinto in ' + mosse + ' mosse ')
            for (let i = 0; i < dimCampo; i++) {
                for (let j = 0; j < dimCampo; j++) {
                    matDiv[i][j].removeEventListener("click", accendiCaselle);
                }
            }
        }
    }

    function vittoria(){
        for (let i = 0; i < dimCampo; i++) {
            for (let j = 0; j < dimCampo; j++) {
                if(!matDiv[i][j].acceso)
                    return false
            }
        }
        return true
    }
}


