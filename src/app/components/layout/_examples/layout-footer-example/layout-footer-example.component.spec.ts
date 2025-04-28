import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFooterExampleComponent } from './layout-footer-example.component';

describe('LayoutFooterExampleComponent', () => {
  let component: LayoutFooterExampleComponent;
  let fixture: ComponentFixture<LayoutFooterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutFooterExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutFooterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
