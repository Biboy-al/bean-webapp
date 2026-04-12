import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeanCardComponent } from './bean/component/bean-card/bean-card.component';
import { Bean } from './bean/model/Bean';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BeanCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bean-webapp';

  beans: Bean[] = [
    {
      name: 'Bean 1',
      description: 'This is a nice Bean',
      reviews: []
    },
    {
      name: 'Bean 2',
      description: 'This is not a nice Bean',
      reviews: []
    },
    
  ]
}
