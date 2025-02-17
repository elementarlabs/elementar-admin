import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTextEditorExampleComponent } from './basic-text-editor-example.component';

describe('BasicTextEditorExampleComponent', () => {
  let component: BasicTextEditorExampleComponent;
  let fixture: ComponentFixture<BasicTextEditorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTextEditorExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTextEditorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
