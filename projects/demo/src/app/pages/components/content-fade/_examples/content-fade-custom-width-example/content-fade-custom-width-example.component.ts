import { Component } from '@angular/core';
import { ContentFadeComponent, ContentFadePosition } from '@elementar/components/content-fade';

@Component({
  selector: 'app-content-fade-custom-width-example',
  standalone: true,
  imports: [
    ContentFadeComponent
  ],
  templateUrl: './content-fade-custom-width-example.component.html',
  styleUrl: './content-fade-custom-width-example.component.scss'
})
export class ContentFadeCustomWidthExampleComponent {
}
