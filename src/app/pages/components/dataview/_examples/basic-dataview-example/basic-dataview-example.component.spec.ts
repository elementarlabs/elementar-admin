import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataviewExampleComponent } from './basic-dataview-example.component';

describe('BasicDataviewExampleComponent', () => {
  let component: BasicDataviewExampleComponent;
  let fixture: ComponentFixture<BasicDataviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDataviewExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicDataviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
