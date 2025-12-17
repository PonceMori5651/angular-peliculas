import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActor } from "../formulario-actor/formulario-actor";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActor],
  templateUrl: './editar-actor.html',
  styleUrl: './editar-actor.css',
})
export class EditarActor {
  @Input({transform: numberAttribute})
  id! : number;
  actor : ActorDTO = {id:1 , nombre: 'Tom Holland', fechaNacimiento: new Date(1991,0,25), foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/500px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'}
  guardarCambios(actor: ActorCreacionDTO) {
    console.log('editando el actor ',actor);
  }
}
