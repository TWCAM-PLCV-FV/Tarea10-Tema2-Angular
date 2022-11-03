export class Comentario{
    idProducto: number;
    estrellas: number;
    comentario: string;
    autor: string;
    fecha: string;

    constructor(idProducto:number,estrellas:number,comentario:string,autor:string,fecha:string){
        this.idProducto=idProducto;
        this.estrellas=estrellas;
        this.comentario=comentario;
        this.autor=autor;
        this.fecha=fecha;
    }

}
