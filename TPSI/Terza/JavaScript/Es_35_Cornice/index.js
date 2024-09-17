const DIM = 10;
let livello = 0;

window.onload= function(){
	let _wrapper = document.getElementById("wrapper");
    let _divs = [];
	
	for (let i = 0; i < DIM; i++) {
        let _divss = [];
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement("div");
            _div.id = `${i}-${j}`;
            _div.classList.add("cella");        
            _wrapper.appendChild(_div);    
            _divss.push(_div);
        }
        _divs.push(_divss);
    }

    let timerID = setInterval(coloraCornice, 250);
    let min = 0;
    let max = DIM - 1;

    function coloraCornice(){
        reset();

        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let x = _divs[i][j].id.split('-')[0];
                let y = _divs[i][j].id.split('-')[1];

                if((x == min && y >= min && y <= max) || 
                    (x == max && y >= min && y <= max) || 
                    (y == min  && x >= min && x <= max) || 
                    (y == max  && x >= min && x <= max))
                    _divs[i][j].style.backgroundColor = "red";
            }   
        }

        min++;
        max--;

        if(max < min)
        {
            min = 0;
            max = DIM - 1;
        }
    }

    function reset(){
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) { 
                _divs[i][j].style.backgroundColor = "";
            }
        }
    }
}	



function generaNumero(a, b){
    let rnd = Math.floor((a - b) * Math.random()) + b;   
    return rnd;
}