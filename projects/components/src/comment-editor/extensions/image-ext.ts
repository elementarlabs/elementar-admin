import { mergeAttributes, Node } from '@tiptap/core'
import { ImageExtComponent } from './image-ext/image-ext.component';
import { Injector } from '@angular/core';
import { AngularNodeViewRenderer } from './angular-node-view-renderer';

interface ImageExtExtensionOptions {
}

const ImageExtExtension = (injector: Injector, options?: ImageExtExtensionOptions): Node => {
  return Node.create({
    name: 'imageExt',
    draggable: true,
    defining: true,
    group: 'block',
    content: 'image*',
    addOptions() {
      return {
        HTMLAttributes: {},
      }
    },
    addAttributes() {
      return {
        src: {
          default: null,
        },
        caption: {
          default: null
        }
      };
    },
    addNodeView() {
      return AngularNodeViewRenderer(ImageExtComponent, { injector });
    },
    parseHTML() {
      return [
        {
          tag: 'image-ext',
        }
      ]
    },
    renderHTML({ HTMLAttributes }) {
      return [
        'figure',
        [
          'img',
          mergeAttributes(HTMLAttributes),
        ],
        ['figcaption', HTMLAttributes['caption']],
      ];
    }
  })
};

export default ImageExtExtension;
