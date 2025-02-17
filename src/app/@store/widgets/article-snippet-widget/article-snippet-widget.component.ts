import { Component, inject, input, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { DASHBOARD, Dashboard, Widget } from '@elementar-ui/components';
import { DatePipe } from '@angular/common';

export interface ArticleSnippetWidget extends Widget {
  title: string;
  publishedAt: Date | string;
  imagePreviewUrl: string;
}

@Component({
  selector: 'emr-article-snippet-widget',
  imports: [
    MatRipple,
    DatePipe
  ],
  templateUrl: './article-snippet-widget.component.html',
  styleUrl: './article-snippet-widget.component.css'
})
export class ArticleSnippetWidgetComponent implements OnInit {
  private _dashboard = inject<Dashboard>(DASHBOARD, { optional: true });

  widget = input.required<ArticleSnippetWidget>();

  ngOnInit() {
    if (this._dashboard && this.widget()) {
      this._dashboard.markWidgetAsLoaded(this.widget()?.id);
    }
  }
}
