let db = localStorage.getItem('lista') == null ? [] :  JSON.parse(localStorage.getItem('lista'))
//se get itemn della chiave lista restituisce null, db conterrà un array vuoto, altrimenti un array di stringhe

let testo = document.querySelector('#testo')//il campo dove leggerò il testo di ciò che voglio aggiungere
let bottone = document.querySelector('#bottone')
let lista = document.querySelector('#lista')//area dove inserirò graficamente gli elementi


/**
 * QUESTA PRIMA PARTE SERVE A LEGGERE GLI ELEMENTI SALVATI IN PRECEDENZA
 * SE CI SONO ELEMENTI VERRANNO CREATI AL CARICAMENTO DELLA PAGINA
 * 
 * se item contiene 0 elementi il for of non verrà eseguito
 * altrimenti ciclerà ogni elemento salvato nel localstorage alla chiave 'lista'
 * e creerà un div contenente il valore ciclato
 */
for(let item of db){
   let div = document.createElement('div')//<div></div>
   div.innerHTML = item//item è il testo salvato in localstorage
   div.classList.add('alert', 'alert-success')

   lista.append(div);//scrivo i singoli item nell'html
}


/**
 * SONO GIà STATI LETTI E CREATI EVENTUALI ELEMENTI SALVATI, QUESTA PARTE SERVE PER AGGIUNGERNE DI NUOVI
 */

bottone.addEventListener('click',function(){

   let div = document.createElement('div')//<div></div>
   div.innerHTML = testo.value//è il valore scritto nel campo

   db.push(testo.value)
   localStorage.setItem('lista',JSON.stringify(db))

   div.classList.add('alert', 'alert-success')

   lista.append(div);//scrivi l'elemento nell'html

   testo.value = ''

})
