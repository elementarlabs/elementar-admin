import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { PopoverComponent, PopoverTriggerForDirective } from '@elementar-ui/components';

@Component({
  selector: 'app-basic-popover-example',
  imports: [
    MatButton,
    PopoverTriggerForDirective,
    PopoverComponent
  ],
  templateUrl: './basic-popover-example.component.html',
  styleUrl: './basic-popover-example.component.scss'
})
export class BasicPopoverExampleComponent {

}
