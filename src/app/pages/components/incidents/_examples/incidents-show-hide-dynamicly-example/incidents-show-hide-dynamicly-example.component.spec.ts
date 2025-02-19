import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsShowHideDynamiclyExampleComponent } from './incidents-show-hide-dynamicly-example.component';

describe('IncidentsShowHideDynamiclyExampleComponent', () => {
  let component: IncidentsShowHideDynamiclyExampleComponent;
  let fixture: ComponentFixture<IncidentsShowHideDynamiclyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentsShowHideDynamiclyExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentsShowHideDynamiclyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
