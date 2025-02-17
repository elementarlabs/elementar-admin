import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChipsExampleComponent } from './basic-chips-example.component';

describe('BasicChipsExampleComponent', () => {
  let component: BasicChipsExampleComponent;
  let fixture: ComponentFixture<BasicChipsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicChipsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicChipsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
