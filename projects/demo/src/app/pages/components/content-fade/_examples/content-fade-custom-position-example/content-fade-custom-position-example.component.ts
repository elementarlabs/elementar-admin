import { Component } from '@angular/core';
import { ContentFadeComponent, ContentFadePosition } from '@elementar/components/content-fade';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-fade-custom-position-example',
  standalone: true,
  imports: [
    ContentFadeComponent,
    MatRadioGroup,
    MatRadioButton,
    FormsModule
  ],
  templateUrl: './content-fade-custom-position-example.component.html',
  styleUrl: './content-fade-custom-position-example.component.scss'
})
export class ContentFadeCustomPositionExampleComponent {
  position: ContentFadePosition = 'both';
}
