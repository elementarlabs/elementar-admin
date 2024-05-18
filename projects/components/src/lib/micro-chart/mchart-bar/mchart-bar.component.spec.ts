import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartBarComponent } from './mchart-bar.component';

describe('MchartBarComponent', () => {
  let component: MchartBarComponent;
  let fixture: ComponentFixture<MchartBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MchartBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MchartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
