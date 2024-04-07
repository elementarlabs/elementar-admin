import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAvatarExampleComponent } from './basic-avatar-example.component';

describe('BasicAvatarExampleComponent', () => {
  let component: BasicAvatarExampleComponent;
  let fixture: ComponentFixture<BasicAvatarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAvatarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicAvatarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
