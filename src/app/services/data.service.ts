import { Injectable } from '@angular/core';

import { Producto } from '../compartido/producto';
import { PRODUCTOS } from '../compartido/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProductos(){
    return PRODUCTOS;
  }
}
