import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedMenuExampleComponent } from './nested-menu-example.component';

describe('NestedMenuExampleComponent', () => {
  let component: NestedMenuExampleComponent;
  let fixture: ComponentFixture<NestedMenuExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedMenuExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedMenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
