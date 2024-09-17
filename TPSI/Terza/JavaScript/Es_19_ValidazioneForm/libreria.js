
function generaNumero(a, b){
	return Math.floor((b-a)*Math.random()) + a;
}

function isDigit(s){
    for(i=0; i<s.length; i++){
	   if(!(s[i]>="0" &&  s[i]<="9"))
		   return false
    }

	if(s.length == 12)
		return true;
	else
		return false;   
}

function isLetter(s){
    for(i=0; i<s.length; i++){
	   if(!((s[i]>="a" &&  s[i]<="z") || (s[i]>="A" &&  s[i]<="Z")))
		   return false
    }

	if(s.length >= 4)
		return true;
	else
		return false;      
}

