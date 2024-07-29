import { mergeAttributes, Node } from '@tiptap/core'
import { ImageExtComponent } from './image-ext/image-ext.component';
import { Injector } from '@angular/core';
import { AngularNodeViewRenderer } from './angular-node-view-renderer';

const ImageExtExtension = (injector: Injector): Node => {
  return Node.create({
    name: 'imageExt',
    group: 'block',
    atom: true,
    addNodeView() {
      return AngularNodeViewRenderer(ImageExtComponent, { injector });
    },
    parseHTML() {
      return [
        {
          tag: 'image-ext',
        },
      ]
    },
    renderHTML({ HTMLAttributes }) {
      return ['image-ext', mergeAttributes(HTMLAttributes)]
    },
  })
};

export default ImageExtExtension;
