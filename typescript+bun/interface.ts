type id = `${string}-${string}-${string}-${string}-${string}`;

interface persona {
    id?: id
    name: string
    age: number
    isactive: boolean
    saludar: (name: string) => void
}

export interface empleado extends persona{
    puesto: string
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

function crearEmpleado(
    name: string,
    age: number,
    isactive: boolean,
    puesto: string
): empleado {
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isactive,
        saludar: (name: string) => { console.log(`hola ${name}`) },
        puesto
    }
}

const Empleado = crearEmpleado("Ana", 30, true, "Desarrollador");
Empleado.saludar(Empleado.name);
console.log(Empleado);

Persona.saludar(Persona.name);
console.log(Persona)
