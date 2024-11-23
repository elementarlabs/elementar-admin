import { Component } from '@angular/core';
import { MchartPieComponent } from '@elementar/components/micro-chart';
import { ShuffleArrayPipe } from '@demo/meta/shuffle-array.pipe';
import { MatButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mchart-pie-basic-example',
  imports: [
    MchartPieComponent,
    ShuffleArrayPipe,
    MatButton,
    MatSlideToggle,
    FormsModule
  ],
  templateUrl: './mchart-pie-basic-example.component.html',
  styleUrl: './mchart-pie-basic-example.component.scss'
})
export class MchartPieBasicExampleComponent {
  data1 = [1, 2, 3];
  data2 = [5, 2, 3];
  data3 = [1, 2, 3, 4];
  data4 = [6, 2, 3, 8, 10];

  showDataAnimation = true;

  refreshData(): void {
    this.data1 = this._shuffleArray(this.data1);
    this.data2 = this._shuffleArray(this.data2);
    this.data3 = this._shuffleArray(this.data3);
    this.data4 = this._shuffleArray(this.data4);
  }

  private _shuffleArray(data: number[]): number[] {
    return [...data.sort(() => .5 - Math.random())];
  }
}
