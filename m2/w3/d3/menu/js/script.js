fetch("json/menu.json")
.then(res => {
    console.log(res);

    if(res.ok)
    console.log('caricamento completato');
    return res.json()//trasforma la risposta restituendomi il contenuto della pagina in formato json
    //attenzione: json() si usa solo se il tipo di dato richiesto è json
    //per gli altri si usa text()
    //questo metodo restituisce una promise

}).then(res => {

    console.log(res)//res è un array
    console.log(res[0])//res[0] è un oggetto

})