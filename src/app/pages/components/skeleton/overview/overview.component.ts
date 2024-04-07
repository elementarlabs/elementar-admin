import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicSkeletonExampleComponent } from '../_examples/basic-skeleton-example/basic-skeleton-example.component';

@Component({
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicSkeletonExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
