import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../models/comentario';
import { Producto } from '../../models/producto';
import { DataService } from 'src/app/services/data.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  
  comentarioSeleccionado!:Comentario[];
  productoSeleccionado!:Producto[];

  constructor( 
    private productoService:ProductoService,
    private comentarioService:ComentarioService,
    private route: ActivatedRoute, //Para acceder al routerLink
    private location: Location)  //Para acceder al historial de navegación y poder volver atrás
    {  }

  ngOnInit(): void {
    /*
    this.productoService.productoSeleccionado$.subscribe(
      idProducto =>{
        this.comentarioService.getComentario(idProducto).subscribe(comentario =>{
          this.comentarioSeleccionado=Object.values(comentario);
        });
        });
      */

    let id= +this.route.snapshot.params['id'];

    this.productoService.getProductoByID(id).subscribe(productoEncontrado =>{
      this.productoSeleccionado=Object.values(productoEncontrado);
    });

    this.comentarioService.getComentario(id).subscribe(comentariosProducto=>{
      this.comentarioSeleccionado=Object.values(comentariosProducto);
    });
  }

  volver(): void { this.location.back(); }
  
}
