import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGroupsExampleComponent } from './option-groups-example.component';

describe('OptionGroupsExampleComponent', () => {
  let component: OptionGroupsExampleComponent;
  let fixture: ComponentFixture<OptionGroupsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionGroupsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionGroupsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
