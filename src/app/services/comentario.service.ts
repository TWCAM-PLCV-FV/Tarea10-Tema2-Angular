import { Injectable } from '@angular/core';
import { Comentario } from '../models/comentario';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor( private dataService:DataService ) { }

  getComentario(indice:number){
    return this.dataService.getComentario(indice);
  }

  addComentario(productoId:number, comentario:Comentario){
    return this.dataService.addComentario(productoId,comentario);
  }
  
}

