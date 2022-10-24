export class Empleado{
    id:number;
    imagen:string;
    nombre:string;
    puesto:string;

    constructor(id:number, imagen:string, nombre:string, puesto:string){
        this.id=id,
        this.imagen=imagen,
        this.nombre=nombre,
        this.puesto=puesto
    }
}