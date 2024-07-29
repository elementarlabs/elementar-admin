import { Component } from '@angular/core';
import { AngularNodeViewComponent } from '../angular-node-view.component';
import { EmrUploadModule, UploadSelectedEvent } from '@elementar/components/upload';

@Component({
  selector: 'emr-image-ext',
  standalone: true,
  imports: [
    EmrUploadModule
  ],
  templateUrl: './image-ext.component.html',
  styleUrl: './image-ext.component.scss'
})
export class ImageExtComponent extends AngularNodeViewComponent {
  src = '';

  onSelected(event: UploadSelectedEvent) {
    const file = event.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.src = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }
}
