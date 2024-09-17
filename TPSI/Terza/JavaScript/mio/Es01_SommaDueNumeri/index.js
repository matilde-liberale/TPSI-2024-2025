'use strict'

function somma() {
    alert('ok') //messaggio a schermo
    console.log('Programma avviato') //serve per quando debuggare il proramma, le alert danno fastidio
    let _txt1 = document.getElementById("txtN1") //_ per identificare puntatore, txt1 nome variabile
    let _txt2 = document.getElementById('txtN2')
    console.log(_txt1)
    console.log(_txt2)

    let _txtRis = document.getElementById("txtRis")
    let _divRis = document.getElementById("divRis")
    //prende e restituisce il vettore che ha i puntatori a tutti i robi che hanno quell'id in ordine di come compaiono nella pagina

    let n1 = parseInt(_txt1.value)
    let n2 = parseInt(_txt2.value)

    console.log(n1)
    console.log(n2) //mostra a video

    let ris = n1 + n2

    _txtRis.value = ris
    _divRis.innerHTML = '<b>' + ris + '</b>'
    // innerHTML accetta anche tag al suo interno ; b è tag html che fa bold. 
    //Textcontent non li sente infatti se lo metto non mi mette bold e me lo scrive come se fosse testo 

    alert(ris)
}