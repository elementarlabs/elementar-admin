import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelBodyComponent } from './panel-body/panel-body.component';
import { PanelFooterComponent } from './panel-footer/panel-footer.component';

@NgModule({
    imports: [
        CommonModule,
        PanelComponent,
        PanelHeaderComponent,
        PanelBodyComponent,
        PanelFooterComponent
    ],
    exports: [
        PanelComponent,
        PanelHeaderComponent,
        PanelBodyComponent,
        PanelFooterComponent
    ]
})
export class EmrPanelModule { }
