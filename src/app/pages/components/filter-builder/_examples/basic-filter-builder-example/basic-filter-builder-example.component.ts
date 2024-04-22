import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  EmrFilterBuilderModule,
  FilterBuilderFieldDef,
  FilterBuilderGroup,
  IconComponent
} from '@elementar/components';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-basic-filter-builder-example',
  standalone: true,
  imports: [
    MatIcon,
    EmrFilterBuilderModule,
    IconComponent,
    JsonPipe
  ],
  templateUrl: './basic-filter-builder-example.component.html',
  styleUrl: './basic-filter-builder-example.component.scss'
})
export class BasicFilterBuilderExampleComponent {
  value: FilterBuilderGroup[] = [
    {
      logicalOperator: 'or',
      value: [
        {
          logicalOperator: 'and',
          value: [
            // {
            //   value: ['category', 'equals', 'televisions']
            // },
            {
              value: ['price', 'isBetween', [2000, 4000]]
            }
          ]
        }
      ]
    }
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
      dataField: 'price'
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
