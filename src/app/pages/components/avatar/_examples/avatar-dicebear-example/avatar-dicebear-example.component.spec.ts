import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDicebearExampleComponent } from './avatar-dicebear-example.component';

describe('AvatarDicebearExampleComponent', () => {
  let component: AvatarDicebearExampleComponent;
  let fixture: ComponentFixture<AvatarDicebearExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarDicebearExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarDicebearExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
