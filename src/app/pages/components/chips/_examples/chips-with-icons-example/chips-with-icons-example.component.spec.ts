import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsWithIconsExampleComponent } from './chips-with-icons-example.component';

describe('ChipsWithIconsExampleComponent', () => {
  let component: ChipsWithIconsExampleComponent;
  let fixture: ComponentFixture<ChipsWithIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsWithIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipsWithIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
