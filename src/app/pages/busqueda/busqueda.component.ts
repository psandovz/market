import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Productos, Consolas } from '../../classes/productos.interfaces';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  listaConsolas: Consolas[];
  // listaConsolas: Productos[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productoService: ProductosService) {
      this.activatedRoute.params.subscribe(
        params => this.listaConsolas = productoService.getBusquedaProducto(params['termino'].toString())
          // params => this.listaConsolas = productoService.getBusquedaProducto(params['termino'].toString())

        );
        console.log('lista:'+ this.listaConsolas);
     }

  ngOnInit(): void {
  }

  escucharHijo(nombre: string) {
    this.router.navigate(['detConsola', nombre]);
  }
}


