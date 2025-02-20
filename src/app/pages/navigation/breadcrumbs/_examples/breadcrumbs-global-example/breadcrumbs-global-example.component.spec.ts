import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsGlobalExampleComponent } from './breadcrumbs-global-example.component';

describe('BreadcrumbsGlobalExampleComponent', () => {
  let component: BreadcrumbsGlobalExampleComponent;
  let fixture: ComponentFixture<BreadcrumbsGlobalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsGlobalExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsGlobalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
