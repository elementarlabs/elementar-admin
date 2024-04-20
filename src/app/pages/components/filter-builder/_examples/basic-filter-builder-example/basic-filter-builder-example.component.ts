import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EmrFilterBuilderModule, FilterBuilderFieldDef, IconComponent } from '@elementar/components';

@Component({
  selector: 'app-basic-filter-builder-example',
  standalone: true,
  imports: [
    MatIcon,
    EmrFilterBuilderModule,
    IconComponent
  ],
  templateUrl: './basic-filter-builder-example.component.html',
  styleUrl: './basic-filter-builder-example.component.scss'
})
export class BasicFilterBuilderExampleComponent {
  filter = [
    ['category', 'anyof', ['automation', 'monitors']],
    'or',
    [
      ['category', 'equals', 'televisions'],
      'and',
      ['price', 'between', [2000, 4000]],
    ]
  ];
  fieldDefs: FilterBuilderFieldDef[] = [
    {
      name: 'Name',
      dataType: 'string',
      dataField: 'name'
    },
    {
      name: 'Price',
      format: 'currency',
      dataType: 'number',
      dataField: 'currency'
    },
    {
      dataType: 'array',
      dataField: 'category',
      name: 'Category',
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
