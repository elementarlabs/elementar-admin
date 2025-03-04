import { Component, signal } from '@angular/core';
import { ScreenLoaderComponent } from '@elementar-ui/components/screen-loader';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-basic-screen-loader-example',
  imports: [
    ScreenLoaderComponent,
    MatButton
  ],
  templateUrl: './basic-screen-loader-example.component.html',
  styleUrl: './basic-screen-loader-example.component.scss'
})
export class BasicScreenLoaderExampleComponent {
  opened = signal(false);

  openScreenLoader() {
    this.opened.set(true);
    setTimeout(() => {
      this.opened.set(false);
    }, 5000);
  }
}
