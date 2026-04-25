import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCard } from "@angular/material/card";
import { Tile } from '@shared/model';


@Component({
  selector:'bean-header',
  template: `<h1>HII</h1>`
})
export class CardTitle{
  
}

@Component({
  selector: 'app-bean-page',
  imports: [MatGridListModule, MatCard],
  templateUrl: './bean-page.component.html',
  styleUrl: './bean-page.component.css'
})
export class BeanPageComponent {
  
  tiles: Tile[] = [
    // {cols: 3, rows: 1, content: <beanHeader>},
    // {cols: 1, rows: 2, content: null},
    // {cols: 1, rows: 1, content: null},
    // {cols: 2, rows: 1, content: null},
  ];


}
