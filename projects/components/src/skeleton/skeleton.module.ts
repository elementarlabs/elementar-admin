import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SkeletonCircleComponent } from './skeleton-circle/skeleton-circle.component';
import { SkeletonLineComponent } from './skeleton-line/skeleton-line.component';
import { SkeletonBlockComponent } from './skeleton-block/skeleton-block.component';

@NgModule({
    imports: [
        CommonModule,
        SkeletonComponent,
        SkeletonCircleComponent,
        SkeletonLineComponent,
        SkeletonBlockComponent
    ],
    exports: [
        SkeletonComponent,
        SkeletonCircleComponent,
        SkeletonLineComponent,
        SkeletonBlockComponent
    ]
})
export class EmrSkeletonModule { }
