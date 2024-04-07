import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { EmrPopoverModule } from '@components/popover';

@Component({
  selector: 'app-popover-hover-example',
  standalone: true,
  imports: [
    MatButton,
    EmrPopoverModule
  ],
  templateUrl: './popover-hover-example.component.html',
  styleUrl: './popover-hover-example.component.scss'
})
export class PopoverHoverExampleComponent {

}
