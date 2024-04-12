import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbActiveItemComponent } from './breadcrumb-active-item.component';

describe('BreadcrumbActiveItemComponent', () => {
  let component: BreadcrumbActiveItemComponent;
  let fixture: ComponentFixture<BreadcrumbActiveItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbActiveItemComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbActiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
