let mese:number = 13;

if(mese == 1){
    console.log('Gennaio'); 
}else if(mese == 2){
    console.log('Febbraio');
}else if(mese == 3){
    console.log('Marzo');
}else if(mese == 4){
    console.log('Aprile');
}else{
    console.log('non esiste il mese numero ' + mese);
    
}

switch(mese){
    case 1:
        console.log('Gennaio'); 
        break;
    case 2: 
        console.log('Febbraio');
        break;
    case 3: 
        console.log('Marzo');
        break;
    case 4:
        console.log('Aprile');
        break;
    default:
        console.log('non esiste il mese numero ' + mese);
}
