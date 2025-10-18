import {nodo} from "./interfaces/nodo"

class nodo_class<T> implements nodo<T> {
    data: T;
    next: nodo_class<T> | null;
    constructor(data: T, next: nodo_class<T> | null) {
        this.data = data;
        this.next = next;
}
    set next_node(next_node : nodo_class<T>|null){
        this.next=next_node;
        
    }
}