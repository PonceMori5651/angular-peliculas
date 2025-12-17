import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ MatToolbarModule, MatIconModule, MatButtonModule, RouterLink ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  
}
