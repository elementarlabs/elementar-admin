import { afterNextRender, Component, ElementRef, viewChild } from '@angular/core';

import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { nord } from '@milkdown/theme-nord';
// import { tooltip } from '@milkdown/plugin-tooltip';
// import { slash } from '@milkdown/plugin-slash';
import { gfm } from '@milkdown/preset-gfm';
import { block } from '@milkdown/plugin-block';
import { indent } from '@milkdown/plugin-indent';
import { prism } from '@milkdown/plugin-prism';
import { cursor } from '@milkdown/plugin-cursor';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './post-manage.component.html',
  styleUrl: './post-manage.component.scss'
})
export class PostManageComponent {
  private _editorRef = viewChild.required<ElementRef<HTMLElement>>('editorRef');

  defaultValue = '# Milkdown x Angular';

  constructor() {
    afterNextRender(() => {
      this._init();
    });
  }

  private _init(): void {
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, this._editorRef().nativeElement);
        ctx.set(defaultValueCtx, this.defaultValue);
      })
      .config(nord)
      .use(commonmark)
      .use(gfm)
      // .use(tooltip)
      // .use(slash)
      .use(block)
      .use(indent)
      .use(prism)
      .use(cursor)
      .create()
    ;
  }
}
