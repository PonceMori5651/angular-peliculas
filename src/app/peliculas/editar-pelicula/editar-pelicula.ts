import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPelicula } from "../formulario-pelicula/formulario-pelicula";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultiple';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPelicula],
  templateUrl: './editar-pelicula.html',
  styleUrl: './editar-pelicula.css',
})
export class EditarPelicula {
  @Input({transform: numberAttribute})
  id! : number;

  pelicula: PeliculaDTO = {id:1 , titulo: 'Spider-Man', trailer: 'ABC', 
    fechaLanzamiento: new Date('2015-07-25'), 
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'}

  generosSeleccionados: SelectorMultipleDTO[] = [{ llave: 2, valor: 'Acción' }];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
      { llave: 1, valor: 'Drama' },
      { llave: 3, valor: 'Comedia' }
    ];

  cinesSeleccionados: SelectorMultipleDTO[] = [{ llave: 2, valor: 'Blue Mall' }];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Agora Mall' },
    { llave: 3, valor: 'Acrópolis' }
  ];

  actoresSeleccionados: ActorAutoCompleteDTO[] = [
    {
    id:3, nombre: 'Heath Ledger', personaje: 'Thor', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Heath_Ledger_%282%29.jpg/500px-Heath_Ledger_%282%29.jpg'
    }
  ];

  guardarCambios(pelicula : PeliculaCreacionDTO) {
    console.log('editando una película', pelicula);
  }
  
}
