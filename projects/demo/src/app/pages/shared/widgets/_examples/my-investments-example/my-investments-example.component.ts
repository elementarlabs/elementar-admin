import { Component } from '@angular/core';
import { MyInvestmentsComponent } from '@elementar/shared/widgets';

@Component({
  selector: 'app-my-investments-example',
  standalone: true,
  imports: [
    MyInvestmentsComponent
  ],
  templateUrl: './my-investments-example.component.html',
  styleUrl: './my-investments-example.component.scss'
})
export class MyInvestmentsExampleComponent {

}
