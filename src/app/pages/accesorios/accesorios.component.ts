import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Accesorios } from 'src/app/classes/productos.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.scss']
})
export class AccesoriosComponent implements OnInit {
  listaAccesorios: Accesorios[];
  constructor(private productoService: ProductosService, private router: Router) {
    console.log(this.productoService.getAllAccesorio());
   }

  ngOnInit(): void {
    this.listaAccesorios = this.productoService.getAllAccesorio();
  }

  escucharHijo(nombre: string) {
    this.router.navigateByUrl(`/detAccesorio/${nombre}`);

  }
}
