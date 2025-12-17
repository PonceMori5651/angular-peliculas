import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImg } from '../../compartidos/componentes/input-img/input-img';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import moment from 'moment';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/selectorMultiple';
import { SelectorMultiple } from "../../compartidos/componentes/selector-multiple/selector-multiple";
import { AutocompleteActores } from "../../actores/autocomplete-actores/autocomplete-actores";
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-formulario-pelicula',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImg, SelectorMultiple, AutocompleteActores],
  templateUrl: './formulario-pelicula.html',
  styleUrl: './formulario-pelicula.css',
})
export class FormularioPelicula implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  @Input({required:true})
  generosNoSeleccionados! : SelectorMultipleDTO[];

  @Input({required:true})
  generosSeleccionados! : SelectorMultipleDTO[];

  @Input({required:true})
  cinesNoSeleccionados! : SelectorMultipleDTO[];

  @Input({required:true})
  cinesSeleccionados! : SelectorMultipleDTO[];

  @Input({required:true})
  actoresSeleccionados! : ActorAutoCompleteDTO[];

  @Input()
  modelo?:PeliculaDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculaCreacionDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo: ['',{validators: [Validators.required, primeraLetraMayuscula()]}],
    fechaLanzamiento: new FormControl<Date | null>(null, {validators: [Validators.required]}),
    trailer: '',
    poster: new FormControl<File | string | null>(null)
  });

  archivoSeleccionado(file : File) {
    this.form.controls.poster.setValue(file);
  }

  guardarCambios() {
    if(!this.form.valid) {
      return;
    }
    const pelicula = this.form.value as PeliculaCreacionDTO;
    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();

    if(typeof pelicula.poster == "string") {
      pelicula.poster = undefined;
    }

    const generosIds = this.generosSeleccionados.map(val => val.llave);

    pelicula.generosIds = generosIds;

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    
    pelicula.cinesIds = cinesIds;

    pelicula.actores = this.actoresSeleccionados;

    this.posteoFormulario.emit(pelicula);
  }

  obtenerErrorCampoTitulo() : string {

    let titulo = this.form.controls.titulo;

    if(titulo.hasError('required')) {
      return "El campo titulo es requerido";
    }

    if(titulo.hasError('primeraLetraMayuscula')){
      return titulo.getError('primeraLetraMayuscula').mensaje;
    }

    return "";
  }
  obtenerErrorCampoFechaLanzamiento() : string {

    let fechaLanzamiento = this.form.controls.fechaLanzamiento;

    if(fechaLanzamiento.hasError('required')) {
      return "El campo fecha lanzamiento es requerido";
    }

    return "";
  }
}
