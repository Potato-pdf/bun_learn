type HeroID= `${string}-${string}-${string}-${string}-${string}`;

type Persona = {
    readonly id ?: HeroID
    name : string
    age : number
    phoneNumber ?: number
};
function createPerson( name:string, age:number) : Persona{
    return {id : crypto.randomUUID(),
        name, 
        age}
}

const person = createPerson("cesar", 23)
console.log(person);
