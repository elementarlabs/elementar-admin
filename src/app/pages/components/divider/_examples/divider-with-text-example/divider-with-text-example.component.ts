import { Component } from '@angular/core';
import { EmrDividerModule } from '@components/divider/divider.module';

@Component({
  selector: 'app-divider-with-text-example',
  standalone: true,
  imports: [
    EmrDividerModule
  ],
  templateUrl: './divider-with-text-example.component.html',
  styleUrl: './divider-with-text-example.component.scss'
})
export class DividerWithTextExampleComponent {

}
