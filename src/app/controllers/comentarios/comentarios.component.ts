import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../models/comentario';
import { Producto } from '../../models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarioSeleccionado!: Comentario[];
  productoSeleccionado!: Producto[];

  comentarioForm!: FormGroup;
  comentario!: Comentario;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(
    private productoService: ProductoService,
    private comentarioService: ComentarioService,
    private route: ActivatedRoute, //Para acceder al routerLink
    private location: Location,
    private router: Router,
    private fb: FormBuilder)  //Para acceder al historial de navegación y poder volver atrás
  { this.crearFormulario(); }

  productoIds: number[] = [];
  prev!: number;
  post!: number;

  ngOnInit(): void {

    let id = +this.route.snapshot.params['id'];

    //Obtener los Ids de los productos
    this.productoService.getProductos().subscribe(productoIds => {
      productoIds.forEach(p => {
        this.productoIds.push(p.id);
      });
    });

    //Obtener el producto seleccionado
    this.productoService.getProductoByID(id).subscribe(productoEncontrado => {
      this.productoSeleccionado = Object.values(productoEncontrado);
    });

    //Obtener el comentario del producto seleccionado
    this.comentarioService.getComentario(id).subscribe(comentariosProducto => {
      this.comentarioSeleccionado = Object.values(comentariosProducto);
    });

    this.route.params.pipe(switchMap((params: Params) => this.productoService.getProductoByID(+params['id'])))
      .subscribe(producto => {
        this.productoSeleccionado = producto;
        this.setPrevPost(producto[0].id);
      })
  }

  volver(): void {
    this.router.navigate(["/productos"]);
  }

  crearFormulario() {
    this.comentarioForm = this.fb.group({
      autor: ['', Validators.required],
      estrellas: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

  onSubmit() {
    let idProducto: number;
    idProducto = 1;
    this.comentario = new Comentario(idProducto, "5", "Perfecto", "Felipe", "Hoy");
  }

  setPrevPost(productoId: number) {
    const index = this.productoIds.indexOf(productoId);
    this.prev = this.productoIds[(this.productoIds.length + index - 1) % this.productoIds.length];
    this.post = this.productoIds[(this.productoIds.length + index + 1) % this.productoIds.length];
  }

}
