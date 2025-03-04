import { booleanAttribute, Component, input, Input } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'emr-suggestion-block',
  exportAs: 'emrSuggestionBlock',
  imports: [
    MatDivider
  ],
  templateUrl: './suggestion-block.component.html',
  styleUrl: './suggestion-block.component.scss'
})
export class SuggestionBlockComponent {
  heading = input();
  showDivider = input(false, {
    transform: booleanAttribute,
  });
  inline = input(false, {
    transform: booleanAttribute,
  });
}
