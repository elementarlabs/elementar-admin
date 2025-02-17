import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhosphorIconsExampleComponent } from './phosphor-icons-example.component';

describe('PhosphorIconsExampleComponent', () => {
  let component: PhosphorIconsExampleComponent;
  let fixture: ComponentFixture<PhosphorIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhosphorIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhosphorIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
