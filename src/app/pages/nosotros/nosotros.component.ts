import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor( private empleadoService:EmpleadoService ) { }

  vEmpleados: Empleado [] = [];
  empleadoSeleccionado!:Empleado;


  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(listaEmpleados =>{
      this.vEmpleados=Object.values(listaEmpleados);
    });
  }

}
