import { Component, inject, OnInit } from '@angular/core';
import {
  DataViewCellRenderer,
  DataViewColumnDef,
  DataViewComponent,
  DataViewRowSelectionEvent,
  EmrPanelModule,
  EmrSegmentedModule, VDividerComponent
} from '@elementar/components';
import { MatPaginator } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  title: string;
  author: User;
  status: string;
  createdAt: Date;
  publishedAt?: Date;
}

@Component({
  standalone: true,
  imports: [
    EmrPanelModule,
    DataViewComponent,
    MatPaginator,
    FormsModule,
    EmrSegmentedModule,
    MatButton,
    MatIcon,
    VDividerComponent,
    MatIconButton
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  private _httpClient = inject(HttpClient);

  status = 'all';
  columnDefs: DataViewColumnDef[] = [
    {
      name: 'Id',
      dataField: 'id',
      visible: false
    },
    {
      name: 'Title',
      dataField: 'title',
      visible: true
    },
    {
      name: 'Author',
      dataField: 'author',
      dataRenderer: 'author',
      visible: true
    },
    {
      name: 'Created At',
      dataField: 'createdAt',
      dataRenderer: 'date',
      visible: true
    },
    {
      name: 'Published At',
      dataField: 'publishedAt',
      dataRenderer: 'date',
      visible: true
    }
  ];
  data: Post[] = [];
  selectedRows: Post[] = [];
  cellRenderers: DataViewCellRenderer[] = [
    {
      dataRenderer: 'author',
      component: () => import('../_renderers/dv-author-renderer/dv-author-renderer.component').then(c => c.DvAuthorRendererComponent)
    },
    {
      dataRenderer: 'date',
      component: () => import('../_renderers/dv-date-renderer/dv-date-renderer.component').then(c => c.DvDateRendererComponent)
    }
  ];

  ngOnInit() {
    this._httpClient
      .get<Post[]>('/assets/mockdata/content-post-list.json')
      .subscribe(data => {
        this.data = data;
      })
    ;
  }

  rowSelectionChanged(event: DataViewRowSelectionEvent<Post>): void {
    // console.log(event.checked);
  }

  selectionChanged(rows: Post[]): void {
    this.selectedRows = rows;
  }

  allRowsSelectionChanged(isAllSelected: boolean): void {
    // console.log(isAllSelected);
  }
}
