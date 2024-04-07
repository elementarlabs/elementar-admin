import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearButtonExampleComponent } from './clear-button-example.component';

describe('ClearButtonExampleComponent', () => {
  let component: ClearButtonExampleComponent;
  let fixture: ComponentFixture<ClearButtonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearButtonExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClearButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
