import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from "../compartido/producto";
import { PRODUCTOS } from "../compartido/productos";
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

    @Output() cambioProductoSeleccionado = new EventEmitter<Producto>();

    vProductos: Producto[] = PRODUCTOS;
    productoSeleccionado = this.vProductos[0];

    constructor( private dataService: DataService ) { } 

    ngOnInit(): void {
    }

    onSeleccionado(producto:Producto){
        this.productoSeleccionado = producto;
        this.dataService.productoSeleccionado$.emit(this.productoSeleccionado.id);
    }

}


