import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeToProComponent } from './upgrade-to-pro.component';

describe('UpgradeToProComponent', () => {
  let component: UpgradeToProComponent;
  let fixture: ComponentFixture<UpgradeToProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeToProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpgradeToProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
