import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWithIconsExampleComponent } from './menu-with-icons-example.component';

describe('MenuWithIconsExampleComponent', () => {
  let component: MenuWithIconsExampleComponent;
  let fixture: ComponentFixture<MenuWithIconsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuWithIconsExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuWithIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
