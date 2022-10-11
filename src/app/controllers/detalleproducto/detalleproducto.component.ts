import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../../models/comentario';
import { Producto } from '../../models/producto';
import { COMENTARIOS } from '../../models/comentarios';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  
  @Input() producto!: Producto;
  vComentarioSeleccionado: Comentario[] = COMENTARIOS;
  comentarioSeleccionado = this.vComentarioSeleccionado[0];

  constructor() {
  }

  ngOnInit(): void {
    if(!this.producto){
      throw(new Error("El valor de la propiedad [producto] no existe"));
    }
  }

  onChanges(comentario:Comentario){
    
  }

}
