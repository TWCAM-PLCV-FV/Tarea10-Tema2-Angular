import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { DetalleproductoComponent } from '../detalleproducto/detalleproducto.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productoSeleccionado$ = new EventEmitter<number>();

  constructor( private httpClient:HttpClient ) {  }

  guardarDatos(comentario:DetalleproductoComponent[]){
    this.httpClient.post('https://practicaassistant-42aab.firebaseio.com/datos.json',comentario);
  }
  
}
