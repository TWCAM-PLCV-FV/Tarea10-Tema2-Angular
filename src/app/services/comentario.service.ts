import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor( private dataService:DataService ) { }

  comentarios:Comentario[]=[ 
    new Comentario(1, 5, "Producto funciona perfectamente, envío perfecto", "Juan García", "2017-10-16T12:32:23.126094Z"),
    new Comentario(1, 4, "Producto correcto, envío con retraso", "Emilio Fernández", "2016-12-03T07:52:24.236094Z"),
    new Comentario(2, 4, "Producto funciona perfectamente, envío perfecto", "Pedro García", "2017-10-16T12:32:23.126094Z"),
    new Comentario(2, 3, "Producto correcto, envío con retraso", "Lucas Fernández", "2016-12-03T07:52:24.236094Z"),
    new Comentario(3, 5, "Producto funciona perfectamente, envío perfecto", "Lara García", "2017-10-16T12:32:23.126094Z"),
    new Comentario(3, 3, "Producto correcto, envío con retraso", "Silvia Fernández", "2016-12-03T07:52:24.236094Z"),
    new Comentario(4, 5, "Producto funciona perfectamente, envío perfecto", "Teresa García", "2017-10-16T12:32:23.126094Z"),
    new Comentario(4, 5, "Producto correcto", "Joan Puigdemont", "2016-12-03T07:52:24.236094Z")
  ];

  setComentario(){
    this.dataService.setComentario(this.comentarios);
  }

  getComentarios(){
    return this.dataService.getComentarios();
  }

  getComentario(){
    return this.dataService.getComentario();
  }

}

