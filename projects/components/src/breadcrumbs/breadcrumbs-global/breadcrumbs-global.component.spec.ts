import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsGlobalComponent } from './breadcrumbs-global.component';

describe('BreadcrumbsGlobalComponent', () => {
  let component: BreadcrumbsGlobalComponent;
  let fixture: ComponentFixture<BreadcrumbsGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
