import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicContentFadeExampleComponent } from './basic-content-fade-example.component';

describe('BasicContentFadeExampleComponent', () => {
  let component: BasicContentFadeExampleComponent;
  let fixture: ComponentFixture<BasicContentFadeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicContentFadeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicContentFadeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
