import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../compartido/producto';


@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {

  @Input() producto!: Producto;

  constructor() { }

  ngOnInit(): void {
    if(!this.producto){
      throw(new Error("El valor de la propiedad [producto] no existe"));
    }
  }

}
