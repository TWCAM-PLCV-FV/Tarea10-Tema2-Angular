import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Comentario } from '../models/comentario';
import { getDatabase } from '@angular/fire/database';

import { Producto } from '../models/producto';
import { PRODUCTOS } from '../models/productos';

@Injectable({
  providedIn: 'root'
}) 
export class DataService {

  constructor(private httpClient:HttpClient) { }

  database = getDatabase();

  getProductos(){
    return this.httpClient.get("https://twcam-plcv-firebase-default-rtdb.europe-west1.firebasedatabase.app/productos.json")
  }

  getComentarios(){
    return this.httpClient.get("https://twcam-plcv-firebase-default-rtdb.europe-west1.firebasedatabase.app/comentarios.json")
  }

  getOfertas(){
    return this.httpClient.get("https://twcam-plcv-firebase-default-rtdb.europe-west1.firebasedatabase.app/ofertas.json")
  }

  setComentario(comentario:Comentario[]){
    this.httpClient.put("https://twcam-plcv-firebase-default-rtdb.europe-west1.firebasedatabase.app/comentarios.json",comentario).subscribe(
      response=>console.log("Se han guardado los comentarios"+response),
      error=> console.log("Error: "+error)
    );    
  }

  setProducto(producto:Producto[]){
    this.httpClient.put("https://twcam-plcv-firebase-default-rtdb.europe-west1.firebasedatabase.app/productos.json",producto).subscribe(
      response=>console.log("Se han guardado los comentarios"+response),
      error=> console.log("Error: "+error)
    );  
  }

  getComentario(){
    return this.httpClient.get("https://twcam-plcv-firebase-default-rtdb.europe-west1.firebasedatabase.app/comentarios.json")
  }

}
