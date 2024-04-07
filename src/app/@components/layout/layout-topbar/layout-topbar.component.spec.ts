import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTopbarComponent } from './layout-topbar.component';

describe('LayoutTopbarComponent', () => {
  let component: LayoutTopbarComponent;
  let fixture: ComponentFixture<LayoutTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTopbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
