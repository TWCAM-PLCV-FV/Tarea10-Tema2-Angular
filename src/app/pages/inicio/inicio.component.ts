import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

import { Comentario } from '../../models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private service: ComentarioService ) { }

  ngOnInit(): void {
  }

  onClic(){
    console.log("Click");
    //this.service.setProducto();
    this.service.setComentario();
  }

}
