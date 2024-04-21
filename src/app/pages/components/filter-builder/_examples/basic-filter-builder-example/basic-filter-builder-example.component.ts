import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  EmrFilterBuilderModule,
  FilterBuilderFieldDef, FilterBuilderGroup,
  FilterBuilderItemType,
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
    // ['category', 'anyof', ['automation', 'monitors']],
    // 'or',
    // [
    //   ['category', 'equals', 'televisions'],
    //   'and',
    //   ['price', 'between', [2000, 4000]],
    // ]
    {
      logicalOperator: 'or',
      value: [

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
