import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Comentario } from '../models/comentario';
import { Producto } from '../models/producto';

import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class DataService {

  constructor(private firestore:Firestore) { }
  
  getProductos(): Observable<Producto[]>{
    const dbRef = collection(this.firestore, 'productos');
    return collectionData(dbRef, { idField: 'id'}) as Observable<Producto[]>
  }

  getComentario(indice:number): Observable<Comentario[]>{
    const dbRef = collection(this.firestore, '/productos/'+indice+'/comentarios');
    return collectionData(dbRef, { idField: 'id'}) as Observable<Comentario[]>
  }
  
  /*
  getComentarioByIDsss(indice:number){
    const dbRef = collection(this.firestore, 'comentarios');
    //return addDoc(dbRef, indice);
    // return this.httpClient.get("https://twcam-plcv-firebase-default-rtdb.europe-west1.firebasedatabase.app/comentarios.json")
  }

  getComentarioByID():Observable<Comentario[]>{
    const dbRef = collection(this.firestore, 'comentarios');
    return collectionData (dbRef, {idField: 'id'}) as Observable <Comentario[]>;
  }
  */
    


}
