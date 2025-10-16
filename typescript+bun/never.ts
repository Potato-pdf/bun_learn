function representacionNever(x : string|number){
    if(typeof x === 'string'){
        x.toLowerCase
    }
    else if(typeof x === 'number'){
        x.toFixed(2)
    }
    else{
        x
    }
}