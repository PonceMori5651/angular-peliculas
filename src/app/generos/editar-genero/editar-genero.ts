import { Component, Input, numberAttribute } from '@angular/core';
import { GeneroDTO, GeneroCreacionDTO } from '../generos';
import { FormularioGenero } from "../formulario-genero/formulario-genero";

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGenero],
  templateUrl: './editar-genero.html',
  styleUrl: './editar-genero.css',
})
export class EditarGenero {
  @Input({transform: numberAttribute})
  id! : number;

  genero : GeneroDTO = {id: 1, nombre: 'Drama'};

  guardarCambios(genero : GeneroCreacionDTO) {
    console.log('Editando el género', genero)
  }
}
