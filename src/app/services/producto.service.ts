import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private dataService:DataService) { }

  getProductos(){
    return this.dataService.getProductos();
  }
}
