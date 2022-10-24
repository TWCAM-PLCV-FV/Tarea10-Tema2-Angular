import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  constructor( private ofertaService:OfertaService ) { }
  
  listaOfertas:Oferta[]=[]
  
  ngOnInit(): void {
  }

}
