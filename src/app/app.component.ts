import { Component } from '@angular/core';
import { Banda } from './banda';

const BANDAS: Banda[] =
  [
  {id: 11, nombre: 'soda Stereo' },
  {id: 12, nombre: 'alan walker' },
  {id: 13, nombre: 'avici' },
  {id: 14, nombre: 'MARSHMELLOW' }
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'mis bandas favoritas';
  bandas = BANDAS;

  banda: Banda;

  seleccionar(item: Banda): void {
    this.banda = item;
  }
}
