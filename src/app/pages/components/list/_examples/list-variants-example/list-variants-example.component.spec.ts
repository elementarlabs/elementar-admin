import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVariantsExampleComponent } from './list-variants-example.component';

describe('ListVariantsExampleComponent', () => {
  let component: ListVariantsExampleComponent;
  let fixture: ComponentFixture<ListVariantsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVariantsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListVariantsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
