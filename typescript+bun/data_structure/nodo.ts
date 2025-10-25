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
    get_next_nodo(){
        return this.next
    }
    get_data(){
        return this.data
    }
}

const book1: nodo_class<string> = new nodo_class<string>('nombre1');
const book: nodo_class<string>= new nodo_class<string>("nombre2");
const book2: nodo_class<string>= new nodo_class<string>("nombre3");

book.set_next_node(book1)
book1.set_next_node(book2)

let current_node : nodo_class<string> | null = book

while(current_node){
    console.log(current_node.get_data())
    current_node = current_node.get_next_nodo()
}