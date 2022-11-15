import { Injectable } from '@angular/core';

// Modelos
import { Comentario } from '../models/comentario';
import { Producto } from '../models/producto';
import { Oferta } from '../models/oferta';
import { Empleado } from '../models/empleados';

// Firebase
import { Firestore, collection, collectionData, FieldPath, addDoc} from '@angular/fire/firestore'
import { query, where } from "firebase/firestore";
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { get } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
}) 
export class DataService {

  constructor(private firestore:Firestore) { }
  
  //Productos
  getProductos(): Observable<Producto[]>{
    const dbRef = collection(this.firestore, 'productos');
    return collectionData(dbRef, { idField: 'id'}) as Observable<Producto[]>
  }

  getProductosHTTP(){
    const dbRef = collection(this.firestore, 'productos');
    const q1 = query(dbRef, where("ID","==",1));
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

  //Comentarios
  getComentario(indice:number): Observable<Comentario[]>{
    const dbRef = collection(this.firestore, '/productos/'+indice+'/comentarios');
    return collectionData(dbRef, { idField: 'id'}) as Observable<Comentario[]>;
  }
  
  async addComentario(producto:number, comentario:Comentario){
    const dbRef = collection(this.firestore, '/productos/'+producto+'/comentarios');
    await addDoc (dbRef,comentario).then(response =>{
      console.log(response);
    });
  }

  //Ofertas
  getOfertas(): Observable<Oferta[]>{
    const dbRef = collection(this.firestore, 'ofertas');
    const q1= query(dbRef, where("enOferta","==",true));
    return collectionData(q1, { idField: 'id'}) as Observable<Oferta[]>;
  }

  //Empleados
  getEmpleados(): Observable<Empleado[]>{
    const dbRef = collection(this.firestore, 'empleados');
    return collectionData(dbRef, { idField: 'id'}) as Observable<Empleado[]>
  }

  //Gestion errores


}
