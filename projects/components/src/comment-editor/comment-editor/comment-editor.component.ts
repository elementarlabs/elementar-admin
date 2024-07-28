import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  viewChild
} from '@angular/core';
import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import CodeBlock from '@tiptap/extension-code-block';
import { Blockquote } from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import FloatingMenu from '@tiptap/extension-floating-menu';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'emr-comment-editor',
  exportAs: 'emrCommentEditor',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatButton
  ],
  templateUrl: './comment-editor.component.html',
  styleUrl: './comment-editor.component.scss'
})
export class CommentEditorComponent implements OnDestroy {
  private _elementRef = inject(ElementRef);
  private _content = viewChild.required<ElementRef>('content');
  private _floatingMenu = viewChild.required<ElementRef>('floatingMenu');
  protected _value = '';
  protected editor: Editor;
  readonly send = output<string>();

  placeholder = input('Write something …');

  constructor() {
    afterNextRender(() => {
      this._init();
    });
  }

  get chainFocus(): any {
    return this.editor.chain().focus();
  }

  isCommandDisabled(command: string): boolean | null {
    const canFocus = this.editor.can().chain().focus() as any;
    return !canFocus[command]().run() || null;
  }

  ngOnDestroy() {
    this.editor?.destroy();
  }

  onButtonClick(command: string): void {
    const chainFocus = this.editor.chain().focus() as any;
    chainFocus[command]().run();
  }

  onSend(): void {
    this.send.emit(this._value);
    this._value = '';
  }

  private _init(): void {
    this.editor = new Editor({
      element: this._content().nativeElement,
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        Italic,
        Strike,
        Blockquote,
        CodeBlock,
        BulletList,
        ListItem,
        Link,
        Placeholder.configure({
          placeholder: this.placeholder()
        }),
        FloatingMenu.configure({
          element: this._floatingMenu().nativeElement
        })
      ],
      autofocus: true,
      content: '',
      onUpdate: ({ editor }) => {
        this._value = !editor.isEmpty ? editor.getHTML() : '';
      }
    });
  }
}
