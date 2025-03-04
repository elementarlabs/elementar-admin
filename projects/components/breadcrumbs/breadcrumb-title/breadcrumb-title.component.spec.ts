import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbTitleComponent } from './breadcrumb-title.component';

describe('BreadcrumbTitleComponent', () => {
  let component: BreadcrumbTitleComponent;
  let fixture: ComponentFixture<BreadcrumbTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrumbTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
