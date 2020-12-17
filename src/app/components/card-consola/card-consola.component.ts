import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Consolas } from 'src/app/classes/productos.interfaces';

@Component({
  selector: 'app-card-consola',
  templateUrl: './card-consola.component.html',
  styleUrls: ['./card-consola.component.scss']
})
export class CardConsolaComponent implements OnInit {
  @Input() consola: Consolas;
  @Output() salida = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  llamarConsola(consola: Consolas) {
    this.salida.emit(consola.nombre_consola);
  }
}
