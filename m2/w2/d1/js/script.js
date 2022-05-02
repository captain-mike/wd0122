
let next = document.querySelector('#next')

next.addEventListener('click',function(){
    history.forward()
})

let prev = document.querySelector('#prev')
prev.addEventListener('click',function(){
    history.back()
})


//posso aggiungere manualmente uno step di navigazione

let card1 = document.querySelector('#card1')
card1.addEventListener('click',function(){
    history.pushState({},'','index.html#card1')
})


function scriviCookie() {
    var now = new Date();//Date crea un oggetto data contenente data ed ora attuali
    //now.getMonth()//il mese attuale
    now.setMonth(  now.getMonth() + 1 );//Alla data attuale aggiungo un mese
     
    var scadenza = "expires=" + now.toUTCString();//converto la data nel formato utc, richiesto per il corretto funzionamento del cookie. esempio: Wed, 14 Jun 2017 07:00:00 GMT

    document.cookie = "mostra_popup=no;" + scadenza + ";";
     //"mostra_popup=no; expires=Wed, 14 Jun 2050 07:00:00 GMT;'
 }


 scriviCookie()
