import { id } from "./interface"

class gatos{
    readonly idGato ?: id
    name: string 
    color : string
    pesoGato: number
    #gordo : boolean                 

    constructor(name : string, color : string, pesoGato:number, gordo: boolean) {
        this.idGato = crypto.randomUUID()
        this.name = name
        this.color = color
        this.pesoGato = pesoGato
        this.#gordo = gordo
    }

    get fullPeso(){
        return `tu gato pesa ${this.pesoGato}`
    }
    set peso(newPeso:number){
        this.pesoGato = newPeso
    
        if(this.pesoGato >= 8)
            this.#gordo = true
    else {
        this.#gordo= false
    }
        
    }
}
