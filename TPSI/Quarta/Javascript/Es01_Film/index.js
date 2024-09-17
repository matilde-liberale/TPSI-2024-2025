"use strict"

const films = [
    // Id, Title, Favorite, Watch date, Rating(0-5)
    [1, "Pulp Fiction", true, "10-03-2024", 5],
    [2, "21 Grammi", true, "17-03-2024", 3],
    [3, "Star Wars", false, "15-03-2024", 1],
    [4, "Matrix", false, "01-01-2023", 4],
    [5, "Shrek", false, "21-03-2024", 2],
    [6, "Kill Bill Vol. 1", true, "22-04-2024", 5],
    [7, "Inception", true, "18-04-2024", 5]
];


//window.addEventListener("load", function () {
window.onload = function () {
    const _tbody = document.querySelector('tbody')
    const _btnAdd = document.getElementById('btn-add')
    const _btnClear = document.getElementById('btn-clear')
    const _btnReload = document.getElementById('btn-reload')
    const _btnCount = document.getElementById('btn-count')
    const _btnLogin = document.getElementById('btn-login')

    _btnAdd.addEventListener('click', addNewFilm)
    visualizza()

    function visualizza() {
        _tbody.innerHTML = ''
        for (let i = 0; i < films.length; i++) {
            const riga = document.createElement('tr')
            _tbody.appendChild(riga)

            for (let j = 0; j < films[i].length; j++) {
                const td = document.createElement('td')

                if (j == 2) {
                    let chk = document.createElement('input')
                    chk.type = 'checkbox'
                    chk.checked = films[i][j]
                    chk.disabled = true
                    td.appendChild(chk)
                }
                else if (j == 4) {
                    for (let k = 0; k < 5; k++) {
                        const icon = document.createElement('i')
                        icon.classList.add('bi')
                        if (k < films[i][j])
                            icon.classList.add('bi-star-fill')
                        else
                            icon.classList.add('bi-star')
                        td.appendChild(icon)
                    }
                }
                else
                    td.textContent = films[i][j]

                riga.appendChild(td)
            }
        }
    }

    function addNewFilm() {
        let id = films.length + 1
        let title = prompt('Inserisci il nome del film')
        let favourite
        let n = random(0, 2)
        console.log(n)
        if (n == 0)
            favourite = true
        else
            favourite = false

        let date = new Date() //restituisce un oggetto date contenente la data corrente
        //dopo bisogna trovare un metodo che restituisca il formato di cui abbiamo bisogno 
        date = date.toLocaleDateString() //a partire dall'oggetto 'Date' restituisce data con formato gg/mm/aa

        let rating = random(1, 6)
        console.log(rating)

        let vet = []
        vet.push(id); vet.push(title); vet.push(favourite); vet.push(date); vet.push(rating)
        films.push(vet)

        visualizza()
    }

}

function random(min, max) {
    return Math.floor((max - min) * Math.random() + min)
}