import { Routes } from '@angular/router';

import { ProductosComponent } from './controllers/productos/productos.component';
import { ComentariosComponent } from './controllers/comentarios/comentarios.component'
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const rutas: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'productos', component: ProductosComponent },    
    { path: 'detalleProducto/:id', component: ComentariosComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
    ];