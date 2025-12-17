import { Component, Input } from '@angular/core';
import { ListadoGenerico } from "../../compartidos/componentes/listado-generico/listado-generico";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listado-peliculas',
  imports: [ListadoGenerico, MatButtonModule],
  templateUrl: './listado-peliculas.html',
  styleUrl: './listado-peliculas.css',
})
export class ListadoPeliculas {
  @Input({required: true})
  peliculas! : any[];

  borrarPelicula(pelicula: any){
    const indice = this.peliculas.findIndex( (peliculaActual: any) => peliculaActual.titulo === pelicula.titulo )
    this.peliculas.splice(indice,1);
  }
}
