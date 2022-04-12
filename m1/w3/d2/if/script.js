

let eta = prompt('Quanti anni hai?') || 18;

if(eta >= 18 && eta <= 120){
    document.write('sei maggiorenne<br>')
}else if(eta > 120){
    document.write('sei antico<br>')
}else{
    location.href = 'https://it.peppapig.com/'
}


console.log(eta >= 18)

let condizione = true;
if(!condizione){
    document.write('è vera')
}

