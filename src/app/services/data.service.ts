import { Injectable } from '@angular/core';

import { Producto } from '../models/producto';
import { PRODUCTOS } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProductos(){
    return PRODUCTOS;
  }
}
