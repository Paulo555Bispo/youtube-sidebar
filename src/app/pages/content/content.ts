import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-content',
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {

}
