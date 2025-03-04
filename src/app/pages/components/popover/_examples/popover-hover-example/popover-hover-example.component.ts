import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { PopoverComponent, PopoverTriggerForDirective } from '@elementar-ui/components/popover';

@Component({
  selector: 'app-popover-hover-example',
  imports: [
    MatButton,
    PopoverComponent,
    PopoverTriggerForDirective
  ],
  templateUrl: './popover-hover-example.component.html',
  styleUrl: './popover-hover-example.component.scss'
})
export class PopoverHoverExampleComponent {

}
