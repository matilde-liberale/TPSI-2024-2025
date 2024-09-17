'use strict'

let password = ""
let vet = []
let _lst
let _span1
let _span2

window.onload = function () {
    _lst = document.getElementById('select')
    _span1 = this.document.getElementsByTagName('span')[0]
    _span2 = this.document.getElementsByTagName('span')[1]
    _lst.options.length = 12
    for (let i = 0; i < 12; i++) {
        vet = []
        for (let i = 0; i < 8; i++) {
            let n 
            do 
                n = random(65, 123)
            while (vet.includes(n))
            vet.push(n)
            password += String.fromCharCode(vet[i])
        }
        password += " "
	} 
	console.log(password)
}

function seleziona(){
    let aus = []
    for (let i = 0; i < 12; i++) {
        aus[i] = password.split(" ")
    }
    for (let i = 0; i < 12; i++) {
        _lst.options[i].innerHTML += "<option value='pwd'>" + aus[i] + "</option";
    }
    
    if(_lst.options.selectedIndex != -1)
    {
        _span1.style.display = "block"; 
        _span2.value += _lst.innerHTML
        _span2.style.display = "block"; 
    }
}

function random(min, max) {
    return Math.floor((max - min) * Math.random()) + min;
}