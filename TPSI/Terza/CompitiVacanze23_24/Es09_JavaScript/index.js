const DIM = 10;
let livello = 0;

window.onload = function () {
    let _wrapper = document.getElementById("wrapper");

    let _matDiv = []

    for (let i = 0; i < DIM; i++) {
        let matDivs = []
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement('div')
            _div.id = i + '-' + j
            _div.classList.add('cella')
            _wrapper.appendChild(_div)
            matDivs.push(_div)
        }
        _matDiv.push(matDivs)
    }

    let timerID = setInterval(coloraCornice, 250)
    let max = DIM - 1
    let min = 0

    function coloraCornice() {
        resetColore()

        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let coordinate = _matDiv[i][j].id.split('-')
                let x = parseInt(coordinate[0])
                let y = parseInt(coordinate[1])

                if ((x == min && y >= min && y <= max) ||
                    (x == max && y >= min && y <= max) ||
                    (y == min && x >= min && x <= max) ||
                    (y == max && x >= min && x <= max))
                    _matDiv[i][j].style.backgroundColor = 'red'
            }
        }

        min++
        max--

        if (min > max) {
            max = DIM - 1
            min = 0
        }
    }

    function resetColore() {
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                _matDiv[i][j].style.backgroundColor = ''
            }
        }
    }
}



function generaNumero(min, max) {
    let rnd = Math.floor((max - min) * Math.random()) + min;
    return rnd;
}