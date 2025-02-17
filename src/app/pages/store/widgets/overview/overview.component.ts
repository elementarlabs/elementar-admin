import { Component } from '@angular/core';

import { PageComponent } from '@meta/page/page.component';
import { PageContentDirective } from '@meta/page/page-content.directive';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { AvgClickRateExampleComponent } from '../_examples/avg-click-rate-example/avg-click-rate-example.component';
import { AvgOpenRateExampleComponent } from '../_examples/avg-open-rate-example/avg-open-rate-example.component';
import {
  BankAccountCardExampleComponent
} from '../_examples/bank-account-card-example/bank-account-card-example.component';
import {
  BankCreditCardExampleComponent
} from '../_examples/bank-credit-card-example/bank-credit-card-example.component';
import { CurrentPlanExampleComponent } from '../_examples/current-plan-example/current-plan-example.component';
import {
  CustomerSatisfactionExampleComponent
} from '../_examples/customer-satisfaction-example/customer-satisfaction-example.component';
import { EventsExampleComponent } from '../_examples/events-example/events-example.component';
import { ExchangeExampleComponent } from '../_examples/exchange-example/exchange-example.component';
import { MyInvestmentsExampleComponent } from '../_examples/my-investments-example/my-investments-example.component';
import {
  PaymentInformationExampleComponent
} from '../_examples/payment-information-example/payment-information-example.component';
import {
  PurchasesByChannelsExampleComponent
} from '../_examples/purchases-by-channels-example/purchases-by-channels-example.component';
import { SiteVisitorsExampleComponent } from '../_examples/site-visitors-example/site-visitors-example.component';
import {
  TasksInProgressExampleComponent
} from '../_examples/tasks-in-progress-example/tasks-in-progress-example.component';
import { TeamExampleComponent } from '../_examples/team-example/team-example.component';
import { TodaySalesExampleComponent } from '../_examples/today-sales-example/today-sales-example.component';
import { TodosExampleComponent } from '../_examples/todos-example/todos-example.component';
import { TotalProjectsExampleComponent } from '../_examples/total-projects-example/total-projects-example.component';
import { TotalRevenueExampleComponent } from '../_examples/total-revenue-example/total-revenue-example.component';
import {
  TotalSubscribersExampleComponent
} from '../_examples/total-subscribers-example/total-subscribers-example.component';
import { TotalTasksExampleComponent } from '../_examples/total-tasks-example/total-tasks-example.component';
import { TransactionsExampleComponent } from '../_examples/transactions-example/transactions-example.component';
import { UniqueVisitorsExampleComponent } from '../_examples/unique-visitors-example/unique-visitors-example.component';
import { VisitDurationExampleComponent } from '../_examples/visit-duration-example/visit-duration-example.component';
import { VisitInsightsExampleComponent } from '../_examples/visit-insights-example/visit-insights-example.component';

@Component({
  imports: [
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    AvgClickRateExampleComponent,
    AvgOpenRateExampleComponent,
    BankAccountCardExampleComponent,
    BankCreditCardExampleComponent,
    CurrentPlanExampleComponent,
    CustomerSatisfactionExampleComponent,
    EventsExampleComponent,
    ExchangeExampleComponent,
    MyInvestmentsExampleComponent,
    PaymentInformationExampleComponent,
    PurchasesByChannelsExampleComponent,
    SiteVisitorsExampleComponent,
    TasksInProgressExampleComponent,
    TeamExampleComponent,
    TodaySalesExampleComponent,
    TodosExampleComponent,
    TotalProjectsExampleComponent,
    TotalRevenueExampleComponent,
    TotalSubscribersExampleComponent,
    TotalTasksExampleComponent,
    TransactionsExampleComponent,
    UniqueVisitorsExampleComponent,
    VisitDurationExampleComponent,
    VisitInsightsExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
