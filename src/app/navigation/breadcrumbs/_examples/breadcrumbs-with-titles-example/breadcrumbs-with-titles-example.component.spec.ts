import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsWithTitlesExampleComponent } from './breadcrumbs-with-titles-example.component';

describe('BreadcrumbsWithTitlesExampleComponent', () => {
  let component: BreadcrumbsWithTitlesExampleComponent;
  let fixture: ComponentFixture<BreadcrumbsWithTitlesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsWithTitlesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbsWithTitlesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
