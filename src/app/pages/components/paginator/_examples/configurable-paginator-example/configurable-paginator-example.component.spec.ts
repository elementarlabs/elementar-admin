import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurablePaginatorExampleComponent } from './configurable-paginator-example.component';

describe('ConfigurablePaginatorExampleComponent', () => {
  let component: ConfigurablePaginatorExampleComponent;
  let fixture: ComponentFixture<ConfigurablePaginatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurablePaginatorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigurablePaginatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
