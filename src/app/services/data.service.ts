import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Producto } from '../models/producto';
import { PRODUCTOS } from '../models/productos';

@Injectable({
  providedIn: 'root'
}) 
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getComentarios(){
    return this.httpClient.get("https://practicaassistant-42aab.firebaseio.com/productos.json")
  }

  getProductos(){
    return this.httpClient.get("https://practicaassistant-42aab.firebaseio.com/comentarios.json")
  }

  getOfertas(){
    return this.httpClient.get("https://practicaassistant-42aab.firebaseio.com/ofertas.json")
  }

}
