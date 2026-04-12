import { Component, input } from '@angular/core';
import { CardAction, CardComponent, CardContent, CardTitle } from '../../../shared/component/card/card.component';
import { Bean } from '../../model/Bean';

@Component({
  selector: 'app-bean-card',
  imports: [CardComponent, CardTitle, CardContent, CardAction],
  templateUrl: './bean-card.component.html',
  styleUrl: './bean-card.component.css'
})
export class BeanCardComponent {
  bean = input.required<Bean>();
}
