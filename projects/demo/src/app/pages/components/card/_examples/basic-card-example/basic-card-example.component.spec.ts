import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCardExampleComponent } from './basic-card-example.component';

describe('BasicCardExampleComponent', () => {
  let component: BasicCardExampleComponent;
  let fixture: ComponentFixture<BasicCardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCardExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
