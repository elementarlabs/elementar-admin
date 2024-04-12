import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIconExampleComponent } from './basic-icon-example.component';

describe('BasicIconExampleComponent', () => {
  let component: BasicIconExampleComponent;
  let fixture: ComponentFixture<BasicIconExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicIconExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicIconExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
