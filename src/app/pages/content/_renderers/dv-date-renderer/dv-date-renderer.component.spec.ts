import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvDateRendererComponent } from './dv-date-renderer.component';

describe('DvDateRendererComponent', () => {
  let component: DvDateRendererComponent;
  let fixture: ComponentFixture<DvDateRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvDateRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DvDateRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
