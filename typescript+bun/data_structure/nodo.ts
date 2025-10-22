import {nodo} from "./interfaces/nodo"

class nodo_class<T> implements nodo<T> {
    data: T;
    next: nodo_class<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = null;
}
    set_next_node(next_node : nodo_class<T>|null){
        if (next_node instanceof nodo_class || next_node === null) 
            this.next=next_node;
        
    }
}

const book1: nodo_class<string> = new nodo_class<string>('Nombre1');
const book: nodo_class<string>= new nodo_class<string>("nombre2");

book.set_next_node(book1)