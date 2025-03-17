import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCookiePopupExampleComponent } from './basic-cookie-popup-example.component';

describe('BasicCookiePopupExampleComponent', () => {
  let component: BasicCookiePopupExampleComponent;
  let fixture: ComponentFixture<BasicCookiePopupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCookiePopupExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCookiePopupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
