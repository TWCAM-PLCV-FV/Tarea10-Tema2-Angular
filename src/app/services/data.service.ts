import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../compartido/producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productoSeleccionado$ = new EventEmitter<number>();

  constructor() {  }
  
}
