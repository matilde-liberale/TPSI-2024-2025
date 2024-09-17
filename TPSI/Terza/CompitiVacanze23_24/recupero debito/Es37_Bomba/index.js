'use strict'

window.onload = function () {
    let _wrapper = document.querySelector('#wrapper')

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let _btn = document.createElement('button')
            _btn.id = i + '-' + j
            _btn.classList.add('cella')
            _btn.addEventListener('click', coloraCella)
            _wrapper.appendChild(_btn)
        }
    }

    let x = random(0, 10)
    let y = random(0, 10)
    let bomba = document.getElementById(x + '-' + y)
    bomba.style.backgroundImage = "url('bomba.png')"

    let Timer = setInterval(spostamento, 150)
    let fermo = 0
    function spostamento() {
        let direzione = random(1, 5)

        switch (direzione) {
            case 1: //alto
                if (document.getElementById((x - 1) + '-' + y) && document.getElementById((x - 1) + '-' + y).style.backgroundColor != 'blue') {
                    spostaBomba(x - 1, y)
                    fermo = 0
                }
                else {
                    fermo++
                    if (fermo >= 15) {
                        alert('Hai vinto!')
                        TerminaGioco()
                    }
                }
                break
            case 2: //basso
                if (document.getElementById((x + 1) + '-' + y) && document.getElementById((x + 1) + '-' + y).style.backgroundColor != 'blue') {
                    spostaBomba(x + 1, y)
                    fermo = 0
                }
                else {
                    fermo++
                    if (fermo >= 15) {
                        alert('Hai vinto!')
                        TerminaGioco()
                    }
                }
                break
            case 3: //dx
                if (document.getElementById(x + '-' + (y + 1)) && document.getElementById(x + '-' + (y + 1)).style.backgroundColor != 'blue') {
                    spostaBomba(x, y + 1)
                    fermo = 0
                }
                else {
                    fermo++
                    if (fermo >= 15) {
                        alert('Hai vinto!')
                        TerminaGioco()
                    }
                }
                break
            case 4: //sx
                if (document.getElementById(x + '-' + (y - 1)) && document.getElementById(x + '-' + (y - 1)).style.backgroundColor != 'blue') {
                    spostaBomba(x, y - 1)
                    fermo = 0
                }
                else {
                    fermo++
                    if (fermo >= 15) {
                        alert('Hai vinto!')
                        TerminaGioco()
                    }
                }
                break
        }
    }

    function spostaBomba(nextX, nextY) {
        bomba.style.backgroundImage = ''
        x = nextX
        y = nextY
        bomba = document.getElementById(x + '-' + y)
        bomba.style.backgroundImage = "url('bomba.png')"
    }

    function coloraCella() {
        if (this == bomba) {
            alert('HAI PERSO!')
            TerminaGioco()
        }
        else {
            if (this.style.backgroundColor == 'blue')
                this.style.backgroundColor = ''
            else
                this.style.backgroundColor = 'blue'
        }
    }

    function TerminaGioco(){
        clearInterval(Timer)

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
               let _btn = document.getElementById(i + '-' + j)
               _btn.removeEventListener('click', coloraCella)
            }
            
        }
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}