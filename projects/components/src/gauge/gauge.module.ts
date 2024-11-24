import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeComponent } from './gauge/gauge.component';
import { GaugeValueComponent } from './gauge-value/gauge-value.component';

@NgModule({
    imports: [
        CommonModule,
        GaugeComponent,
        GaugeValueComponent
    ],
    exports: [
        GaugeComponent,
        GaugeValueComponent
    ]
})
export class EmrGaugeModule { }
