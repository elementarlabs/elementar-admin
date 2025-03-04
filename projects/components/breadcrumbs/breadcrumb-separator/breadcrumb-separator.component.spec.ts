import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSeparatorComponent } from './breadcrumb-separator.component';

describe('BreadcrumbSeparatorComponent', () => {
  let component: BreadcrumbSeparatorComponent;
  let fixture: ComponentFixture<BreadcrumbSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [BreadcrumbSeparatorComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
