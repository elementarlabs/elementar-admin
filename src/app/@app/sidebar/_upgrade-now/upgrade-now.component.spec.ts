import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeNowComponent } from './upgrade-now.component';

describe('UpgradeNowComponent', () => {
  let component: UpgradeNowComponent;
  let fixture: ComponentFixture<UpgradeNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpgradeNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
