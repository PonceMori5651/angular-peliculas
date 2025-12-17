import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { IndiceGeneros } from './generos/indice-generos/indice-generos';
import { CrearGenero } from './generos/crear-genero/crear-genero';
import { EditarGenero } from './generos/editar-genero/editar-genero';
import { IndiceActores } from './actores/indice-actores/indice-actores';
import { CrearActor } from './actores/crear-actor/crear-actor';
import { EditarActor } from './actores/editar-actor/editar-actor';
import { IndiceCines } from './cines/indice-cines/indice-cines';
import { CrearCine } from './cines/crear-cine/crear-cine';
import { EditarCine } from './cines/editar-cine/editar-cine';
import { CrearPelicula } from './peliculas/crear-pelicula/crear-pelicula';
import { EditarPelicula } from './peliculas/editar-pelicula/editar-pelicula';
import { FiltroPeliculas } from './peliculas/filtro-peliculas/filtro-peliculas';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path: 'generos', component: IndiceGeneros},
    {path: 'generos/crear', component: CrearGenero},
    {path: 'generos/editar/:id', component: EditarGenero},
    {path: 'actores', component: IndiceActores},
    {path: 'actores/crear', component: CrearActor},
    {path: 'actores/editar/:id', component: EditarActor},
    {path: 'cines', component: IndiceCines},
    {path: 'cines/crear', component: CrearCine},
    {path: 'cines/editar/:id', component: EditarCine},
    {path: 'peliculas/crear', component: CrearPelicula},
    {path: 'peliculas/editar/:id', component: EditarPelicula},
    {path: 'peliculas/filtrar', component: FiltroPeliculas},
    {path: '**', redirectTo: ''}
];
