import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalidaStoryPostPreviewComponent } from './nalida-story-post-preview.component';

describe('NalidaStoryPostPreviewComponent', () => {
  let component: NalidaStoryPostPreviewComponent;
  let fixture: ComponentFixture<NalidaStoryPostPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalidaStoryPostPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalidaStoryPostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
