export class Oferta{
    idProducto:number;
    ofetado:boolean;

    constructor(idProcuto:number,ofertado:boolean){
        this.idProducto=idProcuto;
        this.ofetado=ofertado;
    }
}