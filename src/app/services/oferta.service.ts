import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private dataService:DataService) { }

  getProductoEnOferta(){
    return this.dataService.getProductoEnOferta();
  }
}
