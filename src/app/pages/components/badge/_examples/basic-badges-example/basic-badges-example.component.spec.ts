import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBadgesExampleComponent } from './basic-badges-example.component';

describe('BasicBadgesExampleComponent', () => {
  let component: BasicBadgesExampleComponent;
  let fixture: ComponentFixture<BasicBadgesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBadgesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicBadgesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
