import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDialog } from './youtube.dialog';

describe('YoutubeDialog', () => {
  let component: YoutubeDialog;
  let fixture: ComponentFixture<YoutubeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
