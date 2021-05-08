import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss'],
})
export class MiComponenteComponent implements OnInit {
  public propiedad: string = 'Hola Mundo!';
  public enConstructor: string;
  public enOnInit: string = '';

  public miTexto: string = '';

  public miImagen: string =
    'https://static.wikia.nocookie.net/memes-pedia/images/2/2c/89592b3392fee110134235e95d80dbf7.jpg/revision/latest?cb=20200527113030&path-prefix=es';

  constructor() {
    this.enConstructor = 'Yo fui asignado en el constructor';
  }

  ngOnInit(): void {
    this.enOnInit = 'Yo fui asignado en ngOnInit()';
  }

  crearAlert() {
    alert('Hola!');
  }
}
