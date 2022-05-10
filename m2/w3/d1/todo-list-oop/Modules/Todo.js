export default class Todo{

    constructor(_target){
       this.target = document.querySelector(_target)
       this.testo
       this.bottone
       this.lista
       this.creaHTMLBase()
 
       this.bottone.addEventListener('click',() => {
          this.creaHTMLElementoLista()
       })
    }
 
    creaHTMLBase(){
       let input = document.createElement('input')
       input.type = 'text'
       input.classList.add('form-control')
       input.placeholder = 'Scrivi qualcosa'
 
       this.testo = input
 
 
       let button = document.createElement('button')
       button.innerHTML = 'Inserisci'
       button.classList.add('btn','btn-primary')
 
       this.bottone = button
 
       let areaTarget = document.createElement('div')
       this.lista = areaTarget
 
       this.target.append(input, button, areaTarget)
    }
 
    creaHTMLElementoLista(){
       let div  = document.createElement('div')
       div.innerHTML = this.testo.value
       div.classList.add('alert','alert-success')
       
       let deleteButton = this.eliminaHTMLElementoLista(div)

 
       div.append(deleteButton)
       this.lista.append(div)
       this.testo.value = ''
    }
 
    eliminaHTMLElementoLista(genitore){
       let close = document.createElement('button')
       close.innerHTML = 'Fatto'
 
       close.addEventListener('click',function(){
          genitore.remove()
       })
 
       return close;
    }
 
 }