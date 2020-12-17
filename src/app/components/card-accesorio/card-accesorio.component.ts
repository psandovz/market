import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Accesorios } from 'src/app/classes/productos.interfaces';


@Component({
  selector: 'app-card-accesorio',
  templateUrl: './card-accesorio.component.html',
  styleUrls: ['./card-accesorio.component.scss']
})
export class CardAccesorioComponent implements OnInit {
  @Input() accesorio: Accesorios;
  @Output() salida = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  llamarAccesorio(accesorio: Accesorios) {
    this.salida.emit(accesorio.nombre_accesorio);
  }
}
