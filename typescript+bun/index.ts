type HeroID= `${string}-${string}-${string}-${string}-${string}`;
type DualTupe = HeroID | string;
type RequiredPerson = {
    name : string,
    age : number,
    adress: {
        street : string,
        city : string,
        country : string
    }
};
type OptionaPersona = {
    readonly id ?: HeroID
    phoneNumber ?: number
};
type Persona = RequiredPerson & OptionaPersona;

function createPerson( name:string, age:number, adress: { street: string, city: string, country: string }, phoneNumber ?: number) : Persona{
    return {
        id : crypto.randomUUID(),
        name, 
        age,
        phoneNumber,
        adress: {
            street: adress.street,
            city: adress.city,
            country: adress.country
        }

    }
}

const person = createPerson("cesar", 23, { street: "Main St", city: "Anytown", country: "USA" })
console.log(person);

