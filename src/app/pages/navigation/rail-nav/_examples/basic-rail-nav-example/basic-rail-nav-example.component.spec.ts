import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRailNavExampleComponent } from './basic-rail-nav-example.component';

describe('BasicRailNavExampleComponent', () => {
  let component: BasicRailNavExampleComponent;
  let fixture: ComponentFixture<BasicRailNavExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicRailNavExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicRailNavExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
