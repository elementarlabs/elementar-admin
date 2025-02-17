import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMenuExampleComponent } from './basic-menu-example.component';

describe('BasicMenuExampleComponent', () => {
  let component: BasicMenuExampleComponent;
  let fixture: ComponentFixture<BasicMenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicMenuExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicMenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
