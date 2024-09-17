'use strict'

const DIM = 10

window.onload = function (){
    let wrapper = document.querySelector("#wrapper");
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            
            let _btn = document.createElement("button") //creo un tag button 
            _btn.classList.add("btnStyle") //aggiunge la classe 
            _btn.id = `${i}-${j}` 
            _btn.innerHTML= "&nbsp"
            _btn.addEventListener("click", eseguiClick)
            wrapper.appendChild(_btn)  //lo appendo al DOM 
        }
    }
    function eseguiClick(event){ //function di primo livello, posso usare this. Anche event
        let _btn = event.target
        let aus = _btn.id.split('-')
        let i = aus[0]
        let j = aus[1]
        _btn.innerHTML = `${i},${j}` //li sposta, o metto vertical align
        _btn.style.backgroundColor = "green"
        _btn.disabled = true; 
    }
}