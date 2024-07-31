import { Component, input, OnInit } from '@angular/core';
import { AngularNodeViewComponent } from '../angular-node-view.component';
import { EmrUploadModule, UploadSelectedEvent } from '@elementar/components/upload';

@Component({
  selector: 'emr-image-ext',
  standalone: true,
  imports: [
    EmrUploadModule
  ],
  templateUrl: './image-ext.component.html',
  styleUrl: './image-ext.component.scss',
  host: {
    '[class.selected]': 'selected'
  }
})
export class ImageExtComponent extends AngularNodeViewComponent implements OnInit {
  protected src = '';

  ngOnInit() {
    // console.log(this.node.attrs);
  }

  onSelected(event: UploadSelectedEvent) {
    const file = event.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const src = reader.result as string;
      // this.editor.chain().insertContentAt(this.getPos(), {
      //   type: 'image',
      //   attrs: {
      //     src
      //   },
      // }).focus().run()
    };
    reader.onerror = (error) => {
      // console.log('Error: ', error);
    };
  }
}
