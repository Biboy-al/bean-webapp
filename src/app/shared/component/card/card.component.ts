import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector:'card-title',
  template: `<ng-content></ng-content>`
})
export class CardTitle{
  
}

@Component({
  selector:'card-content',
  template: `<ng-content></ng-content>`
})
export class CardContent{
  
}

@Component({
  selector:'card-action',
  template: `<ng-content></ng-content>`
})
export class CardAction{
  
}

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
