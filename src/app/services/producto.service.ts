import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { map, catchError } from 'rxjs/operators';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private dataService:DataService,
    private procesaHttpmsjService: ProcesaHTTPMsjService) { }
  
  productoSeleccionado$ = new EventEmitter();

  getProductos(){
    return this.dataService.getProductos()
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
  }

  getProductoByID(index:number){
    return this.dataService.getProductoByID(index)
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
  }

}
