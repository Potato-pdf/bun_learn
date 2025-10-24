import { nodo2 } from "./interfaces/nodo";

class node<T> implements nodo2<T> {
    data : T;
    next: node<T> | null;
constructor (data : T){
    this.data = data;
    this.next = null;
}

nodo_joiner(nodo_siguiente : node<T>|null){
    this.next = nodo_siguiente;
}


}
