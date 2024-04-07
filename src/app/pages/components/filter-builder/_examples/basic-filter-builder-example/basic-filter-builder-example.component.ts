import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EmrFilterBuilderModule } from '@components/filter-builder';

@Component({
  selector: 'app-basic-filter-builder-example',
  standalone: true,
  imports: [
    MatIcon,
    EmrFilterBuilderModule
  ],
  templateUrl: './basic-filter-builder-example.component.html',
  styleUrl: './basic-filter-builder-example.component.scss'
})
export class BasicFilterBuilderExampleComponent {
  filter = [
    ['category', 'anyof', ['automation', 'monitors']],
    'or',
    [
      ['category', '=', 'televisions'],
      'and',
      ['price', 'between', [2000, 4000]],
    ]
  ];
  fields = [
    {
      id: 'name',
      name: 'Name',
      type: 'text'
    },
    {
      id: 'price',
      name: 'Price',
      type: 'number',
      format: 'currency',
    },
    {
      id: 'category',
      name: 'Category',
      type: 'array',
      filterOperations: ['equals', 'anyof'],
      lookup: {
        dataSource: [
          {
            id: 'video-players',
            name: 'Video Players'
          },
          {
            id: 'televisions',
            name: 'Televisions'
          },
          {
            id: 'monitors',
            name: 'Monitors'
          },
          {
            id: 'projectors',
            name: 'Projectors'
          },
          {
            id: 'automation',
            name: 'Automation'
          },
        ],
      },
    },
  ];
}
