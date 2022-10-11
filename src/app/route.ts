import { Routes } from '@angular/router';

import { ProductosComponent } from './controllers/productos/productos.component';
import { DetalleproductoComponent } from './controllers/detalleproducto/detalleproducto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const rutas: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'productos', component: ProductosComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
    ];