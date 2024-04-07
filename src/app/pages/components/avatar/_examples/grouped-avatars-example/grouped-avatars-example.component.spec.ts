import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedAvatarsExampleComponent } from './grouped-avatars-example.component';

describe('GroupedAvatarsExampleComponent', () => {
  let component: GroupedAvatarsExampleComponent;
  let fixture: ComponentFixture<GroupedAvatarsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedAvatarsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupedAvatarsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
