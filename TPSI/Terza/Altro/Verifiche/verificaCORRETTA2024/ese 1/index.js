"use strict"

const nDOMANDE = 5;
const risposteCorrette = ['d', 'b', 'a', 'c', 'a'];
let punti = 0
let _input

function calcolaPunteggio() {
    _input = document.getElementsByTagName('input')

    //controllo risposta a tutte le domande
    for (const _input of _inputs)
        if (_input.checked)
            cont++;
    if (cont < nDOMANDE)
        alert('Devi ripondere a tutte le domande');
    else 
    {
        //controllo risposte 
        for (let i = 1; i < nDOMANDE; i++) 
        {
            const _elements = document.getElementsByName('q' + [i])
            for (let j = 0; j < _elements.length; j++) 
            {
                if (_elements[i].checked) 
                {
                    let risp = _elements[j].value
                    if (risp == risposteCorrette[i - 1])
                        punti += 2
                    else 
                        _elements[j].checked = false
                }
            }
            alert('i punti fatti sono '+ punti)
        }
    }
    let _ris = document.getElementById('ris').innerHTML = "Il tuo voto è: " + punti;
    _ris.style.display = "inline-block"
}