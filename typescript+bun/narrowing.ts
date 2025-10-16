import {empleado} from './interface.ts'

interface Confies extends empleado{
    empresa: string
    sueldo: number
    pagar: () => void

}

interface BYA extends empleado{
    empresa: string
    sueldo: number
    programar: () => void
}

type Empresa = Confies | BYA

function trabajar(empresa: Empresa){
    console.log(empresa.sueldo)
    
}