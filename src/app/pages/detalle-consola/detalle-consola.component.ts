import { Component, OnInit } from '@angular/core';
import { Consolas } from 'src/app/classes/productos.interfaces';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-consola',
  templateUrl: './detalle-consola.component.html',
  styleUrls: ['./detalle-consola.component.scss']
})
export class DetalleConsolaComponent implements OnInit {
  consola: Consolas;
  urlImg: string;
  mTotal: string;

  constructor(private consolaServicio: ProductosService, private activadedRoute: ActivatedRoute, private router: Router) {

                  this.activadedRoute.params.subscribe(
                        params => {
                          this.consola = this.consolaServicio.getConsola(params['nombre'].toString());
                       }
                      );
                  }

  ngOnInit(): void {
  }

  Total(cant?: number, precio?: string){
    this.mTotal = "S/. " + cant * parseInt(precio.split("S/. ")[1]);

  }

  Agregar(nom: string, cant: number, total: string){
    Swal.fire({
  title: 'Deseas agregar este producto?',
  html: '<div align="left"><b>Producto: </b>' + nom + '<br /><b>Cantidad: </b>' + cant + '<br /><b>Total: </b>' + total + '</div>',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Agregar`,
  denyButtonText: `No Agregar`,
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Se agrego Exitosamente', '', 'success');
  } else if (result.isDenied) {
    Swal.fire('No fue Agregado', '', 'info');
  }
});
}
    regresar() {
    this.router.navigateByUrl('/consolas');
  }

}
