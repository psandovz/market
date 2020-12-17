import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Juegos } from 'src/app/classes/productos.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  listaJuegos: Juegos[];
  constructor(private productoService: ProductosService, private router: Router) {
    console.log(this.productoService.getAlljuego());
  }

  ngOnInit(): void {
    this.listaJuegos = this.productoService.getAlljuego();
  }

  escucharHijo(nombre: string) {
    this.router.navigateByUrl(`/detJuego/${nombre}`);

  }
}
