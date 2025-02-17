import { Component } from '@angular/core';
import { ExpandComponent } from '@elementar-ui/components';

@Component({
  selector: 'app-basic-expand-example',
  imports: [
    ExpandComponent
  ],
  templateUrl: './basic-expand-example.component.html',
  styleUrl: './basic-expand-example.component.scss'
})
export class BasicExpandExampleComponent {
  expanded = false;
}
