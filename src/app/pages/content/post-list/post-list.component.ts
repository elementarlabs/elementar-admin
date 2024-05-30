import { Component, OnInit } from '@angular/core';
import {
  DataViewColumnDef,
  DataViewComponent,
  DataViewRowSelectionEvent,
  EmrPanelModule,
  EmrSegmentedModule, VDividerComponent
} from '@elementar/components';
import { MatPaginator } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { faker } from '@faker-js/faker';

export interface User {
  id: string;
  username: string,
  name: string;
  email: string,
  avatar: string
}

export interface Post {
  id: string;
  title: string;
  author: User;
  status: string;
  createdAt: Date;
  publishedAt?: Date;
}

export function createRandomUser(): User {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    name: faker.person.fullName()
  };
}

export function createRandomPost(): Post {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
    createdAt: faker.date.past(),
    publishedAt: faker.date.past(),
    author: createRandomUser(),
    status: 'published'
  };
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
    VDividerComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
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
      visible: true
    },
    {
      name: 'Created At',
      dataField: 'createdAt',
      visible: true
    },
    {
      name: 'Published At',
      dataField: 'publishedAt',
      visible: true
    }
  ];
  data: Post[] = [];
  selectedRows: Post[] = [];

  ngOnInit() {
    this.data = faker.helpers.multiple(createRandomPost, {
      count: 50,
    });
  }

  rowSelectionChanged(event: DataViewRowSelectionEvent<Post>): void {
    console.log(event);
  }

  selectionChanged(rows: Post[]): void {
    this.selectedRows = rows;
  }

  allRowsSelectionChanged(isAllSelected: boolean): void {
    console.log(isAllSelected);
  }
}
