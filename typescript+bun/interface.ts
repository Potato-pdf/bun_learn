type id = `${string}-${string}-${string}-${string}-${string}`;

interface persona {
    id?: id
    name: string
    age: number
    isactive: boolean
    saludar: (name: string) => void
}

function crearPersona(
    name: string,
    age: number,
    isactive: boolean
): persona {
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isactive,
        saludar: (name: string) => { console.log(`hola ${name}`) }
    }
}

const Persona = crearPersona ("cesar", 20, true);
Persona.saludar(Persona.name);
console.log(Persona)
