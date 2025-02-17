import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsWithIconsExampleComponent } from './breadcrumbs-with-icons-example.component';

describe('BreadcrumbsWithIconsExampleComponent', () => {
  let component: BreadcrumbsWithIconsExampleComponent;
  let fixture: ComponentFixture<BreadcrumbsWithIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsWithIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbsWithIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
