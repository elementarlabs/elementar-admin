import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCommandBarExampleComponent } from './basic-command-bar-example.component';

describe('BasicCommandBarExampleComponent', () => {
  let component: BasicCommandBarExampleComponent;
  let fixture: ComponentFixture<BasicCommandBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCommandBarExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicCommandBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
