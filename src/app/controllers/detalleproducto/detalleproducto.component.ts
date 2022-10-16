import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../../models/comentario';
import { Producto } from '../../models/producto';
import { COMENTARIOS } from '../../models/comentarios';
import { DataService } from 'src/app/services/data.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  
  @Input() producto!: Producto;
  vComentarioSeleccionado: Comentario[] = [];
  comentarioSeleccionado = this.vComentarioSeleccionado[0];

  constructor( private productoService:ProductoService, private comentarioService:ComentarioService ) {

  }

  ngOnInit(): void {
    this.productoService.productoSeleccionado$.subscribe(
      idProducto =>{
        this.vComentarioSeleccionado = Object.values(this.comentarioService.getComentario());
        console.log(this.vComentarioSeleccionado);
        this.vComentarioSeleccionado.find(obj => obj.idProducto == idProducto );
        console.log(this.vComentarioSeleccionado);
      }
    )
  }

  onChanges(comentario:Comentario){
    
  }

}
