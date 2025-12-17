import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioActor } from "../formulario-actor/formulario-actor";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActor],
  templateUrl: './crear-actor.html',
  styleUrl: './crear-actor.css',
})
export class CrearActor {
  router = inject(Router);

  guardarCambios(actor: ActorCreacionDTO) {
    
    // ...guardando cambios.

    //this.router.navigate(['/actores']);
    console.log('Creando un nuevo actor ',actor)
  
  }
}
