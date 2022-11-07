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

  erroresForm: any = {
    'autor': '',
    'estrellas': '',
    'comentario': ''
  };

  mensajesError: any = {
    'autor': {
      'required': 'El nombre del autor es obligatorio.',
      'minlength': 'El nombre debe tener una longitud mínima de 10 caracteres.',
      'maxlength': 'El nombre no puede exceder de 25 caracteres.'
    },
    'estrellas': {
      'required': 'El número de estrellas es obligatorio.',
      'pattern': 'El número de estrellas sólo puede contener números.'
    },
    'comentario': {
      'required': 'El comentario es obligatorio.',
      'minlength': 'El comentario debe tener una longitud mínima de 20 caracteres.',
      'maxlength': 'El comentario no pueden exceder de 100 caracteres.'
    }
  };


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
      autor: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]],
      estrellas: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      comentario: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]]
    });

    this.comentarioForm.valueChanges.subscribe(datos => {
      this.onCambioValor(datos);
    });

    this.onCambioValor();
  }

  

  onSubmit() {
    this.comentario = this.comentarioForm.value;
    let now = new Date();
    this.comentario.fecha=""+now;
    this.comentario.idProducto=this.productoSeleccionado[0].id
    this.comentarioService.addComentario(this.productoSeleccionado[0].id,this.comentario);
    this.comentarioForm.reset({
      autor: '',
      estrellas: '',
      comentario: ''
    });
  }

  setPrevPost(productoId: number) {
    const index = this.productoIds.indexOf(productoId);
    this.prev = this.productoIds[(this.productoIds.length + index - 1) % this.productoIds.length];
    this.post = this.productoIds[(this.productoIds.length + index + 1) % this.productoIds.length];
  }

  onCambioValor(data?: any) { //Para cada uno de los elementos del array, añade el error encontrado
    if (!this.comentarioForm) { return; }
    const form = this.comentarioForm;
    for (const field in this.erroresForm) {
      // Se borrarán los mensajes de error previos
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesError[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

}
