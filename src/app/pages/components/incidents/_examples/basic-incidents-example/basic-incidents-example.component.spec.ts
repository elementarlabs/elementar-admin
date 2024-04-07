import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIncidentsExampleComponent } from './basic-incidents-example.component';

describe('BasicIncidentsExampleComponent', () => {
  let component: BasicIncidentsExampleComponent;
  let fixture: ComponentFixture<BasicIncidentsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicIncidentsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicIncidentsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
