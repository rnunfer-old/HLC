import { Component } from '@angular/core';
import { PoligonoService } from './poligono.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoHLC';

  lado: number = 0;

  constructor ( private poligonoService : PoligonoService ) {}

  getLado() {

    this.poligonoService.getLado(this.lado);
  }
}
