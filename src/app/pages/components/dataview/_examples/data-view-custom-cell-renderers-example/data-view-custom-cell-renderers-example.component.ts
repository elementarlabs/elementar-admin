import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { DataViewCellRenderer, DataViewColumnDef, DataViewComponent } from '@elementar/components';

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  enabled: boolean;
  website: string;
  avatar: {
    url: string;
    color: string;
  };
  createdAt: string;
}

export function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: {
      url: faker.image.avatar(),
      color: faker.color.human()
    },
    enabled: Math.random() > .5,
    website: faker.internet.url(),
    name: faker.person.fullName(),
    createdAt: faker.date.past().toDateString()
  };
}

@Component({
  selector: 'app-data-view-custom-cell-renderers-example',
  standalone: true,
  imports: [
    DataViewComponent
  ],
  templateUrl: './data-view-custom-cell-renderers-example.component.html',
  styleUrl: './data-view-custom-cell-renderers-example.component.scss'
})
export class DataViewCustomCellRenderersExampleComponent implements OnInit {
  columnDefs: DataViewColumnDef[] = [
    {
      name: 'Id',
      dataField: 'id',
      visible: false
    },
    {
      name: 'User',
      dataField: 'id',
      dataRenderer: 'user',
      visible: true,
      width: '300px'
    },
    {
      name: 'Enabled',
      dataField: 'enabled',
      dataRenderer: 'enabled',
      visible: true
    },
    {
      name: 'Created At',
      dataField: 'createdAt',
      dataRenderer: 'date',
      visible: true
    },
    {
      name: 'Website',
      dataField: 'website',
      dataRenderer: 'link',
      visible: true
    }
  ];
  data: User[] = [];
  cellRenderers: DataViewCellRenderer[] = [
    {
      dataRenderer: 'user',
      component: () => import('../../_prebuilt-renderers/user-cell/user-cell.renderer').then(c => c.UserCellRenderer)
    },
    {
      dataRenderer: 'date',
      component: () => import('../../_prebuilt-renderers/date-cell/date-cell.renderer').then(c => c.DateCellRenderer)
    },
    {
      dataRenderer: 'enabled',
      component: () => import('../../_prebuilt-renderers/enabled-cell/enabled-cell.renderer').then(c => c.EnabledCellRenderer)
    },
    {
      dataRenderer: 'link',
      component: () => import('../../_prebuilt-renderers/link-cell/link-cell.renderer').then(c => c.LinkCellRenderer)
    }
  ];

  ngOnInit() {
    this.data = faker.helpers.multiple(createRandomUser, {
      count: 5,
    });
  }
}
