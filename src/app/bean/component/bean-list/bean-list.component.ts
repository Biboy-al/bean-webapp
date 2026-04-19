import { Component } from '@angular/core';
import { Bean } from '../../model/Bean';
import { BeanCardComponent } from '../bean-card/bean-card.component';

@Component({
  selector: 'app-bean-list',
  imports: [BeanCardComponent],
  templateUrl: './bean-list.component.html',
  styleUrl: './bean-list.component.css'
})
export class BeanListComponent {
  beans: Bean[] = [
    {
      id: 1,
      name: 'Bean 1',
      description: 'This is a nice Bean',
      reviews: []
    },
    {
      id: 2,
      name: 'Bean 2',
      description: 'This is not a nice Bean',
      reviews: []
    },
    
  ]
}
