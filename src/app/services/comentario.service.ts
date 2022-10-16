import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor( private dataService:DataService ) { }

  getComentario(indice:number){
    return this.dataService.getComentario(indice);
  }

  /*
  getComentarioByID(){
    return this.dataService.getComentarioByID();
  }
*/

}

