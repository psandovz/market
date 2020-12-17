import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Consolas } from 'src/app/classes/productos.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.scss']
})
export class ConsolasComponent implements OnInit {

  listaConsolas: Consolas[];
  constructor(private productoService: ProductosService, private router: Router) {
    console.log(this.productoService.getAllConsola());
  }

  ngOnInit(): void {
    this.listaConsolas = this.productoService.getAllConsola();
  }

    escucharHijo(nombre: string) {
    this.router.navigateByUrl(`/detConsola/${nombre}`);

  }

}
