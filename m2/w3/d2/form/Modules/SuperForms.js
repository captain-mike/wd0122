export default class SuperForms{

    //questo metodo controlla se l'utente ha impostato un attributo per il campo, dopodichè aggiungi l'attributo e setta il valore scelto
    /*static setIfAttributeExists(input, obj, attr){
        //obj['name']
        if(obj[attr] != undefined){
            input[attr] = obj[attr];
        }
    }*/
    
    static createHTMLInputElement(oggetto, required = false){
        let input = document.createElement('input')
        
        //this.setIfAttributeExists(input, obj, 'type')

        if(oggetto.name != undefined){
            input.name = oggetto.name;
        }
        if(oggetto.placeholder != undefined){
            input.placeholder = oggetto.placeholder;
        }
        if(oggetto.id != undefined){
            input.id = oggetto.id;
        }

        if(oggetto.classes != undefined){
            input.classList.add(oggetto.classes)
        }

        if(required){
            input.required = true
        }

        return input
    }

}