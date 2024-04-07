import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSizesExampleComponent } from './avatar-sizes-example.component';

describe('AvatarSizesExampleComponent', () => {
  let component: AvatarSizesExampleComponent;
  let fixture: ComponentFixture<AvatarSizesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarSizesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarSizesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
