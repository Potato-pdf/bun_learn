import {nodo} from "./interfaces/nodo"

class nodo_class<T> implements nodo<T> {
    data: T;
    next: nodo_class<T> | null;

    constructor(data: T, next: nodo_class<T> | null = null, head:null, tail:null) {
        this.data = data;
        this.next = next;
}

}