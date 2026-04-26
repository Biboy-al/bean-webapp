import { Component } from '@angular/core';
import { BeanListComponent } from '../../../bean/component/bean-list/bean-list.component';

@Component({
  selector: 'app-landing-page',
  imports: [BeanListComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  
}
