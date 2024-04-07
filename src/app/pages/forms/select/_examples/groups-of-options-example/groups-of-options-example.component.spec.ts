import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsOfOptionsExampleComponent } from './groups-of-options-example.component';

describe('GroupsOfOptionsExampleComponent', () => {
  let component: GroupsOfOptionsExampleComponent;
  let fixture: ComponentFixture<GroupsOfOptionsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsOfOptionsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupsOfOptionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
