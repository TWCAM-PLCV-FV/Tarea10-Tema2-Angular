export class Comentario{
    idProducto: number;
    estrellas: number;
    comentario: string;
    autor: string;
    fecha: string;

    constructor(){
        this.idProducto=0;
        this.estrellas=0;
        this.comentario="";
        this.autor="";
        this.fecha="";
    }

}
