import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consulta, TipoContacto } from '../../models/consulta';

import { faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  faPhone = faPhone;
  faFax = faFax;
  faEnvelope = faEnvelope;

  consultaForm!: FormGroup;
  consulta!: Consulta;
  tipoContacto = TipoContacto;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
    this.consulta = new Consulta();
  }

  ngOnInit(): void {
  }

  crearFormulario() { // Duda? Si creo una instancia del objeto que reciba en el constructor estos valores evito errores
    this.consultaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      contactar: false,
      tipocontacto: 'None',
      mensaje: ''
      });
  }

  onSubmit(){
    this.consulta = this.consultaForm.value;
    console.log(this.consulta);
    this.consultaForm.reset({
      nombre: '',
      apellidos: '',
      telefono: '',
      email: '',
      contactar: false,
      tipocontacto: 'None',
      mensaje: ''
      });
  }

}
