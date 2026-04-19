import { Component, input } from '@angular/core';
import { CardAction, CardComponent, CardContent, CardTitle } from '../../../shared/component/card/card.component';
import { Bean } from '../../model/Bean';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-bean-card',
  imports: [CardComponent, CardTitle, CardContent, CardAction, MatButtonModule],
  templateUrl: './bean-card.component.html',
  styleUrl: './bean-card.component.css'
})
export class BeanCardComponent {
  bean = input.required<Bean>();
}
