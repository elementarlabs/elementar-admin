import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import { MatDivider } from '@angular/material/divider';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { CurrentPlanWidgetComponent, PaymentInformationWidgetComponent } from '@elementar/store/widgets';

const TABLE_DATA = [
  {
    invoiceId: '#INV11 - Mar 2024',
    date: new Date(),
    amount: '40.53',
    status: {
      id: 'paid',
      name: 'Paid'
    }
  },
  {
    invoiceId: '#INV12 - Mar 2024',
    date: new Date(),
    amount: '10.00',
    status: {
      id: 'paid',
      name: 'Paid'
    }
  },
  {
    invoiceId: '#INV13 - Mar 2024',
    date: new Date(),
    amount: '4.99',
    status: {
      id: 'unpaid',
      name: 'Unpaid'
    }
  },
  {
    invoiceId: '#INV14 - Mar 2024',
    date: new Date(),
    amount: '180.00',
    status: {
      id: 'pending',
      name: 'Pending'
    }
  },
  {
    invoiceId: '#INV15 - Mar 2024',
    date: new Date(),
    amount: '499.99',
    status: {
      id: 'paid',
      name: 'Paid'
    }
  },
  {
    invoiceId: '#INV16 - Mar 2024',
    date: new Date(),
    amount: '20.28',
    status: {
      id: 'paid',
      name: 'Paid'
    }
  },
  {
    invoiceId: '#INV17 - Mar 2024',
    date: new Date(),
    amount: '40.53',
    status: {
      id: 'paid',
      name: 'Paid'
    }
  },
];
@Component({
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatSlideToggle,
    MatButton,
    RouterLink,
    CurrentPlanWidgetComponent,
    PaymentInformationWidgetComponent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatDivider,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    DatePipe,
    MatIcon
  ],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent implements AfterViewInit {
  dataSource = new MatTableDataSource(TABLE_DATA);
  displayedColumns = ['invoiceId', 'date', 'amount', 'status', 'invoice'];
  billingInfo = {
    firstName: 'Pavel',
    lastName: 'Salauyou',
    address: 'Abbey Street 87',
    country: 'United Kingdom',
    city: 'London'
  };

  @ViewChild('paginator')
  paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
