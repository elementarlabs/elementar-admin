import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFooterComponent } from './layout-footer.component';

describe('LayoutFooterComponent', () => {
  let component: LayoutFooterComponent;
  let fixture: ComponentFixture<LayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
