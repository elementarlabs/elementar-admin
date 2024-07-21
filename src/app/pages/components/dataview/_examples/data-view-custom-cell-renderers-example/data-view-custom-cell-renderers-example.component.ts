import { Component, inject, OnInit } from '@angular/core';
import { DataViewCellRenderer, DataViewColumnDef, DataViewComponent } from '@elementar/components/data-view';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: string | number;
  username: string;
  name: string;
  email: string;
  enabled: boolean | null;
  website: string;
  avatarUrl: string;
  createdAt: string;
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
  private _httpClient = inject(HttpClient);

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
  data: User[] = []
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
    this._httpClient
      .get<User[]>('/assets/mockdata/data-view-custom-cell-renderers.json')
      .subscribe(data => {
        this.data = data;
      })
    ;
  }
}
