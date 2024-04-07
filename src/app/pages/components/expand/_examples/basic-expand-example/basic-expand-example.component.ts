import { Component } from '@angular/core';
import { EmrExpandModule } from '@components/expand';

@Component({
  selector: 'app-basic-expand-example',
  standalone: true,
  imports: [
    EmrExpandModule
  ],
  templateUrl: './basic-expand-example.component.html',
  styleUrl: './basic-expand-example.component.scss'
})
export class BasicExpandExampleComponent {
  expanded = false;
}
