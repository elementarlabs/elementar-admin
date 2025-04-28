import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExpandExampleComponent } from './basic-expand-example.component';

describe('BasicExpandExampleComponent', () => {
  let component: BasicExpandExampleComponent;
  let fixture: ComponentFixture<BasicExpandExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicExpandExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicExpandExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
