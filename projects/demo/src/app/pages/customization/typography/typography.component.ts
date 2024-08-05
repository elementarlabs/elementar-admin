import { Component } from '@angular/core';
import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { EmrAlertModule } from '@elementar/components/alert';
import { FormsModule } from '@angular/forms';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  standalone: true,
  imports: [
    PageComponent,
    PageContentDirective,
    EmrAlertModule,
    FormsModule,
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {
  typographyClass = 'mat-typography';
}
