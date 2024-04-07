import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNavigationExampleComponent } from './basic-navigation-example.component';

describe('BasicNavigationExampleComponent', () => {
  let component: BasicNavigationExampleComponent;
  let fixture: ComponentFixture<BasicNavigationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicNavigationExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicNavigationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
