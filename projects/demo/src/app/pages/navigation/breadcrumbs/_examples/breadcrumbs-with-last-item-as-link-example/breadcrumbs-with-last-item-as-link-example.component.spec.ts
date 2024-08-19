import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsWithLastItemAsLinkExampleComponent } from './breadcrumbs-with-last-item-as-link-example.component';

describe('BreadcrumbsWithLastItemAsLinkExampleComponent', () => {
  let component: BreadcrumbsWithLastItemAsLinkExampleComponent;
  let fixture: ComponentFixture<BreadcrumbsWithLastItemAsLinkExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsWithLastItemAsLinkExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsWithLastItemAsLinkExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
