import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderWithFooterExampleComponent } from './layout-header-with-footer-example.component';

describe('LayoutHeaderWithFooterExampleComponent', () => {
  let component: LayoutHeaderWithFooterExampleComponent;
  let fixture: ComponentFixture<LayoutHeaderWithFooterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutHeaderWithFooterExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutHeaderWithFooterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
