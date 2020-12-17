import { Injectable } from '@angular/core';
import { consola, accesorio, juego, producto } from '../config/Productos';
import { Consolas, Accesorios, Juegos, Productos } from '../classes/productos.interfaces';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getAllConsola(): Consolas[]{
    return consola;
  }

  getAllAccesorio(): Accesorios[]{
    return accesorio;
  }

  getAlljuego(): Juegos[]{
    return juego;
  }

  getConsola(nombreConsola: string): Consolas {
    return consola.filter(consolas => consolas.nombre_consola === nombreConsola)[0];
  }

  getAccesorio(nombreAccesorio: string): Accesorios {
    return accesorio.filter(accesorios => accesorios.nombre_accesorio === nombreAccesorio)[0];
  }

  getJuego(nombreJuego: string): Juegos {
    return juego.filter(juegos => juegos.nombre_juego === nombreJuego)[0];
  }

  getBusquedaProducto(termino: string): Consolas[] {
  return consola.filter(consolas => consolas.nombre_consola.toUpperCase().includes(termino.toUpperCase()) );
  }

  // getBusquedaProducto(termino: string): Productos[] {
  // return producto.filter(productos => productos.consola.filter(consolas=>consolas.nombre_consola.toUpperCase().includes(termino.toUpperCase())));
  // }



  /* getBusquedasProductos(termino: string): Productos[] {
    // producto.filter(productos => {
    //   productos.consola.filter(consolas => consolas.nombre_consola.toUpperCase().includes(termino.toUpperCase()));
    //   }
    // if (producto.filter(productos => {
    //   productos.consola.filter(consolas => consolas.nombre_consola.toUpperCase().includes(termino.toUpperCase()))
    // }) 
    // if (this.getBusquedaConsola){
    //   return productos[] => productos.consola.filter(consolas => consolas.nombre_consola.toUpperCase().includes(termino.toUpperCase()));
    // }

    // return producto.filter(productos => productos.consola[`nombre_consola`].toUpperCase().includes(termino.toUpperCase()) );
  } */

  getBusquedaConsola(termino: string): Consolas[] {
    return consola.filter(consolas => consolas.nombre_consola.toUpperCase().includes(termino.toUpperCase()) );
  }

  getBusquedaJuego(termino: string): Juegos[] {
    return juego.filter(juegos => juegos.nombre_juego.toUpperCase().includes(termino.toUpperCase()) );
  }

  getBusquedaAccesorio(termino: string): Accesorios[] {
    return accesorio.filter(accesorios => accesorios.nombre_accesorio.toUpperCase().includes(termino.toUpperCase()) );
  }
}