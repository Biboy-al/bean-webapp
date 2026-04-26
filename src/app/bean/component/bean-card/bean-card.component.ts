import { Component, inject, input } from '@angular/core';
// import { CardAction, CardComponent, CardContent, CardTitle } from '../../../shared/component/card/card.component';
import {CardAction, CardComponent, CardContent, CardTitle} from '@shared/component';
import { Bean } from '../../model/Bean';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bean-card',
  imports: [CardComponent, CardTitle, CardContent, CardAction, MatButtonModule, MatIconModule],
  templateUrl: './bean-card.component.html',
  styleUrl: './bean-card.component.css'
})
export class BeanCardComponent {
  bean = input.required<Bean>();
  private router = inject(Router);

  onClick = () =>{
    this.router.navigate(['/beans', this.bean().id]);
  };
}