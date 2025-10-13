type HeroID= `${string}-${string}-${string}-${string}-${string}`;
type DualTupe = HeroID | string;
type RequiredPerson = {
    name : string,
    age : number
};
type OptionaPersona = {
    readonly id ?: HeroID
    phoneNumber ?: number
};
type Persona = RequiredPerson & OptionaPersona;

function createPerson( name:string, age:number, phoneNumber ?: number) : Persona{
    return {id : crypto.randomUUID(),
        name, 
        age,
        phoneNumber
    }
}

const person = createPerson("cesar", 23)
console.log(person);

