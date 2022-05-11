let bottone = document.querySelector('#salva')

bottone.addEventListener('click', function(e){
    e.preventDefault();//blocca l'invio del form
    //se il form viene ricaricato lo script sottostante si blocca

    //1. preparo le variabili dei campi con cui dovrò interagire
    let gusto = document.querySelector('#gusto')
    let tipo = document.querySelector('#tipo')
    let prezzo = document.querySelector('#prezzo')

    let mini = document.querySelector('#mini') 
    let normale = document.querySelector('#normale')
    let mezzoMetro = document.querySelector('#mezzo-metro')

    let disponibile = document.querySelector('#disponibile')

    
    //2. controllo e preparo i valori relativi ai campi checkbox
    let dimensioni = []//inizializzo l'array per le dimensioni

    /**
     * grazie alla proprietà checked comune a tutte le checkbox
     * controllo se le singole caselle sono state spuntate
     * in caso positivo inserisco il valore della casella nell'array dimensioni
     */
    if(mini.checked){//checked è booleano
        dimensioni.push(mini.value)//value è un attributo scritto a mano sul campo
        //se non è stato settato, il value è sempre "on"
    }
    if(normale.checked){
        dimensioni.push(normale.value)
    }
    if(mezzoMetro.checked){
        dimensioni.push(mezzoMetro.value)
    }

    //organizzo i dati prelevati(value) in un oggetto
    //sarebbe stato meglio creare una classe Pizza, e generare l'oggetto grazie ad una sua istanza
    let pizza = {
        gusto: gusto.value,
        tipo: tipo.value,
        prezzo: prezzo.value,
        dimensioni: dimensioni,
        disponibile: disponibile.checked
    }


    let pizzeSalvate = localStorage.getItem('pizze')//se non le trova restituisce null

    if(pizzeSalvate != null){//se trova le pizze
        var db = JSON.parse(pizzeSalvate)//trasforma la stringa in oggetto js, otterrò un array in questo caso
    }else{
        var db = [] 
    }
    
    db.push(pizza)

    let jsonPizze = JSON.stringify(db)

    localStorage.setItem('pizze',jsonPizze)


})
