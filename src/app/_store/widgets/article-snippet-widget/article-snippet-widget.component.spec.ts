import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSnippetWidgetComponent } from './article-snippet-widget.component';

describe('ArticleSnippetWidgetComponent', () => {
  let component: ArticleSnippetWidgetComponent;
  let fixture: ComponentFixture<ArticleSnippetWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSnippetWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleSnippetWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
