import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Producto } from '../../models/producto'
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit { 

    constructor( private productoService:ProductoService ) { }

    vProductos: Producto[] = [];
    productoSeleccionado!:Producto;

    @Output() cambioProductoSeleccionado = new EventEmitter<Producto>();

    ngOnInit(): void {
        this.productoService.getProductos().subscribe(listaProductos=>{
            this.vProductos=Object.values(listaProductos);
        });
    }

    onSeleccionado(producto:Producto){
        this.productoSeleccionado = producto;
        this.productoService.productoSeleccionado$.emit(
            this.productoSeleccionado.id);
    }

}


