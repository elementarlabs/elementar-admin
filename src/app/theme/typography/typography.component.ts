import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageComponent } from '@meta/page/page.component';

@Component({
  imports: [
    FormsModule,
    PageComponent,
  ],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {

}
