import { Component } from '@angular/core';
import {
  MatList,
  MatListItem,
  MatListItemIcon, MatListItemLine,
  MatListItemTitle,
  MatListSubheaderCssMatStyler
} from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
    selector: 'app-list-with-sections-example',
    imports: [
        MatListSubheaderCssMatStyler,
        MatList,
        MatDivider,
        MatIcon,
        MatListItemIcon,
        MatListItem,
        DatePipe,
        MatListItemTitle,
        MatListItemLine
    ],
    templateUrl: './list-with-sections-example.component.html',
    styleUrl: './list-with-sections-example.component.scss'
})
export class ListWithSectionsExampleComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}
