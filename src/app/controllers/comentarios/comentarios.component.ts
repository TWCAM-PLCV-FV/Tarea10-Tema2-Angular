import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../../models/comentario';
import { Producto } from '../../models/producto';
import { DataService } from 'src/app/services/data.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  
  @Input() producto!: Producto;
  vComentarioSeleccionado: Comentario[] = [];
  comentarioSeleccionado!:Comentario[];

  constructor( private productoService:ProductoService, private comentarioService:ComentarioService ) {

  }

  ngOnInit(): void {
    this.productoService.productoSeleccionado$.subscribe(
      idProducto =>{
        this.comentarioService.getComentario(idProducto).subscribe(comentario =>{
          this.comentarioSeleccionado=Object.values(comentario);
        });
        });
      }
  

  onChanges(comentario:Comentario){
    
  }

}
