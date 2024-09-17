"use strict"

const DIM = 10;

onload = function () {
    let _wrapper = document.querySelector("#wrapper");
    
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _btn = document.createElement("button");
            _btn.classList.add("btnStyle");
            _btn.id = `${i}-${j}`; 
            _btn.addEventListener("click", eseguiClick);
            _btn.innerHTML = "&nbsp;";
            _wrapper.appendChild(_btn);
        }
    }

    function eseguiClick(event){
        let _btn = event.target;
        let aus = _btn.id.split("-"); //aus sarà un vettore
        let i = aus[0];
        let j = aus[1];
        _btn.innerHTML = i + " " + j;
        _btn.style.backgroundColor = "red";
    }
}