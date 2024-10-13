import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeWidgetComponent } from './exchange-widget.component';

describe('ExchangeWidgetComponent', () => {
  let component: ExchangeWidgetComponent;
  let fixture: ComponentFixture<ExchangeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExchangeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
