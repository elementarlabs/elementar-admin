import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDividerComponent } from './h-divider.component';

describe('HDividerComponent', () => {
  let component: HDividerComponent;
  let fixture: ComponentFixture<HDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HDividerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
