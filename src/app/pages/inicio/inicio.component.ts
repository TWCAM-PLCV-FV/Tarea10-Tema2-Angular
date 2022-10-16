import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/models/producto';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private service: OfertaService) { }

  productosOferta: Producto[] = [];
  productoSeleccionado!:Producto;

  ngOnInit(): void {
    this.service.getProductoEnOferta().subscribe(listaOfertas =>{
      this.productosOferta=Object.values(listaOfertas);
    });
  }

  onSeleccionado(producto:Producto){
    this.productoSeleccionado = producto;
  }

}
