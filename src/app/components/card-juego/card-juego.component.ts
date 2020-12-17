import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Juegos } from 'src/app/classes/productos.interfaces';

@Component({
  selector: 'app-card-juego',
  templateUrl: './card-juego.component.html',
  styleUrls: ['./card-juego.component.scss']
})
export class CardJuegoComponent implements OnInit {
  @Input() juego: Juegos;
  @Output() salida = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  llamarJuego(juego: Juegos) {
    this.salida.emit(juego.nombre_juego);
  }
}
