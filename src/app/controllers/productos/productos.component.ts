import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto'

import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    vProductos: Producto[] = [];
    productoSeleccionado!:Producto;    

    constructor( private productoService:ProductoService) { }

    ngOnInit(): void {
        this.vProductos=this.productoService.getProductos();
        this.productoSeleccionado = this.vProductos[0];
    }

    onSeleccionado(producto:Producto){
        this.productoSeleccionado = producto;
    }

}


