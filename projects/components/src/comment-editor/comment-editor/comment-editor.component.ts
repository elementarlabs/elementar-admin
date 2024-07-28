import {
  afterNextRender,
  Component, DestroyRef,
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
import BubbleMenu from '@tiptap/extension-bubble-menu';
import Code from '@tiptap/extension-code';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { LinkDialog } from '@elementar/components/comment-editor/link/link.dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private _dialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);
  private _content = viewChild.required<ElementRef>('content');
  private _floatingMenu = viewChild.required<ElementRef>('floatingMenu');
  private _bubbleMenu = viewChild.required<ElementRef>('bubbleMenu');
  protected _value = '';
  protected editor: Editor;
  readonly send = output<string>();

  setLinkActive = false;

  placeholder = input('Write something …');

  constructor() {
    afterNextRender(() => {
      this._init();
    });
  }

  isCommandDisabled(command: string): boolean | null {
    const canFocus = this.editor.can().chain().focus() as any;
    return !canFocus[command]().run() || null;
  }

  ngOnDestroy() {
    this.editor?.destroy();
  }

  setLink(): void {
    this.setLinkActive = true;
    const dialogRef = this._dialog.open(LinkDialog, {
      data: {
        linkUrl: (this.editor.getAttributes('link') as HTMLLinkElement).href
      }
    });
    dialogRef
      .afterClosed()
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((linkUrl: string) => {
        this.setLinkActive = false;

        if (typeof linkUrl === 'undefined') {
          return;
        }

        this._setLink(linkUrl);
      })
    ;
  }

  unsetLink(): void {
    this.editor.commands.unsetLink()
  }

  getLinkUrl(): string | null {
    return (this.editor.getAttributes('link') as HTMLLinkElement).href || null;
  }

  onButtonClick(command: string): void {
    const chainFocus = this.editor.chain().focus() as any;
    chainFocus[command]().run();
  }

  onSend(): void {
    this.send.emit(this._value);
    this._value = '';
  }

  private _setLink(url: string): void {
    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .unsetLink()
        .run()
      ;
      return;
    }

    // update link
    this.editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run()
    ;
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
        Code,
        Link.configure({
          openOnClick: false,
          defaultProtocol: 'https',
        }),
        Placeholder.configure({
          placeholder: this.placeholder()
        }),
        FloatingMenu.configure({
          element: this._floatingMenu().nativeElement
        }),
        // image menu
        // BubbleMenu.configure({
        //   pluginKey: new PluginKey('bubbleMenuOne'),
        //   element: document.querySelector('.menu-one'),
        // }),
        BubbleMenu.configure({
          element: this._bubbleMenu().nativeElement,
          // shouldShow: ({ editor, view, state, oldState, from, to }) => {
          //   // only show the bubble menu for images and links
          //   // return editor.isActive('image') || editor.isActive('link');
          //
          //   return true;
          // },
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
