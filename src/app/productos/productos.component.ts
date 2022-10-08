import { Component, OnInit } from '@angular/core';
import { Producto } from "../compartido/producto";
import { PRODUCTOS } from "../compartido/productos";
import { DetalleproductoComponent } from '../detalleproducto/detalleproducto.component';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
    vProductos: Producto[] = PRODUCTOS;
    productoSeleccionado = this.vProductos[0];

    constructor() { }

    ngOnInit(): void {

    }

    onSeleccionado(producto:Producto){
        this.productoSeleccionado = producto;
        DetalleproductoComponent.onChanges();
    }

}


