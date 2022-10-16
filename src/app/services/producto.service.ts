import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private dataService:DataService) { }
  
  productoSeleccionado$ = new EventEmitter<number>();

  getProductos(){
    return this.dataService.getProductos();
  }

  productos:Producto[]=[
    new Producto(1,"Producto 1", 300, "/assets/images/movil1.jpg"),
    new Producto(2,"Producto 2", 400, "/assets/images/movil2.jpg"),
    new Producto(3,"Producto 3", 500, "/assets/images/movil3.jpg"),
    new Producto(4,"Producto 4", 600, "/assets/images/movil4.jpg")
  ];

  setProducto(){
    this.dataService.setProducto(this.productos);
  }

}
