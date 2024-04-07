import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBreadcrumbsExampleComponent } from './basic-breadcrumbs-example.component';

describe('BasicBreadcrumbsExampleComponent', () => {
  let component: BasicBreadcrumbsExampleComponent;
  let fixture: ComponentFixture<BasicBreadcrumbsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBreadcrumbsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicBreadcrumbsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
