import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ConsolasComponent } from './pages/consolas/consolas.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { DetalleConsolaComponent } from './pages/detalle-consola/detalle-consola.component';
import { DetalleAccesorioComponent } from './pages/detalle-accesorio/detalle-accesorio.component';
import { DetalleJuegoComponent } from './pages/detalle-juego/detalle-juego.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'consolas', component: ConsolasComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'detConsola/:nombre', component: DetalleConsolaComponent },
  { path: 'detAccesorio/:nombre', component: DetalleAccesorioComponent},
  { path: 'detJuego/:nombre', component: DetalleJuegoComponent},
  { path: 'busqueda/:termino', component: BusquedaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
