import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor( private dataService:DataService ) { }

  getEmpleados(){
    return this.dataService.getEmpleados();
  }
}
