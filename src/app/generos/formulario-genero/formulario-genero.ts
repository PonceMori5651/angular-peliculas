import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { GeneroDTO, GeneroCreacionDTO } from '../generos';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulario-genero',
  imports: [ MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule ],
  templateUrl: './formulario-genero.html',
  styleUrl: './formulario-genero.css',
})
export class FormularioGenero {
  ngOnInit(): void {
    if(this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  @Input()
  modelo?: GeneroDTO;

  @Output()
  posteoFormulario = new EventEmitter<GeneroCreacionDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula()]}]
  });

  obtenerErrorCampoNombre() : string {

    let nombre = this.form.controls.nombre;

    if(nombre.hasError('required')) {
      return "El campo nombre es requerido";
    }

    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return "";
  }

  
  guardarCambios() {

    if(!this.form.valid) {
      return;
    }

    const genero = this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}
