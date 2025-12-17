import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ActorAutoCompleteDTO } from '../actores';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule, 
    DragDropModule
  ],
  templateUrl: './autocomplete-actores.html',
  styleUrl: './autocomplete-actores.css',
})
export class AutocompleteActores {
  control = new FormControl();
  actores: ActorAutoCompleteDTO[] = [
    {
    id:1, nombre: 'Tom Holland', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tom_Holland_MTV_2018_%2801%29.jpg/330px-Tom_Holland_MTV_2018_%2801%29.jpg'
    },
    {
    id:2, nombre: 'Will Smith', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Nobel_Peace_Price_Concert_2009_Will_Smith_and_Jada_Pinkett_Smith_with_children2.jpg/330px-Nobel_Peace_Price_Concert_2009_Will_Smith_and_Jada_Pinkett_Smith_with_children2.jpg'
    },
    {
    id:3, nombre: 'Heath Ledger', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Heath_Ledger_%282%29.jpg/500px-Heath_Ledger_%282%29.jpg'
    }
];

@Input({required:true})
actoresSeleccionados: ActorAutoCompleteDTO[] = [];

columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

@ViewChild(MatTable) 
table!: MatTable<ActorAutoCompleteDTO>;

actorSeleccionado(event: MatAutocompleteSelectedEvent){
  this.actoresSeleccionados.push(event.option.value);
  this.control.patchValue('');
  if(this.table != undefined) {
    this.table.renderRows();
  }
}

finalizarArrastre(event : CdkDragDrop<any[]>) {
  const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);
  moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
  this.table.renderRows();
}

eliminar(actor: ActorAutoCompleteDTO) {
  const indice = this.actoresSeleccionados.findIndex((a:ActorAutoCompleteDTO) => a.id === actor.id);
  this.actoresSeleccionados.splice(indice, 1);
  this.table.renderRows();
}
}
