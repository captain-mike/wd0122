fetch("json/menu.json")
.then(res => {
    console.log(res);

    if(res.ok)
    console.log('caricamento completato');
    return res.json()//trasforma la risposta restituendomi il contenuto della pagina in formato json
    //attenzione: json() si usa solo se il tipo di dato richiesto è json
    //per gli altri si usa text()
    //questo metodo restituisce una promise

}).then(pizze => {

    console.log(pizze)//res è un array
    console.log(pizze[0])//res[0] è un oggetto


    pizze.forEach(pizza => {
        document.write(pizza.gusto + '<br>')

        pizza.dimensioni.forEach(d => {
            document.write(d + ', ')
        })
        
        document.write('<hr>')
    })

})

/**
 * 
 * versione che di solito si usa
fetch("json/menu.json")
.then(res => res.json())
.then(pizze => {
    //fa qualcosa
})
 * 
 */