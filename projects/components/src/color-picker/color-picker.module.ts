import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPickerTriggerForDirective } from './color-picker-trigger-for.directive';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerThumbnailComponent } from './color-picker-thumbnail/color-picker-thumbnail.component';
import { ChunksPipe } from './pipes/chunks.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SaturationComponent } from './saturation/saturation.component';
import { HueComponent } from './hue/hue.component';
import { AlphaComponent } from './alpha/alpha.component';
import { ColorPickerInputDirective } from './directives/color-picker-input.directive';

@NgModule({
    imports: [
        CommonModule,
        ColorPickerComponent,
        ColorPickerTriggerForDirective,
        ColorPickerInputDirective,
        ColorPickerThumbnailComponent,
        ChunksPipe,
        ReversePipe,
        SaturationComponent,
        HueComponent,
        AlphaComponent
    ],
    exports: [
        ColorPickerComponent,
        ColorPickerThumbnailComponent,
        ColorPickerTriggerForDirective
    ]
})
export class EmrColorPickerModule {
}
