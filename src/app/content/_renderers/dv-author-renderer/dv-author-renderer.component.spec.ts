import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvAuthorRendererComponent } from './dv-author-renderer.component';

describe('DvAuthorRendererComponent', () => {
  let component: DvAuthorRendererComponent;
  let fixture: ComponentFixture<DvAuthorRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvAuthorRendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DvAuthorRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
