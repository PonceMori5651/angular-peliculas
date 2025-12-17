import { Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './selectorMultiple';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.html',
  styleUrl: './selector-multiple.css',
})
export class SelectorMultiple {

  @Input({required:true})
  seleccionados! : SelectorMultipleDTO[];

  @Input({required:true})
  noSeleccionados! : SelectorMultipleDTO[];

  seleccionar(elemento: SelectorMultipleDTO, indice: number) {

    this.seleccionados.push(elemento);
    this.noSeleccionados.splice(indice, 1);
    
  }

  deseleccionar(elemento: SelectorMultipleDTO, indice: number) {
    this.noSeleccionados.push(elemento);
    this.seleccionados.splice(indice, 1);
  }

  seleccionarTodo() {
    this.seleccionados.push(...this.noSeleccionados);
    this.noSeleccionados.length = 0;
  }
  deseleccionarTodo() {
    this.noSeleccionados.push(...this.seleccionados);
    this.seleccionados.length = 0;
  }
}
