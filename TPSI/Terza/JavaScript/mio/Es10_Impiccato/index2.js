'use strict'

const nomi =
	["Italia", "Lavagna", "Pizza", "Lasagne", "Spiedino", "Ananas", "Gnocchi", "Gorgonzola", "Broccoli", "Mango", "Biscotti",
		"Giornale", "Carabina", "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", "Ambulanza", "Ostetricia"];
const MAX_TENTATIVI = 5;
let parolaSegreta;
let _txtParola
let _txtLettera


window.onload = function () {
	let pos = random(0, nomi.length)
	parolaSegreta = nomi[pos].toUpperCase();
	console.log(parolaSegreta)
    _txtParola = document.getElementById('txtParola')
    _txtLettera = document.getElementById('txtLettera')
    _img =document.getElementsByTagName('img')
    for (let i = 0; i < parolaSegreta.length; i++) {
		_txtParola.value += '*';
	}
}

function converti(event) {
    event.target.value = event.target.value.toUpperCase();
}

function elabora(event){
    let str = ''
    let trovato = false
    let tentativi = 0
    for (let i = 0; i < parolaSegreta.length; i++) {
        let lettera = parolaSegreta[i]
        if (lettera == _txtLettera.valu )
        {
            str += lettera; //concateno lettera su stringa di appoggioo 
            trovato = true;
        }
        else 
        {
            str += _txtParola.value[i]
        }
    }
    _txtParola.value = str
    _txtLettera.value = ''
    _txtLettera.focus()

    if(!trovato) //se trovato = false
    {
        tentativi++
        _img.src = "img/fig"+ tentativi.png //mettere back tick e mettere tentativi globali 
    }
}

function random(a, b) {
	return Math.floor((b - a) * Math.random()) + a;
}