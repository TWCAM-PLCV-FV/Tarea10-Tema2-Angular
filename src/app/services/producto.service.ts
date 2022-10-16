import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private dataService:DataService ) { }
  
  productoSeleccionado$ = new EventEmitter();

  getProductos(){
    return this.dataService.getProductos();
  }

}
