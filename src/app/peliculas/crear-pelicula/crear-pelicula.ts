import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPelicula } from "../formulario-pelicula/formulario-pelicula";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultiple';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPelicula],
  templateUrl: './crear-pelicula.html',
  styleUrl: './crear-pelicula.css',
})
export class CrearPelicula {

  generosSeleccionados: SelectorMultipleDTO[] = [];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 2, valor: 'Acción' },
    { llave: 3, valor: 'Comedia' }
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Agora Mall' },
    { llave: 2, valor: 'Blue Mall' },
    { llave: 3, valor: 'Acrópolis' }
  ];

  actoresSeleccionados: ActorAutoCompleteDTO[] = [];
  
  guardarCambios(pelicula : PeliculaCreacionDTO) {
    console.log('creando una nueva película', pelicula);
  }
}
