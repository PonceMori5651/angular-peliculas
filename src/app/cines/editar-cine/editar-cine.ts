import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCine } from "../formulario-cine/formulario-cine";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCine],
  templateUrl: './editar-cine.html',
  styleUrl: './editar-cine.css',
})
export class EditarCine {
  @Input({transform: numberAttribute})
  id! : number;

  cine: CineDTO = {id: 1, nombre: 'Cineplanet', latitud: -11.989999322418797, longitud: -77.0626143917463};

  guardarCambios (cine: CineCreacionDTO) {
    console.log('editando un cine', cine)
  }

}
