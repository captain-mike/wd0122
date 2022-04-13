function aggiungiNumero(bottone){

    let numero = bottone.innerHTML;//è una stringa

    let display = document.querySelector('#display');//seleziono l'elemento con cui andrò ad interagire

    //display.innerHTML = numero//innerHtml e innerText non funzionano per i campi dei form

    display.value += numero//mi aggancio all'elemento contenuto nella variabile display, per modificarne l'attributo value, provocando l'apparizione dei numeri
}

function risultato(){
    let display = document.querySelector('#display');
    
    let totale = eval(display.value)

    display.value = totale
}