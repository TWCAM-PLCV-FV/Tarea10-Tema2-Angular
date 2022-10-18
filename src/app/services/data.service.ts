import { Injectable } from '@angular/core';

import { Comentario } from '../models/comentario';
import { Producto } from '../models/producto';
import { Oferta } from '../models/oferta';

import { Firestore, collection, collectionData, FieldPath} from '@angular/fire/firestore'
import { query, where } from "firebase/firestore";
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

  getProductoByID(indice:number): Observable<Producto[]>{
    const dbRef = collection(this.firestore, 'productos');
    const q1 = query(dbRef, where("ID","==",indice));
    return collectionData(q1, { idField: 'id'}) as Observable<Producto[]>
  }

  getProductoEnOferta(): Observable<Producto[]>{
    const dbRef = collection(this.firestore, 'productos');
    const q1= query(dbRef, where("enOferta","==",true));
    return collectionData(q1, { idField: 'id'}) as Observable<Producto[]>
  }

  getComentario(indice:number): Observable<Comentario[]>{
    const dbRef = collection(this.firestore, '/productos/'+indice+'/comentarios');
    return collectionData(dbRef, { idField: 'id'}) as Observable<Comentario[]>;
  }

  getOfertas(): Observable<Oferta[]>{
    const dbRef = collection(this.firestore, 'ofertas');
    const q1= query(dbRef, where("enOferta","==",true));
    return collectionData(q1, { idField: 'id'}) as Observable<Oferta[]>;
  }

}
