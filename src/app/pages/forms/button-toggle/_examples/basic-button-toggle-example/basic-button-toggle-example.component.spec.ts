import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicButtonToggleExampleComponent } from './basic-button-toggle-example.component';

describe('BasicButtonToggleExampleComponent', () => {
  let component: BasicButtonToggleExampleComponent;
  let fixture: ComponentFixture<BasicButtonToggleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicButtonToggleExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicButtonToggleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
