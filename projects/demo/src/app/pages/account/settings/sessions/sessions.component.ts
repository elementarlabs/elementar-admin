import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';

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
  imports: [
    MatButton,
    MatCell,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatTable,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef,
    MatHeaderRowDef,
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
