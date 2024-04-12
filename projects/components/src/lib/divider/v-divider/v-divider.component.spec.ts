import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDividerComponent } from './v-divider.component';

describe('VDividerComponent', () => {
  let component: VDividerComponent;
  let fixture: ComponentFixture<VDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
