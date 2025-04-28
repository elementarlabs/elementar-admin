import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetValueExampleComponent } from './get-set-value-example.component';

describe('GetSetValueExampleComponent', () => {
  let component: GetSetValueExampleComponent;
  let fixture: ComponentFixture<GetSetValueExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSetValueExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetSetValueExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
