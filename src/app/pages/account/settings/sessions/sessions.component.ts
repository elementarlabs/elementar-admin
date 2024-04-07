import { Component } from '@angular/core';
import { EmrDividerModule } from '@components/divider/divider.module';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { DatePipe } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const WEB_BROWSERS_TABLE_DATA = [
  {
    browser: {
      name: 'Chrome on Mac OS X',
      type: 'chrome'
    },
    location: 'United Kingdom, London',
    recentActivity: {
      name: 'Current session',
      signedIn: new Date(),
      ipAddress: '192.168.0.1'
    }
  },
  {
    browser: {
      name: 'Chrome on Linux',
      type: 'chrome'
    },
    location: 'United Kingdom, London',
    recentActivity: {
      name: '15 Apr 2023',
      signedIn: new Date(),
      ipAddress: '192.168.0.1'
    }
  },
  {
    browser: {
      name: 'Firefox on Linux',
      type: 'firefox'
    },
    location: 'USA, New York',
    recentActivity: {
      name: '20 Jan 2023',
      signedIn: new Date(),
      ipAddress: '192.168.0.1'
    }
  },
  {
    browser: {
      name: 'Opera on Windows',
      type: 'opera'
    },
    location: 'USA, New York',
    recentActivity: {
      name: '20 Jan 2023',
      signedIn: new Date(),
      ipAddress: '192.168.0.1'
    }
  }
];
const DEVICES_TABLE_DATA = [
  {
    device: {
      name: 'Iphone 12 Pro',
      type: 'iphone'
    },
    location: 'United Kingdom, London',
    recentActivity: {
      name: 'Current session',
      signedIn: new Date(),
      ipAddress: '192.168.0.1'
    }
  },
  {
    device: {
      name: 'Ipad Pro',
      type: 'ipad'
    },
    location: 'United Kingdom, London',
    recentActivity: {
      name: 'about 2 years ago',
      signedIn: new Date(),
      ipAddress: '192.168.0.1'
    }
  },
  {
    device: {
      name: 'Android',
      type: 'android'
    },
    location: 'United Kingdom, London',
    recentActivity: {
      name: 'about 4 years ago',
      signedIn: new Date(),
      ipAddress: '192.168.0.1'
    }
  }
];

@Component({
  standalone: true,
  imports: [
    EmrDividerModule,
    MatButton,
    MatIcon,
    MatSlideToggle,
    DatePipe,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'
})
export class SessionsComponent {
  webBrowsersDataSource = new MatTableDataSource(WEB_BROWSERS_TABLE_DATA);
  webBrowsersDisplayedColumns = ['browser', 'location', 'recentActivity', 'terminate'];

  devicesDataSource = new MatTableDataSource(DEVICES_TABLE_DATA);
  devicesDisplayedColumns = ['browser', 'location', 'recentActivity', 'terminate'];
}
