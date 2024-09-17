'use strict'

window.onload = function () {
    let _wrapper = document.querySelector('#wrapper')

    let _matBtn = []
    let clicks = 0
    for (let i = 0; i < 5; i++) {
        let _matBtns = []
        for (let j = 0; j < 5; j++) {
            let _btn = document.createElement('button')
            _btn.bomba = false
            _btn.valore = 0
            _matBtns.push(_btn)
            _btn.addEventListener('click', clickCella)
            _wrapper.appendChild(_btn)
        }
        _matBtn.push(_matBtns)
    }

    let bombeTot= 5
    while (bombeTot > 0) {
        let posX = random(0, 5)
        let posY = random(0, 5)

        if (!_matBtn[posX][posY].bomba) {
            _matBtn[posX][posY].bomba = true
            bombeTot--
        }
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (!_matBtn[i][j].bomba) {
                let contBombe = 0
                for (let x = i - 1; x <= i + 1; x++) {
                    if (x >= 0 && x < 5) {
                        for (let y = j - 1; y <= j + 1; y++) {
                            if (y >= 0 && y < 5) {

                                if (_matBtn[x][y].bomba) {
                                    contBombe++
                                }
                            }
                        }
                    }
                }
                _matBtn[i][j].valore = contBombe
            }
        }
    }

    function clickCella() {
        let btn = this
        clicks++
    
        if (btn.bomba) {
            btn.style.backgroundImage = "url('bomba.png')"
            alert("HAI PERSO")
            fineGioco()
        }
        else {
            if (!btn.bomba)
                btn.textContent = btn.valore;
    
            btn.style.backgroundColour = 'white'
            btn.disabled = true;ù
    
            if (clicks == 20) {
                alert('HAI VINTO!')
                fineGioco()
            }
        }
    }

    function fineGioco(){
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if(_matBtn[i][j].bomba)
                    _matBtn[i][j].style.backgroundImage = "url('bomba.png')"

                _matBtn[i][j].removeEventListener('click', clickCella)
                _matBtn[i][j].disabled = true
            }
        }
    }
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
