import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private dataService:DataService) { }
  
  productoSeleccionado$ = new EventEmitter();

  getProductos(){
    return this.dataService.getProductos();
  }

}
