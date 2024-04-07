import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedAndTotalAvatarsExampleComponent } from './grouped-and-total-avatars-example.component';

describe('GroupedAndTotalAvatarsExampleComponent', () => {
  let component: GroupedAndTotalAvatarsExampleComponent;
  let fixture: ComponentFixture<GroupedAndTotalAvatarsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedAndTotalAvatarsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupedAndTotalAvatarsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
