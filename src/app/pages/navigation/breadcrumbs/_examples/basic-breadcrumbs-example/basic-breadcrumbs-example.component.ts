import { Component } from '@angular/core';
import { EmrBreadcrumbsModule } from '@components/breadcrumbs';

@Component({
  selector: 'app-basic-breadcrumbs-example',
  standalone: true,
  imports: [
    EmrBreadcrumbsModule
  ],
  templateUrl: './basic-breadcrumbs-example.component.html',
  styleUrl: './basic-breadcrumbs-example.component.scss'
})
export class BasicBreadcrumbsExampleComponent {

}
