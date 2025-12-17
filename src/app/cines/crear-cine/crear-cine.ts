import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CineCreacionDTO } from '../cines';
import { FormularioCine } from "../formulario-cine/formulario-cine";

@Component({
  selector: 'app-crear-cine',
  imports: [MatButtonModule, FormularioCine],
  templateUrl: './crear-cine.html',
  styleUrl: './crear-cine.css',
})
export class CrearCine {
  router = inject(Router);

  guardarCambios(cine: CineCreacionDTO) {
    
    // ...guardando cambios.

    //this.router.navigate(['/cines']);
    console.log('creando un nuevo cine ', cine)
  }
}
