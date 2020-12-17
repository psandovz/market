import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ConsolasComponent } from './pages/consolas/consolas.component';
import { DetalleConsolaComponent } from './pages/detalle-consola/detalle-consola.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { DetalleJuegoComponent } from './pages/detalle-juego/detalle-juego.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { DetalleAccesorioComponent } from './pages/detalle-accesorio/detalle-accesorio.component';
import { CardJuegoComponent } from './components/card-juego/card-juego.component';
import { CardAccesorioComponent } from './components/card-accesorio/card-accesorio.component';
import { CardConsolaComponent } from './components/card-consola/card-consola.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    BusquedaComponent,
    ConsolasComponent,
    DetalleConsolaComponent,
    JuegosComponent,
    DetalleJuegoComponent,
    AccesoriosComponent,
    DetalleAccesorioComponent,
    CardJuegoComponent,
    CardAccesorioComponent,
    CardConsolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
