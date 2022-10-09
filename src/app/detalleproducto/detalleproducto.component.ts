import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../compartido/comentario';
import { Producto } from '../compartido/producto';
import { COMENTARIOS } from '../compartido/comentarios';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  
  @Input() producto!: Producto;
  listaComentarios: Comentario[] = COMENTARIOS;
  comentarioSeleccionado = this.listaComentarios[0];

  constructor( private dataService: DataService ) {
  }

  ngOnInit(): void {
    
    if(!this.producto){
      throw(new Error("El valor de la propiedad [producto] no existe"));
    }

    this.dataService.productoSeleccionado$.subscribe(
      idProducto => {
        for( var i in COMENTARIOS){
          if(COMENTARIOS[i].idProducto==idProducto){
            this.comentarioSeleccionado=COMENTARIOS[i];
          }
        }        
      }
    );

  }

}
