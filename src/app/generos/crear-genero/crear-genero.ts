import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroCreacionDTO } from '../generos';
import { FormularioGenero } from "../formulario-genero/formulario-genero";

@Component({
  selector: 'app-crear-genero',
  imports: [FormularioGenero],
  templateUrl: './crear-genero.html',
  styleUrl: './crear-genero.css',
})
export class CrearGenero {
  private router = inject(Router);



  guardarCambios(genero: GeneroCreacionDTO) {
    
    // ...guardando cambios.

    //this.router.navigate(['/generos']);
    console.log('Creando un nuevo género',genero);
  }
}
